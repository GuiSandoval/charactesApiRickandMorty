import { createContext, useState, useContext } from 'react';

const InputContext = createContext({})

export function InputProvider({ children }) {
    const [inputFilter, setInputFilter] = useState("");

    return (
        <InputContext.Provider value={{ inputFilter, setInputFilter }}>
            {children}
        </InputContext.Provider>
    );
}

export function useInputFilter() {
    const context = useContext(InputContext);
    
    return context;
}