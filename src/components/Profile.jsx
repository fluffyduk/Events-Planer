import React from "react";
import profile from '../vector-images/profileicon.svg';

const Profile = () => {
    return (
        <div className="bg-[#71798C] w-screen h-auto p-6">
            <div class='profile-placeholder' className="w-auto h-[283px] bg-[#292C33] rounded-3xl p-6">
                <div className="flex items-center mb-3">
                    <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                    <h1 className="font-gilroy_semibold text-white text-[32px] mr-auto leading-[38px]">Профиль</h1>
                    <button className='bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2'>Редактировать</button>
                </div>
                <div className="flex flex-row items-start gap-6">
                    <img src={profile} alt='Кнопка профиля' className="w-[185px] h-[185px] rounded-full"/>
                    <div className="flex flex-col">
                        <h2 className="font-gilroy_semibold text-white text-[32px] leading-[38px] mb-6">Виноградов Арсений Александрович</h2>
                        <div className="flex flex-row gap-6 mb-6">
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]">Статус</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">Заместитель председателя</p>
                            </div>
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]">Комиссия</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">Информационная комиссия</p>
                            </div>
                        </div>
                        <div className="flex flex-row place-content-between gap-6">
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]">Номер телефона</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">+7 (906) 801-50-01</p>
                            </div>
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]">Почта</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">rsvingr@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]">День рождения</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">17.10.2005</p>
                            </div>
                            <div>
                                <h3 className="font-gilroy_semibold text-white opacity-50 text-[16px] leading-[19px] mb-[6px]   ">Адрес</h3>
                                <p className="font-gilroy_semibold text-white text-[24px] leading-[17px]">Комсомольская улица, 70</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <div class='calendar-placeholder' className="w-[303px] h-[490px] bg-[#292C33] rounded-3xl p-6 mt-6">
                    <div className="flex items-center mb-3">
                        <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                        <h1 className="font-gilroy_semibold text-white text-[32px] mr-auto leading-[38px]">Календарь</h1>
                    </div>
                    <div className="w-auto h-[392px] bg-white rounded-2xl"/>
                </div>
                <div class='events-placeholder' className="w-[956px] h-[558px] bg-[#292C33] rounded-3xl p-6 mt-6">
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
                    <div className="w-auto h-[392px] bg-white rounded-2xl"/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
