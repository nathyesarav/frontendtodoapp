import React, { useState, useEffect } from 'react';
import TareaForm from './TareaForm';
import TareaLista from './TareaLista';
import Footer from './Footer';
import Header from './Header';
import './App.css';

const API = import.meta.env.VITE_API_URL || "http://localhost:3000/api/tareas";

export default function App() {
  const [tareas, setTareas] = useState([]);

  const cargarTareas = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTareas(data);
  };

  const agregarTarea = async (texto) => {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto })
    });
    cargarTareas();
  };

  /*  const actualizarTarea = async (id, datos) => {
     await fetch(`${API}/${id}`, {
       method: 'PUT',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(datos)
     });
     cargarTareas();
   }; */

  const eliminarTarea = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    cargarTareas();
  };

  useEffect(() => { cargarTareas(); }, []);

  return (
    <>
      <Header />
      <TareaForm onAdd={agregarTarea} />
      <TareaLista tareas={tareas} onDelete={eliminarTarea} />
      <Footer />
    </>
  );
}



