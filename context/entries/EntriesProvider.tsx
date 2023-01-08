import { FC, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'

export interface EntriesState {
    entries: Entry[]
}



const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}

interface Props {
    children?: React.ReactNode | undefined,
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] Entry-Updated', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            //Methods
            addNewEntry,
            updateEntry
        }} >
            {children}
        </EntriesContext.Provider>
    )
}