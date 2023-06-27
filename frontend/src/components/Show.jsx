import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {

    const { id } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/data/show/'+id)
        .then(data => setInfo(data.data.data))
        .catch(err => console.log(err));
    },[]);

    return (
        <div className='show'>
            <h1 className="heading"> { (info)?info.title:'' } </h1>
            <p className="description"> { (info)?info.description:'' } </p>
        </div>
    );
}

export default Show;
