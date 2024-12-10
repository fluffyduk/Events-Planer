import React from "react";
import Modal from 'react-modal';
import axios from "axios";

const buttonStyle = 'bg-[#0077EB] w-[160px] h-[40px] rounded-xl font-gilroy_semibold text-white text-xl p-2';
const textStyleSemibold = 'font-gilroy_semibold text-black';

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
    },
  };

const Events = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    function createFile() {
        axios.get('https://127.0.0.1:8000/').then(response => { console.log(response.data); });
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
                <h2 className={`${textStyleSemibold} text-[64px] leading-[76px] mb-6`}>Слет актива 2024</h2>
                <div className="flex gap-6 mb-6">
                    <p className={`${textStyleSemibold} text-[40px] leading-[48px]`}>Организатор:</p>
                    <input type="text" className="w-[600px]"></input>
                </div>
                <button className={`${buttonStyle} w-[260px]`} onClick={createFile}>Добавить файлы</button>
            </Modal>
            <h2 className={`${textStyleSemibold} text-[32px] leading-[38px] mb-3`}>Текущие:</h2>
            <div className="flex justify-between">
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4]">
                    <h3>Здесь насрано</h3>
                </div>
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4]">
                    <h3>Тут тоже</h3>
                </div>
                <div className="w-[412px] h-[244px] rounded-3xl border-[4px] border-[#8490A6] bg-[#E7FFF4]">
                    <h3>И тут тоже</h3>
                </div>
            </div>
        </div>
    );
}

export default Events;
