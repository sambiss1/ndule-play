import React from 'react';

import { useParams } from 'react-router-dom';

export const SingleSong = () => {

    const { id } = useParams()

    console.log(id)
    return (
        <div>SingleSong</div>
    )
}

export default SingleSong