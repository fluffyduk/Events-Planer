import React from "react";
import avatar from '../photos/avatar.jpg';
import axios from "axios";
import {useEffect, useState} from "react";

const h3Style = 'font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]';
const dataStyle = 'font-gilroy_semibold text-white text-[24px] leading-[17px]';
const buttonStyle = 'bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2';

const Profile = () => {
    // let profile_data = '';

    // axios.get('http://127.0.0.1:8000/api/profile/', {
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    //     }
    // })
    // .then(response => {
    //     profile_data = response.data;
    //     console.log(profile_data.full_name);
    // })
    // .catch(error => {
    //     console.log('Oshibka?')
    // });

    const [userdata, setUserdata] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/'
        } else {
            (async () => {
                try {
                    const data = await axios.get('http://127.0.0.1:8000/api/profile/', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    });
                    setUserdata(data.data);
                } catch(e) {
                    console.log('not auth');
                }
            })()
        };
    }, []);

    console.log(userdata);

    return (
        <div className="bg-[#71798C] w-screen h-auto p-6">
            <div className="w-[1283px] h-[283px] bg-[#292C33] rounded-3xl p-6">
                <div className="flex items-center mb-3">
                    <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                    <h1 className="font-gilroy_semibold text-white text-[32px] mr-auto leading-[38px]">Профиль</h1>
                    <button className={buttonStyle}>Редактировать</button>
                </div>
                <div className="flex flex-row items-start gap-6">
                    <img src={avatar} width='185' height='185' alt='Кнопка профиля' className="rounded-[50%]"/>
                    <div className="flex flex-col">
                        <h2 className="font-gilroy_semibold text-white text-[32px] leading-[38px] mb-6">{userdata.full_name}</h2>
                        <div className="flex flex-row gap-6 mb-6">
                            <div>
                                <h3 className={h3Style}>Статус</h3>
                                <p className={dataStyle}>Заместитель председателя</p>
                            </div>
                            <div>
                                <h3 className={h3Style}>Комиссия</h3>
                                <p className={dataStyle}>{userdata.commission}</p>
                            </div>
                        </div>
                        <div className="flex flex-row place-content-between gap-6">
                            <div>
                                <h3 className={h3Style}>Номер телефона</h3>
                                <p className={dataStyle}>+7 (906) 801-50-01</p>
                            </div>
                            <div>
                                <h3 className={h3Style}>Почта</h3>
                                <p className={dataStyle}>rsvingr@gmail.com</p>
                            </div>
                            <div>
                                <h3 className={h3Style}>День рождения</h3>
                                <p className={dataStyle}>{userdata.date_of_birth}</p>
                            </div>
                            <div>
                                <h3 className={h3Style}>Адрес</h3>
                                <p className={dataStyle}>Комсомольская улица, 70</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-[303px] h-[490px] bg-[#292C33] rounded-3xl p-6 mt-6">
                    <div className="flex items-center mb-3">
                        <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                        <h1 className="font-gilroy_semibold text-white text-[32px] mr-auto leading-[38px]">Календарь</h1>
                    </div>
                    <div className="w-auto h-[392px] bg-white rounded-2xl"/>
                </div>
                <div className="w-[956px] h-[558px] bg-[#292C33] rounded-3xl p-6 mt-6">
                    <div className="flex items-center mb-3">
                        <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                        <label className="mr-3">
                            <input type="radio" name="event" value="work" className="w-0 h-0 absolute opacity-0" checked/>
                            <h1 className="font-gilroy_semibold text-white text-[32px] leading-[38px]">Задачи</h1>
                        </label>
                        <label className="mr-auto">
                            <input type="radio" name="event" value="work" className="w-0 h-0 absolute opacity-0"/>
                            <h1 className="font-gilroy_semibold text-white text-[32px] leading-[38px] opacity-50">Мероприятия</h1>
                        </label>
                        <button className='bg-[#0077EB] w-[103px] h-[34px] rounded-xl font-gilroy_semibold text-white text-[15px] leading-[18px] p-2'>Сортировка</button>
                    </div>
                    {/* <div className="w-auto h-[392px] bg-white rounded-2xl"/> */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
