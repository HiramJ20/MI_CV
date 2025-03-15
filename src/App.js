import React from 'react';
import './App.css'; // Archivo de estilos

function App() {
  return (
    <div className="App container mx-auto p-4 max-w-3xl">
      {/* Encabezado */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Hiram</h1>
        <p className="text-gray-600">Comalcalco, Tabasco | <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a> | <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></p>
        <p>Correo: hiram.jimgar@outlook.com | Teléfono: 933-100-24-70</p>
      </header>

      {/* Educación */}
      <section className="mb-6 p-4 bg-gray-100 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-2"> Educación</h2>
        <p className="font-bold">Universidad Juarez Autonoma de Tabasco</p>
        <p>Estudiante de Ingeniería en Sistemas Computacionales</p>
        <p>Actualmente cursando</p>
      </section>

      {/* Experiencia Laboral */}
      <section className="mb-6 p-4 bg-gray-100 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-2"> Experiencia Laboral</h2>
        <div className="mb-4">
          <h3 className="font-bold">UJAT, Cunduacan, Tabasco</h3>
          <p className="italic">Programador junior (10/06/2024 – 09/11/2024)</p>
          <ul className="list-disc pl-5">
            <li>Creación de facturas para PYMES.</li>
            <li>Desarrollo web.</li>
            <li>Habilidades en Python y Java .</li>
          </ul>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="mb-6 p-4 bg-gray-100 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-2"> Certificaciones</h2>
        <div>
          <p className="font-bold">Certificado en Planeación de redes</p>
          <p>CISCO | 12:08, 2024</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10">
        <p>© 2025 Hiram - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
