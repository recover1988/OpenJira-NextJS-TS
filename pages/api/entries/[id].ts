import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';
import { stat } from 'fs';

type Data =
    | { message: string }
    | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query // siempre son string el query
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'El id no es valido ' + id })
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res)
        case 'GET':
            return getEntry(req, res)

        default:
            return res.status(400).json({ message: 'Metodo no existe' })
    }
}


const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query
    await db.connect()
    const entryToUpdate = await Entry.findById(id)
    if (!entryToUpdate) {
        await db.disconnect()
        return res.status(400).json({ message: 'No ha entradas conn ese ID: ' + id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
        await db.disconnect()
        res.status(200).json(updatedEntry!)

    } catch (error) {
        console.log({ error })
        await db.disconnect()
        res.status(400).json({ message: JSON.stringify(error) })
        // si conoce el error podemos ser mas especificos podemos poner en message: error.errors.status.message y esto nos daria un mensaje
        // pero abria que ver para cada caso si es posible
    }

    // entryToUpdate.description=description
    // entryToUpdate.status=status
    // await entryToUpdate.save()


}
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query
    await db.connect()
    const entryInDB = await Entry.findById(id)
    await db.disconnect()
    if (!entryInDB) {
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id })
    }
    return res.status(200).json(entryInDB)
    // try {
    //     await db.disconnect()
    //     res.status(200).json(entryInDB!)
    // } catch (error) {
    //     console.log({ error })
    //     await db.disconnect()
    //     res.status(400).json({ message: JSON.stringify(error) })
    // }

}