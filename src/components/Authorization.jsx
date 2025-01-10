import React, { useState } from "react";
import axios from "axios";

const labelStyle = "font-gilroy_semibold text-[18px] text-[#202224] opacity-80 mb-[19px]";

const Authorization = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    const auth = async (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };

        const token = await axios.post('http://127.0.0.1:8000/token/', user, 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }, {withCredentials: true})
        .then(response => {
            console.log(response.data);
            localStorage.clear();
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
            window.location.href = '/profile'
        })
        .catch(error => {
            console.error('There was an error posting the data!', error);
        });
    };

    return (
        <form
            className="w-[630px] h-[633px] flex flex-col items-center px-[89px] py-[57px] gap-16 rounded-3xl border-[0.3px] border-[#B9B9B9] mx-auto mt-[calc(50vh-633px/2-0.32px)]"
            onSubmit={auth}>
            <h1 className="text-[32px] font-gilroy_bold text-[#202224]">Авторизация</h1>
            <div>
                <label id='login' className={labelStyle}>Логин</label>
                <input type='text' id='login' 
                className="w-[516px] h-[56px] rounded-lg bg-[#F1F4F9] border-[#D8D8D8] border-[1px] mb-[40px]"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <label id='password' className={labelStyle}>Пароль</label>
                <input type='password' id='password' 
                className="w-[516px] h-[56px] rounded-lg bg-[#F1F4F9] border-[#D8D8D8] border-[1px]"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type='submit' className="w-[418px] h-[56px] rounded-lg bg-[#0077EB] opacity-90 border-0 font-gilroy_bold text-[20px] text-white">Войти</button>
            </form>
    );
};

export default Authorization;