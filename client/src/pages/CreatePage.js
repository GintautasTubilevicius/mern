import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import {useNavigate} from 'react-router-dom'

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const { request } = useHttp()

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async (event) => {

        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
                })
                navigate(`/detail/${data.link._id}`)
            } catch (e) { }
        }
    }

    return (
        <div className="row" style={{ paddingTop: '2rem' }}>
            <div className="col s8 offset-s2"></div>
            <div className="input-field">
                <input
                    placeholder="Pridekite nuoroda"
                    id="link"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyDown={pressHandler}
                />
                <label htmlFor="link">Iveskite nuoroda</label>
            </div>
        </div>
    )
}