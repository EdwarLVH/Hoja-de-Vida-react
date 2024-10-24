import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header>
        <h1>Mi Hoja de Vida</h1>
        <img src="foto.png" alt="Foto" />
      </header>

      <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <p>Soy Técnico en electricidad y electrónica, perfil orientado en mantenimiento correctivo y preventivo de computadores. Experiencia laboral como auxiliar administrativo y operario, con competencias para desempeñar funciones relacionadas con digitación y elaboración de documentación, recepción de documentos. Habilidad en el manejo de herramientas ofimáticas, mantenimiento correctivo y preventivo de computadores. Con facilidad de adaptación, disposición para el seguimiento de procedimientos, con adecuado manejo de relaciones interpersonales. En sistemas me destaco por el diagnóstico y reparación de computadores, instalación de drivers, impresoras, eliminación de virus, ensamble y desensamble de computadoras.</p>
      </section>

      <section id="hobies">
        <h3>Hobies</h3>
        <ul>
          <li>Tecnologia</li>
          <li>Videojuegos</li>
          <li>Futbol</li>
        </ul>
      </section>

      <section id="experiencia-laboral">
        <h4>Experiencia Laboral</h4>
        <p>Tecnico de soporte Palacio de Justicia - julio 2023 - Presente</p>
        <p>Tecnico de mantenimiento Cable Aereo - Agosto 2020 - Febrero 2023</p>
        <p>Auxiliar administrativo Concejo de Manizales - Septiembre 2018 - Marzo 2020</p>
      </section>

      <section id="experiencia-academica">
        <h5>Experiencia Académica</h5>
        <p>Tecnologia en Sistemas - Universidad de Caldas - semestre 4</p>
        <p>Tecnico en electricidad y electronica - Andap - 2025</p>
      </section>

      <section id="aptitudes">
        <h6>Aptitudes</h6>
        <ul>
          <li>Administracion de redes y sistemas operativos</li>
          <li>Resolucion de problemas tecnicos</li>
          <li>Trabajo en equipo y comunicacion tecnica</li>
          <li>Resolución de problemas</li>
        </ul>
      </section>

      <section id="contactame">
        <h2>Contáctame</h2>
        <form action="#" method="post">
          <label htmlFor="asunto">Asunto:</label>
          <input type="text" id="asunto" name="asunto" required />

          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

          <input type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
}

export default App;
