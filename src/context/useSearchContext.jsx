import { useState, createContext, useContext } from "react";

const SearchContext = createContext();

const AppProvider = ({children}) => {
 const [keyWord, setKeyWord] = useState('властелин колец');

    return <SearchContext.Provider value={{setKeyWord, keyWord}}>
        {children}
    </SearchContext.Provider>
}

const useSearchContext = () => {
    return useContext(SearchContext);
}

export {AppProvider, useSearchContext}