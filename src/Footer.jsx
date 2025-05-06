import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                Desarrollado por Nombre del Alumno · Curso 2025 &nbsp;
                <a
                    href="https://github.com/idoia-durana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <FaGithub size={20} />
                </a>
            </p>
        </footer>
    );
}
