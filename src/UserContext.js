import { React, useEffect, useState, useContext, createContext } from "react"

export const UserContext = createContext({ token: "", auth: false })


export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1"
    const REDIRECT_URI = "http://localhost:3000/home"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    // const [token, setToken] = useState("")

    const [user, setUser] = useState({ token: "", auth: false })
    const login = () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        // setToken(token)
        setUser({
            token: token,
            auth: true
        })


        console.log(token)

    }
    const handleLogin = (user) => {

        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    }
    useEffect(() => {
        login()

    }, [])






    const logout = () => {
        window.localStorage.removeItem("token")
        setUser({
            token: "",
            auth: false
        })
    }

    return (

        <UserContext.Provider value={{ login, user, logout, handleLogin }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider