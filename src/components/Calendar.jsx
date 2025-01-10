import React from "react";
import { eachDayOfInterval, endOfMonth, format, getDay, startOfMonth } from "date-fns";
import axios from "axios";
import {useEffect, useState} from "react";

const WEEKDAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const CALENDAR_HEADER_STYLE = 'font-gilroy_semibold leading-[39px] text-[32px] text-white';

const Calendar = () => {
    const curDate = new Date();
    const curMonth = curDate.toLocaleString('ru', {month: "long"});
    const firstDayOfMonth = startOfMonth(curDate);
    const lastDayOfMonth = endOfMonth(curDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    const startingDayIndex = getDay(firstDayOfMonth) + 6;

    const [events, setEvents] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/'
        } else {
            (async () => {
                try {
                    const data = await axios.get('http://127.0.0.1:8000/api/events/', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    });
                    setEvents(data.data);
                } catch(e) {
                    console.log(e);
                }
            })()
        };
    }, []);

    console.log(events);

    return (
    <div className='mx-auto p-6 bg-[#71798C] w-screen h-auto'>
        <div className="bg-[#292C33] rounded-3xl p-6 h-full">
            <div className="flex items-center mb-3">
                <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                <h1 className="font-gilroy_semibold text-white text-[32px] mr-auto leading-[38px]">Календарь</h1>
            </div>
            <div className="mb-4 flex justify-center">
                <button className={CALENDAR_HEADER_STYLE}>{'<'}</button>
                <h2 className={`${CALENDAR_HEADER_STYLE} mx-[11px]`}>{curMonth[0].toUpperCase() + curMonth.slice(1) }</h2>
                <button className={CALENDAR_HEADER_STYLE}>{'>'}</button>
            </div>
            <div className='grid grid-cols-7 border border-white rounded-3xl border-opacity-50'>
                {WEEKDAYS.map((day) => {
                    return <div key={day} className={`font-gilroy_medium text-white text-center 
                        border-b border-r border-white border-opacity-50 
                        ${day === 'вс' ? 'border-r-0' : 'border-r-1'}`}>{day}</div>;
                })}
                {Array.from({length: startingDayIndex}).map((_, index) => {
                    return <div key={`empty-${index}`} className='p-2 text-center bg-white h-1/8'/>;
                })}
                {daysInMonth.map((day, index) => {
                    return <div key={index} className='p-2 text-center bg-white h-1/8'>{format(day, 'd')}</div>;
                })}
            </div>
        </div>
    </div>
    );
};

export default Calendar;