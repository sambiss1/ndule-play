import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
export const HomePage = () => {

    const { user, login, handleLogin, logout } = useContext(UserContext);

    return (
        <div>HomePage

            <div>
                <button

                    onClick={logout}
                >Logout</button>
            </div></div>
    )
}

export default HomePage