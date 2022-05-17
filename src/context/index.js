import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = [];

const reducer = (state, action) => {
    if (action.type === "ADD_DATA") {
        let newState = [...state];
        newState.push(action.payload.data);
        return newState;
    }
    return state;
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addData = (data) => {
        dispatch({ type: "ADD_DATA", payload: { data } });
    }

    return <AppContext.Provider value={
        { state, addData }
    }>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };