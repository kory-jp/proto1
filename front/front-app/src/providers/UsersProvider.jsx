import React, {createContext, useState} from "react";

export const UsersContext = createContext({});

export const UsersProvider = (props) => {
  const {children} = props;
  const [usersProviderInfo, setUsersProviderInfo] = useState([]);
  return(
    <UsersContext.Provider value={{usersProviderInfo, setUsersProviderInfo}}>
    {children}
  </UsersContext.Provider>
  )
}