import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import { format, parse, isSameDay } from 'date-fns';
import axios from "axios";
import { Link } from "react-router-dom";

const buttonStyle = 'bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2';
const textStyleSemibold = 'font-gilroy_semibold text-white';
const textStyleRegular = 'font-gilroy_regular text-black';
const EVENT_PLACEHOLDER_STYLE = 'w-[412px] h-[244px] rounded-3xl bg-[#36536A] p-4 mb-[12px] mr-[12px]';

const EventsOnDay = () => {
    const query = new URLSearchParams(useLocation().search);
    const eventDate = parse(query.get('date'), 'yyyy-MM-dd', new Date());
    const curMonth = eventDate.toLocaleString('ru', {month: "long"});

    const [events, setEvents] = useState([]);
    let thisDayEvents = events.filter(event => isSameDay(new Date(event.date), format(eventDate, 'yyyy-MM-dd')))
    if (thisDayEvents === undefined) {
        thisDayEvents = [];
    }

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
    console.log(format(eventDate, 'yyyy-MM-dd'));
    console.log(thisDayEvents);

    return (
        <div className='mx-auto p-6 bg-[#71798C] w-screen h-screen'>
            <div className="bg-[#292C33] rounded-3xl p-6 h-full">
                <div className="flex items-center mb-[24px]">
                    <div className="h-[29px] w-[8px] bg-[#008CFF] rounded mr-2"/>
                    <h1 className={`${textStyleSemibold} text-[40px] leading-[48px] mr-auto`}>Календарь</h1>
                    <button className={`${buttonStyle} w-[260px]`}>Создать мероприятие</button>
                </div>
                <h2 className="text-white font-gilroy_heavy text-[48px] leading-[61px]">
                    <span className="text-[100px] leading-[127px] mr-[16px]">{`${format(eventDate, 'dd')}`}</span> {`${curMonth.slice(0, curMonth.length-1)}я`}
                </h2>
                <div className="flex justify-start flex-wrap">
                    {thisDayEvents.map((event) => {
                        return <Link to={`/event?id=${event.id}`}>
                            <div className={`${EVENT_PLACEHOLDER_STYLE}`}>
                                <h3 className={`${textStyleSemibold} text-[32px] leading-[43px] mb-3 text-white`}>{event.title}</h3>
                                <p className={`${textStyleRegular} text-[20px] leading-[24px] mb-[51px] text-white`}>{event.description}</p>
                                <p className={`${textStyleSemibold} text-[20px] leading-[24px] mb-1 text-white`}>Организатор</p>
                                <div className="flex">
                                    <img alt='Аватарка организатора' width='23' height='23' className="rounded-[50%] mr-1"/>
                                    <p className={`${textStyleSemibold} `}>{event.organizers[0]}</p>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    );
};

export default EventsOnDay;