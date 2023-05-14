import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./CustomCss.css"

const DisplayAllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:2023/api/v1/");

        setUsers(result.data);
    }
  return (
    <div className='container-full'>
            <div className="py-4 pt-5 container">
                <table className="table border shadow rounded custom_css_background m-auto">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">First</th>
                            <th scope="col">username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.userName}</td>
                                    <td>{users.email}</td>
                                </tr>

                            ))
                        }
                    
                    </tbody>
                    

                </table>
                <div className='btn btn-danger mt-5'>
                        <Link to="/" className="text-light">Go Back</Link>
                    </div>
            </div>

        </div>
  )
}

export default DisplayAllUsers