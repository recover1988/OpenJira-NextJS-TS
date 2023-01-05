import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

    // const [isAdding, setIsAdding] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [touched, setTouched] = useState(false)

    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const { addNewEntry } = useContext(EntriesContext)

    const { isAddingEntry,setIsAddingEntry } = useContext(UIContext)

    const onSave = () => {
        if (inputValue.length === 0) return

        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue('')

    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry
                    ? (
                        <>
                            <TextField
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                                helperText={inputValue.length <= 0 && touched && 'Ingrese un Valor'}
                                error={inputValue.length <= 0 && touched}
                                value={inputValue}
                                onChange={onTextFieldChanges}
                                onBlur={() => setTouched(true)}
                            />
                            <Box display='flex' justifyContent='space-between'>
                                <Button
                                    variant='text'
                                    onClick={() => setIsAddingEntry(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    endIcon={<SaveOutlinedIcon />}
                                    onClick={onSave}
                                >
                                    Guardar
                                </Button>
                            </Box>
                        </>
                    )
                    : (
                        <>
                            <Button
                                startIcon={<AddCircleOutlineOutlinedIcon />}
                                fullWidth
                                variant='outlined'
                                onClick={() => setIsAddingEntry(true)}
                            >
                                Agregar Tarea
                            </Button>
                        </>
                    )
            }

        </Box>
    )
}
