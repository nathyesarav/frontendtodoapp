import { useState } from 'react';

export default function TareaForm({ onAdd }) {
    const [texto, setTexto] = useState('');

    const enviar = (e) => {
        e.preventDefault();
        if (texto.trim()) {
            onAdd(texto);   // antes: onAdd(titulo)
            setTexto('');
        }
    };

    return (
        <form onSubmit={enviar}>
            <input
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button>Añadir</button>
        </form>
    );
}
