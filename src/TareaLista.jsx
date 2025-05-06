import { FaTrashAlt } from 'react-icons/fa';
export default function TareaLista({ tareas, /* onToggle, */ onDelete }) {
    return (
        <ul>
            {tareas.map(t => (
                <li key={t._id}>
                    <input
                        type="checkbox"
                        checked={t.completada}
                    /* onChange={() => onToggle(t._id, { completada: !t.completada })} */
                    />
                    {t.texto}
                    <button onClick={() => onDelete(t._id)} className="btn-icon">
                        <FaTrashAlt />
                    </button>
                </li>
            ))}
        </ul>
    );
}