import { createContext, useState } from "react";
import { ThemeContextProvderType } from "../types";
// import { theme } from "./theme";


type UserType = {
    name: string;
    email: string;
    age: number;
};

type UserContextTypes = {
    user: UserType | null,
    addNewUser: () => void;
};

export const ThemeContext = createContext<UserContextTypes | null>(null);

const Provider = ThemeContext.Provider;

export const ThemeContextProvider = ({ children }: ThemeContextProvderType) => {
    const [user, setUser] = useState<UserType | null>(null);

    const addNewUser = () => {
        setUser({
            name: 'Patrick',
            email: "kalupatrick93@gmail.com",
            age: 36,
        });
    };

    return (
        <Provider value={{ user, addNewUser }}>
            {children}
        </Provider>
    );
};

// const ThemeData = () => {
//     return useContext(ThemeContext);
// };

// export default ThemeData;
