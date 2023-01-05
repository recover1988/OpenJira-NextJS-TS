import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
    entries: Entry[]; // todo: falta el tipo de dtao del arreglo
    //Methods
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as ContextProps)