import { List, Paper } from '@mui/material'
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries';
import { DragEvent } from 'react';
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext)

    const { isDragging, endDragging } = useContext(UIContext)
    //el useMemo necesita una funcion que devuelve un valor y lo guarda y en el array esta la dependencia que hace que se vuelva a ejecutar la funcion para obtener el nuevo valor a memorizar
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {

        const id = event.dataTransfer.getData('text')

        const entry = entries.find(e => e._id === id)!
        entry.status = status
        updateEntry(entry)
        endDragging()
    }

    return (
        //TODO aqui se hara el drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{
                height: 'calc(100vh - 250px)',
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: '1px 5px'
            }} >
                {/* TODO cambiara dependiendo si esta haciendo drag o no */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }} >
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }



                </List>

            </Paper>
        </div>
    )
}
