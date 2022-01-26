import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import './styles.css';

export default function CursoCard() {
    return (
        <div className='cardContainer'>
            <img src="https://imgur.com/hMYECCT.jpg" alt="Imagem de card" />
            <div className='cardContent'>
                <span className='card-title'>Nome do cursos</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu neque, rhoncus at magna sit amet, facilisis finibus justo. Curabitur vel augue vestibulum, tempus mauris in, suscipit nibh.</p>
                <div>
                    <div>
                        <AiOutlineClockCircle /><span>4h</span>
                    </div>
                    <div>
                        <BsBook /> <span>10 aulas</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

