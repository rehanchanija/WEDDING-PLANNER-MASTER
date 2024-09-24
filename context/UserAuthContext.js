import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [userData, setUserData] = React.useState({});
  const [eventCategory, setEventCategory] = React.useState("all");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const User = JSON.parse(localStorage.getItem("UserData"));
    if (token) {
      setToken(token);
      setUser(true);
      setUserData(User);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        userData,
        setUserData,
        eventCategory,
        setEventCategory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);

export { UserContext, UserProvider };
