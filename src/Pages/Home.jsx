import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Layout/Navbar';
import { Link, useParams } from 'react-router-dom';
import "./Home.css"


const Home = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:2023/api/v1/");

        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:2023/api/v1/user/${id}`);
        loadUsers();
    };

    return (
        <div className='container fit'>
            <div className="py-4 pt-5 container">
                <table className="table border shadow rounded m-auto custom-home-background">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">First</th>

                            <th scope='col'> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{users.name}</td>

                                    <td>
                                        <Link className='btn btn-outline-primary' to={`/viewuser/${users.id}`}>View</Link>
                                        <Link className='btn btn-outline-info px-5 mx-3' to={`/user/${users.id}`}>Edit</Link>
                                        <button className='btn btn-outline-danger px-2'
                                            onClick={() => deleteUser(users.id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>

                </table>
                <div className="viewAllUsers">
                    <Link className='btn btn-outline-info px-5 mx-3 mt-2' to="/users/viewall">ViewAll</Link>
                </div>
            </div>

        </div>
    )
}

export default Home