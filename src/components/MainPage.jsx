import React from "react";
import { eachDayOfInterval, endOfMonth, format, getDay, startOfMonth } from "date-fns";

const WEEKDAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const MainPage = () => {
    const curDate = new Date();
    const firstDayOfMonth = startOfMonth(curDate);
    const lastDayOfMonth = endOfMonth(curDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    const startingDayIndex = getDay(firstDayOfMonth) + 6;

    return (
    <div className='container mx-auto p-4'>
        <div className="mb-4">
            <h2 className='text-center'>{format(curDate, "MMMM yyyy")}</h2>
        </div>
        <div class='grid grid-cols-7 border border-black rounded-3xl border-opacity-50'>
            {WEEKDAYS.map((day) => {
                console.log(day);
                return <div key={day} className={`font-gilroy_medium text-center 
                    border-b border-r border-black border-opacity-50 
                    ${day === 'вс' ? 'border-r-0' : 'border-r-1'}`}>{day}</div>;
            })}
            {Array.from({length: startingDayIndex}).map((_, index) => {
                return <div key={`empty-${index}`} className='p-2 text-center'/>;
            })}
            {daysInMonth.map((day, index) => {
                return <div key={index} className='p-2 text-center'>{format(day, 'd')}</div>;
            })}
        </div>
    </div>
    );
};

export default MainPage;