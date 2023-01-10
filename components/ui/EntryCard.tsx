import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC, DragEvent } from 'react'
import { Entry } from '../../interfaces';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext)
    const router = useRouter()

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id)

        // todo :modificar el estado para hacer el drag
        startDragging()
    }

    const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
        //todo: cancelar on drag
        endDragging()
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }

    return (
        <Card
            sx={{
                marginBottom: 1
            }}
            onClick={onClick}
            //evento de drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }} >
                    <Typography variant='body2' >hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
