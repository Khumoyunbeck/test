import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";

function AdminLogin() {
    const email = useRef()
    const password = useRef()
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate()


    let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.email !== "" || values?.password !== "") {
            axios.post("admin/login",
                {
                    email: values?.email,
                    password: values?.password,
                }
            ).then(
                e => {
                    localStorage.setItem("admin_id", e?.data?._id)
                    localStorage.setItem("admin_token", e.data?.token)
                    localStorage.removeItem("user_token")
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("bank_token")
                    localStorage.removeItem("bank_id")
                    localStorage.removeItem("moderator_token")
                    localStorage.removeItem("moderator_id")
                    navigate('/admin/applications')
                }
            ).catch(e => console.log(e))
        }
    }

    useEffect(() => {
        if (!!token) navigate('/admin/cards')
    }, [token])

    return (
        <div className="wr100">
            <div className='accountbg'></div>
            <div className='home-btn d-none d-sm-block'>
                <a href='/' className='text-white'>
                    <i className='fa-solid fa-house'></i>
                </a>
            </div>
            <div className='wrapper-page'>
                <div className='card card-pages shadow-none'>
                    <div className='card-avto-body'>
                        <div className='text-center m-t-0 m-b-15'>
                            <a href='' className='logo logo-admin'>
                                <h1>RAUTO</h1>
                            </a>
                        </div>
                        <h5 className='font-18 text-center'></h5>
                        <form
                            className='form-horizontal m-t-30 el_form'
                            onSubmit={e => handleSubmit(e)}
                        >
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>Email</label>
                                    <input
                                        ref={email}
                                        className='form-control email_input'
                                        type='email'
                                        required
                                        name='email'
                                        placeholder='Email'
                                        value={values?.email}
                                        onChange={event => setValues({
                                            ...values,
                                            email: event.target.value
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>Password</label>
                                    <input
                                        ref={password}
                                        className='form-control password_input'
                                        type='password'
                                        required
                                        name='password'
                                        placeholder='Password'
                                        value={values?.password}
                                        onChange={event => setValues({
                                            ...values,
                                            password: event.target.value
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='form-group text-center m-t-20'>
                                <div className='col-12'>
                                    <button
                                        className='btn btn-primary btn-block btn-lg waves-effect waves-light'
                                        type='submit'
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
