import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.UserId)
        } catch (e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Iveskite links</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Autorizacija</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Iveskite email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Iveskite slaptazodi"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4 authCard"
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Login</button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}