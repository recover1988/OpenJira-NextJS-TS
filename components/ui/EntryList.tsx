import { List, Paper } from '@mui/material'
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries';

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext)
//el useMemo necesita una funcion que devuelve un valor y lo guarda y en el array esta la dependencia que hace que se vuelva a ejecutar la funcion para obtener el nuevo valor a memorizar
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])



    return (
        //TODO aqui se hara el drop
        <div>
            <Paper sx={{
                height: 'calc(100vh - 250px)',
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: '1px 5px'
            }} >
                {/* TODO cambiara dependiendo si esta haciendo drag o no */}
                <List sx={{ opacity: 1 }} >
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
