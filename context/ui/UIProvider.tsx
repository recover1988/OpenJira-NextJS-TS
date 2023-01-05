import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

interface Props {
    children?: React.ReactNode | undefined,
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    //Abrir el menu de la barra lateral
    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }

    //Cerrar el menu de la barra lateral
    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
    }

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' })
    }

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' })
    }

    return (
        <UIContext.Provider value={{
            ...state, // sidemenuOpen: state.sidemenuOpen

            //Methods
            openSideMenu,
            closeSideMenu,


            setIsAddingEntry,

            startDragging,
            endDragging
        }} >
            {children}
        </UIContext.Provider>
    )
}
