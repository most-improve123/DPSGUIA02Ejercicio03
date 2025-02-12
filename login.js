import React, { useState } from 'react';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarLogin = () => {
    if (usuario === 'admin' && contrasena === 'password') {
      setMensaje(`Bienvenido, ${usuario}`);
    } else {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input 
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Usuario"
      />
      <input 
        type="password"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={manejarLogin}>Iniciar Sesión</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
