import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../AppwriteConfig";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  // Corrected "childern" to "children"

    const [loading, setLoading] = useState(true);  // Initial loading state should be true to prevent flicker
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const logInUser = async (userInfo) => {
        setLoading(true);
        try {
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password,
            );
            let accountDetail = await account.get();
            console.log("accountDetail", accountDetail);
            setUser(accountDetail);
            alert("login successfully")
        } catch (error) {
            console.error(error);
        } 
            setLoading(false);
        
    };

    const logOutUser = async () => {
        await account.deleteSession('current');
        setUser(null);
        alert("loggedOut successfully")

    };

    const registerUser = async (userInfo) => {
        setLoading(true);
        try {
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1,
                userInfo.name
            );

            await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password1
            );
            let accountDetails = await account.get();
            setUser(accountDetails);
            alert("registerd successfully")

        } catch (error) {
            console.error(error);
        } 
            setLoading(false);
        
    };

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
           
        } 
            setLoading(false);
        
    };

    const contextData = {
        user,
        logInUser,
        logOutUser,
        registerUser,
        checkUserStatus
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children} {/* Corrected "childern" to "children" */}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
