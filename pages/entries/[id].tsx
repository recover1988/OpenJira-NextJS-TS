import { capitalize, Card, CardContent, CardHeader, Grid, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';

import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from "../../components/layouts"
import { EntryStatus } from '../../interfaces';
import { useState, ChangeEvent } from 'react';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

export const EntryPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [status, setStatus] = useState<EntryStatus>('pending')
    const [touched, setTouched] = useState(false)


    const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus)
    }

    const onSave =()=>{
        
    }
    return (
        <Layout title="... ... ...">
            <>
                <Grid
                    container
                    justifyContent='center'
                    sx={{ marginTop: 2 }}
                >
                    <Grid
                        item
                        xs={12} sm={8} md={6}
                    >
                        <Card>
                            <CardHeader
                                title={`Entrada: ${inputValue}`}
                                subheader={`Creada hace:.... minutos`}
                            />

                            <CardContent>
                                <TextField
                                    sx={{ marginTop: 2, marginBottom: 1 }}
                                    fullWidth
                                    placeholder="Nueva entrada"
                                    autoFocus
                                    multiline
                                    label='Nueva entrada'
                                    value={inputValue}
                                    onChange={onInputValueChanged}
                                />

                                <FormControl>
                                    <FormLabel>Estado:</FormLabel>
                                    <RadioGroup
                                        row
                                        value={status}
                                        onChange={onStatusChanged}
                                    >
                                        {

                                            validStatus.map(option => (
                                                <FormControlLabel
                                                    key={option}
                                                    value={option}
                                                    control={<Radio />}
                                                    label={capitalize(option)}

                                                />
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <Button
                                    startIcon={<DataSaverOnOutlinedIcon />}
                                    variant='contained'
                                    fullWidth
                                    onClick={onSave}
                                >
                                    Save
                                </Button>
                            </CardActions>
                        </Card>


                    </Grid>

                </Grid>

                <IconButton
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        backgroundColor: 'error.dark'

                    }}
                >
                    <DeleteOutlinedIcon />
                </IconButton>
            </>
        </Layout>
    )
}
