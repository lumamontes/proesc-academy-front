import React from 'react';
import { Link } from 'react-router-dom';
import CursoCard from '../../components/CursoCard';
import './styles.css';

function Dashboard() {
  return (
    <div className='container'>
        <header className='sidebar'>
            <img src="https://imgur.com/nk2Pg72.jpg" alt="Proesc Academy"/>
            <Link to="/">Sair</Link>
        </header>

        <div className="tabsContainer">
            <div className='cursosButtons'>
                <button className='cursosButton'>Cursos em andamento</button>
                <button className='cursosButton hidden'>Cursos finalizados</button>
            </div>
            <div className="cursosCards">
                <CursoCard />
                <CursoCard />
                <CursoCard />
                <CursoCard />
            </div>
        </div>

    </div>
    
  );
}

export default Dashboard;
