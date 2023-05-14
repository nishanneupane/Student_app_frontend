import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./CustomCss.css"

const AddUser = () => {
let navigate=useNavigate();

    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: ""
    });

    const { name, userName, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubbmit =async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:2023/api/v1/user",user);
        navigate("/");

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 border rounded p-4 mt-2 shadow flex m-auto custom_css_background">
                    <form onSubmit={(e)=>onSubbmit(e)}>
                        <h2 className="text-center m-4">Register User</h2>

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
                            <span className='p-2 mb-3 full custom_css_text_validation'>Enter the validate data only</span><br />
                        <button type='submit' className='btn btn-outline-info px-5 mt-3'>ADD</button>
                        <Link className='btn btn-outline-danger px-3 mx-2 mt-3' to="/">CANCEL</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddUser