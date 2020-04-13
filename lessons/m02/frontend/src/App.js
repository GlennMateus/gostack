import React, { useState, useEffect } from 'react'

import Header from './Components/Header'

import './App.css';
import api from './services/api'

function App() {
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState('');

    useEffect(() => {
        api.get('projects')
            .then(response => {
                setProjects(response.data)
            });
    }, [])
    async function handleAddProject(e) {
        e.preventDefault();

        const response = await api.post('projects', {
            title: projectName,
            owner: 'Glenn Mateus'
        });
        setProjects([...projects, response.data]);
    }
    return (
        <>
            <Header title="Homepage" />
            <ul>
                {
                    projects.map(project => <li key={project.id}>{project.title}</li>)
                }
            </ul>

            <form onSubmit={handleAddProject}>
                <input type="text" id="name" onChange={event => setProjectName(event.target.value)} />
                <button type="submit">Adicionar projeto</button>
            </form>
        </>
    )
}

export default App