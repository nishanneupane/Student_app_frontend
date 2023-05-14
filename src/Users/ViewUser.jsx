import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
    const [user,setUser]=useState({
        name:"",
        userName:"",
        email:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUsers();

    },[])
    const loadUsers=async ()=>{
        const result=await axios.get(`http://localhost:2023/api/v1/user/${id}`);
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 border rounded p-4 mt-2 shadow flex m-auto">
                    <h2 className="text-center m-4">User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.id}
                            <ul className='list-group list-group-fludh text-center'>
                                <li className='list-group-item'>
                                    <b>Name : </b>{user.name}
                                </li>

                                <li className='list-group-item'>
                                    <b>Username : </b>{user.userName}
                                </li>

                                <li className='list-group-item'>
                                    <b>E-mail : </b>{user.email}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <Link className='btn btn-outline-info my-2' to="/">Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewUser