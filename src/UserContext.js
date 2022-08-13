import { React, useEffect, useState, useContext, createContext } from "react"

export const UserContext = createContext({ token: "", auth: false })


export const UserProvider = ({ children }) => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
    const RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE;


    const [token, setToken] = useState("")

    const [user, setUser] = useState({ token: "", auth: false })



    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
        setUser({
            token: token,
            auth: true
        })


        console.log(token)

    }, [])

    const login = () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
        setUser({
            token: token,
            auth: true
        })


        console.log(token)

    }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (

        <UserContext.Provider value={{ login, token, user }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider