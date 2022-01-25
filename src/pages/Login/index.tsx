import React from 'react';
import './styles.css';

function Login() {
  return (
    <>
      <div className="flex formatacao_texto">
        <div className="proesc">Proesc</div>
        <div className="academy">Academy</div>
      </div>
      <form className="formulario flex">
        <input type="email" name="name" placeholder='Email' />
        <input type="password" name="password" placeholder='Senha' />
        <input type="submit" value="Login com o Proesc" />
      </form>
    </>
  );
}

export default Login;
