import { React, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { UserContext } from "../UserContext";

export const Albums = () => {
    return (
        <>
            Albums
            <Sidebar />
        </>
    )
}

export default Albums