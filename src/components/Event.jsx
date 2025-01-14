import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { format, parse } from 'date-fns';

const buttonStyle = 'bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2';
const textStyleSemibold = 'font-gilroy_semibold text-white';

const formateDate = (date) => {
    if (date !== undefined) {
        date = parse(date, 'yyyy-MM-dd', new Date());
        const curMonth = date.toLocaleString('ru', {month: "long"});
        const formatedDate = `${format(date, 'dd')} ${curMonth.slice(0, curMonth.length-1)}я ${format(date, 'yyyy')}`;
        return formatedDate
    }
    return ''
};

const Event = () => {
    const eventData = Object.fromEntries(new URLSearchParams(useLocation().search));
    const [event, setEvent] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/'
        } else {
            (async () => {
                try {
                    const data = await axios.get(`http://127.0.0.1:8000/api/event/${eventData.id}/`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    });
                    setEvent(data.data);
                } catch(e) {
                    console.log(e);
                }
            })()
        };
    }, [eventData.id]);

    console.log(event);

    return (
        <div className='mx-auto p-6 bg-[#71798C] w-screen h-screen'>
            <div className="bg-[#292C33] rounded-3xl p-6 h-full">
                <div className="flex items-center mb-[24px]">
                    <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                    <h1 className={`${textStyleSemibold} text-[40px] leading-[48px] mr-auto`}>Мероприятия</h1>
                    <button className={`${buttonStyle} w-[260px]`}>Редактировать</button>
                </div>
                <div className="flex items-end">
                    {/* Тут должен быть статус, участники и рейтинг */}
                </div>
                <p className={`${textStyleSemibold} text-[16px] leading-[20px] text-opacity-50`}>Название</p>
                <p className="font-gilroy_heavy text-[48px] text-white leading-[61px] mb-[12px]">{event.title}</p>
                <p className={`${textStyleSemibold} text-[16px] leading-[20px] text-opacity-50`}>Дата</p>
                <p className="font-gilroy_bold text-[24px] text-white leading-[30px] mb-[12px]">{formateDate(event.date)}</p>
                <p className={`${textStyleSemibold} text-[16px] leading-[20px] text-opacity-50`}>Описание</p>
                <p className="font-gilroy_bold text-[24px] text-white leading-[30px] mb-[12px]">{event.description}</p>
                <p className={`${textStyleSemibold} text-[16px] leading-[20px] text-opacity-50`}>Организаторы</p>
                {/* бля тут надо сделать загрузку организаторов, я пока хз как это делать */}
                <p className={`${textStyleSemibold} text-[16px] leading-[20px] text-opacity-50`}>Файлы</p>
                {/* Тут пока тоже хз, надо как-то разобраться, грузятся ли папки и файлы с ними */}
            </div>
        </div>
    );
}

export default Event
