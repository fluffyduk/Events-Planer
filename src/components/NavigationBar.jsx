import React from "react";
import profile from '../vector-images/profileicon.svg';
import group from '../vector-images/groupicon.svg';
import calendar from '../vector-images/calendaricon.svg';
import files from '../vector-images/filesicon.svg';
import statistics from '../vector-images/statisticsicon.svg';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className='bg-[#474D59] w-[109px] h-[100vh] p-6'>
            <label className="block w-[61px] h-[61px] mx-auto mb-[23px]">
                {/* <input type="radio" name="navigation" value="profile" className="w-0 h-0 absolute opacity-0" checked/> */}
                <Link to='/profile'>
                    <div className="w-[61px] h-[61px] bg-[#333740] rounded-xl px-[18.3px] py-[13.98px]">
                        <img src={profile} alt='Кнопка профиля' className="cursor-pointer w-[24.4px] h-[30.5px]"/>
                    </div>
                </Link>
            </label>
            <label className="block w-[61px] h-[61px] mx-auto mb-[23px]">
                {/* <input type="radio" name="navigation" value="group" className="w-0 h-0 absolute opacity-0"/> */}
                <Link to='/events'>
                    <div className='w-[61px] h-[61px] bg-[#333740] rounded-xl px-[12.2px] py-[16.52px]'>
                        <img src={group} alt='Кнопка групп' className="cursor-pointer w-[36.6px] h-[30.5px]"/>
                    </div>
                </Link>
            </label>
            <label className="block w-[61px] h-[61px] mx-auto mb-[23px]">
                {/* <input type="radio" name="navigation" value="calendar" className="w-0 h-0 absolute opacity-0"/> */}
                <Link to='/calendar'>
                    <div className="w-[61px] h-[61px] bg-[#333740] rounded-xl px-[14.235px] py-[12.2px]">
                        <img src={calendar} alt='Кнопка календаря' className="cursor-pointer w-[32.53px] h-[36.6px]"/>
                    </div>
                </Link>
            </label>
            <label className="block w-[61px] h-[61px] mx-auto mb-[23px]">
                <input type="radio" name="navigation" value="files" className="w-0 h-0 absolute opacity-0"/>
                <div className="w-[61px] h-[61px] bg-[#333740] rounded-xl p-[12.2px]">
                    <img src={files} alt='Кнопка файлов' className="cursor-pointer w-[36.6px] h-[36.6px]"/>
                </div>
            </label>
            <label className="block w-[61px] h-[61px] mx-auto mb-[23px]">
                <input type="radio" name="navigation" value="statistics" className="w-0 h-0 absolute opacity-0"/>
                <div className="w-[61px] h-[61px] bg-[#333740] rounded-xl px-[12.2px] py-[15.25px]">
                    <img src={statistics} alt='Кнопка статистики' className="cursor-pointer w-[36.6px] h-[30.5px]"/>
                </div>
            </label>
        </div>
    );
}

export default NavigationBar;
