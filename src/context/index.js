import React, { createContext, useContext, useState } from 'react';
const AppContext = createContext();

export const ContextProvider = ({ children }) => {

	const [activeNavLinkId, setActiveNavLinkId] = useState('');

    return (
		<AppContext.Provider 
			value={{
				activeNavLinkId, setActiveNavLinkId
			}}>
			{children}
		</AppContext.Provider>
  	)
};

export const useAppContext = () => {
    return useContext(AppContext);
}

export default ContextProvider;