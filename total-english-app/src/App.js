import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-inner"></div>
      </div>
      <img src="/logo.png" alt="Total English" className="logo"/>
      <h1>Plan de Aprendizaje Acelerado</h1>
      <p>Seleccione su género para continuar. El cuestionario toma unos pocos minutos.</p>
      <div className="gender-selection">
        <div className="gender-option" onClick={() => alert('Hombre seleccionado')}>
          <img src="/hombre.png" alt="Hombre" className="gender-img"/>
          <p>Hombre</p>
        </div>
        <div className="gender-option" onClick={() => alert('Mujer seleccionada')}>
          <img src="/mujer.png" alt="Mujer" className="gender-img"/>
          <p>Mujer</p>
        </div>
      </div>
      <p className="terms">
        Al hacer clic en alguna de las opciones, usted acepta los <a href="#">Términos de uso y servicio</a>, <a href="#">Política de privacidad</a>, <a href="#">Política de suscripción</a> y <a href="#">Política de cookies</a>.
      </p>
    </div>
  );
}

export default App;

