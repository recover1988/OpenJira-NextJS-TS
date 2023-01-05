import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;

    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;

    isAddingEntry: boolean;

    setIsAddingEntry: (isAdding: boolean) => void;

    startDragging: () => void;
    endDragging: () => void

    isDragging:boolean

}

export const UIContext = createContext({} as ContextProps)