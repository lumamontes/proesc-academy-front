import React from 'react';
import './styles.css';

function Login() {
  return (
    <>
      <main className="conteudo">
        <div className="titulo-proesc">Proesc</div>
        <div className="subtitulo-academy">Academy</div>
      </main>
      <form className="formulario conteudo">
        <input type="email" name="name" placeholder='Email' />
        <input type="password" name="password" placeholder='Senha' />
        <button className='button-login' type="submit">Login com o Proesc</button>
      </form>
    </>
  );
}

export default Login;
