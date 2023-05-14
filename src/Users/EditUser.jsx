import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: ""
    });

    const { name, userName, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const onSubbmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:2023/api/v1/user/${id}`, user);
        navigate("/");

    }


    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:2023/api/v1/user/${id}`);
        setUser(result.data);
    }

    

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 border rounded p-4 mt-2 shadow flex m-auto">
                    <form onSubmit={(e) => onSubbmit(e)}>
                        <h2 className="text-center m-4">Edit User</h2>

                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter your name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className='form-label'>Username</label>
                            <input type="text" className='form-control' placeholder='Enter your userName' name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className='form-label'>E-mail</label>
                            <input type="text" className='form-control' placeholder='Enter your email' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-outline-info px-5'>UPDATE</button>
                        <Link className='btn btn-outline-danger px-3 mx-2' to="/">CANCEL</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditUser