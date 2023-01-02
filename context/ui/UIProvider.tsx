import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sidemenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
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

    return (
        <UIContext.Provider value={{
            ...state, // sidemenuOpen: state.sidemenuOpen

            //Methods
            openSideMenu,
            closeSideMenu
        }} >
            {children}
        </UIContext.Provider>
    )
}
