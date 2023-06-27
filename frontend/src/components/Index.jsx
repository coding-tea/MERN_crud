import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Index = () => {

    const [data, setData] = useState();
    useEffect(() => {
      axios.get('http://localhost:5000/data/')
      .then((data) => {
        setData(data.data.data);
      })
      .catch(err => console.log(err));
    },[]);

    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    <th> # </th>
                    <th> title </th>
                    <th> description </th>
                    <th> action </th>
                </tr>
                </thead>
                <tbody>
                {
                    (data)?data.map(item => <tr>
                    <td> { item._id } </td>
                    <td> { item.title } </td>
                    <td> { item.description } </td>
                    <td className='action'>
                        <form action={"http://localhost:5000/data/delete/" + item._id} method='post'>
                            <Link to={'/show/' + item._id} > show </Link>
                            <input type="submit" value="delete" />
                        </form>
                    </td>
                    </tr>):''
                }
                </tbody>
            </table>
        </div>
    );
}

export default Index;
