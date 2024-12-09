import React from "react";
import { Link } from "react-router-dom";

const Authorization = () => {
    return (
        <form 
            class='auth_form' 
            className="w-[630px] h-[633px] flex flex-col items-center px-[89px] py-[57px] gap-16 rounded-3xl border-[0.3px] border-[#B9B9B9] mx-auto mt-[calc(50vh-633px/2-0.32px)]">
            <h1 class='auth_title' className="text-[32px] font-gilroy_bold text-[#202224]">Авторизация</h1>
            <div class='auth_inputs'>
                <p class='field_title' id='login' className="font-gilroy_semibold text-[18px] text-[#202224] opacity-80 mb-[19px]">Логин</p>
                <input class='input_field' type='text' id='login_input' className="w-[516px] h-[56px] rounded-lg bg-[#F1F4F9] border-[#D8D8D8] border-[1px] mb-[40px]"/>
                <p class='field_title' id='password' className="font-gilroy_semibold text-[18px] text-[#202224] opacity-80 mb-[19px]">Пароль</p>
                <input class='input_field' type='text' id='password_input' className="w-[516px] h-[56px] rounded-lg bg-[#F1F4F9] border-[#D8D8D8] border-[1px]"/>
            </div>
            <Link to='/profile'>
                <button className="w-[418px] h-[56px] rounded-lg bg-[#0077EB] opacity-90 border-0 font-gilroy_bold text-[20px] text-white">Войти</button>
            </Link>
        </form>
    )
}

export default Authorization;