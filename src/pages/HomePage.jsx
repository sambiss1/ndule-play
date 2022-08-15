import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
import Sidebar from '../components/Sidebar';
export const HomePage = () => {

    const { user, login, handleLogin, logout } = useContext(UserContext);

    return (
        <div>

            {/* <div>
                <button

                    onClick={logout}
                >Logout</button>
            </div> */}
            <Sidebar />
        </div>
    )
}

export default HomePage