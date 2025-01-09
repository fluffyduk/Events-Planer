import React from "react";
import Modal from 'react-modal';
import axios from "axios";
import avatar from '../photos/avatar.jpg';

const buttonStyle = 'bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2';
const textStyleSemibold = 'font-gilroy_semibold text-black';
const textStyleRegular = 'font-gilroy_regular text-black';
const taskStyle = 'cursor-pointer relative py-3 pl-10 pr-2 text-lg bg-white rounded-2xl mb-4 w-[65%]';

const modalWindowStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(113 121 140)',
        width: '75%',
        height: '75%',
        borderRadius: '24px',
        padding: '32px',
    },
  };

const Events = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [children, setChildren] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    function createFile() {
        const data = { doc_type: 'doc', title: 'ThisIsTitle', custom_name: 'ThisIsCustomName' };

        axios.post('...', data, { withCredentials: true })
        .then(response => { console.log(response.data); })
        .catch(error => { console.error('There was an error!', error); });
    }

    function addElement() {
        setChildren((oldArray) => [
            ...oldArray,
            inputValue
        ]);
        setInputValue("");
    }

    function makeTaskDone(evt) {
        if (evt.target.tagName === 'LI') {
            evt.target.style.display = 'none';
        }
    }

    return (
        <div className="bg-[#71798C] w-screen h-auto p-6">
            <h1 className={`${textStyleSemibold} text-[40px] leading-[48px]`}>Мероприятия</h1>
            <div className="flex justify-end">
                <button className={`${buttonStyle} mr-3`}>Сортировать</button>
                <button className={`${buttonStyle} w-[260px]`} onClick={openModal}>Создать мероприятие</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={modalWindowStyle}
            >
                {/* <h2 className={`${textStyleSemibold} text-[64px] leading-[76px] mb-6`}>Слет актива 2024</h2> */}
                <div className="flex gap-6 mb-6">
                    <p className={`${textStyleSemibold} text-[40px] leading-[48px]`}>Название:</p>
                    <input type="text" className="w-[600px]"></input>
                </div>
                <div className="flex gap-6 mb-6">
                    <p className={`${textStyleSemibold} text-[40px] leading-[48px]`}>Организатор:</p>
                    <input type="text" className="w-[600px]"></input>
                </div>
                <div className="flex gap-6 mb-6">
                    <p className={`${textStyleSemibold} text-[40px] leading-[48px]`}>Задачи:</p>
                    <input type="text" className="w-[600px]" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Задача..."></input>
                    <button onClick={addElement} className={`${buttonStyle} w-[200px]`}>Добавить задачу</button>
                </div>
                <ul className="p-0 m-0" onClick={makeTaskDone}>
                    {children.map((child, index) => <li key={index} className={`${taskStyle}`}>{child}</li>)}
                    {/* <li className={`${taskStyle}`}>Подготовить файлы</li> */}
                    {/* <li className={`${taskStyle}`}>Заказать вкусняшек</li> */}
                    {/* <li className={`${taskStyle}`}>Повеселиться!</li> */}
                </ul>
                <button className={`${buttonStyle} w-[260px]`} onClick={createFile}>Добавить файлы</button>
            </Modal>
            <h2 className={`${textStyleSemibold} text-[32px] leading-[38px] mb-3`}>Текущие:</h2>
            <div className="flex justify-between">
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4] p-4">
                    <h3 className={`${textStyleSemibold} text-[32px] leading-[43px] mb-3`}>Слет актива 2024</h3>
                    <p className={`${textStyleRegular} text-[20px] leading-[24px] mb-[51px]`}>Мероприятие нацеленное на создание и поддержание актива</p>
                    <p className={`${textStyleSemibold} text-[20px] leading-[24px] mb-1`}>Организатор</p>
                    <div className="flex">
                        <img src={avatar} alt='Аватарка организатора' width='23' height='23' className="rounded-[50%] mr-1"/>
                        <p className={`${textStyleSemibold} `}>Виноградов Арсений</p>
                    </div>
                </div>
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4] p-4">
                    <h3 className={`${textStyleSemibold} text-[32px] leading-[43px] mb-3`}>Слет актива 2023</h3>
                    <p className={`${textStyleRegular} text-[20px] leading-[24px] mb-[51px]`}>Мероприятие нацеленное на создание и поддержание актива</p>
                    <p className={`${textStyleSemibold} text-[20px] leading-[24px] mb-1`}>Организатор</p>
                    <div className="flex">
                        <img src={avatar} alt='Аватарка организатора' width='23' height='23' className="rounded-[50%] mr-1"/>
                        <p className={`${textStyleSemibold} `}>Виноградов Арсений</p>
                    </div>
                </div>
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4] p-4">
                    <h3 className={`${textStyleSemibold} text-[32px] leading-[43px] mb-3`}>Слет актива 2022</h3>
                    <p className={`${textStyleRegular} text-[20px] leading-[24px] mb-[51px]`}>Мероприятие нацеленное на создание и поддержание актива</p>
                    <p className={`${textStyleSemibold} text-[20px] leading-[24px] mb-1`}>Организатор</p>
                    <div className="flex">
                        <img src={avatar} alt='Аватарка организатора' width='23' height='23' className="rounded-[50%] mr-1"/>
                        <p className={`${textStyleSemibold} `}>Виноградов Арсений</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
