import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function getRepositories() {
      const response = await api.get('repositories')
      console.log(response.data);
      setRepositories(response.data)
    }
    getRepositories();
  }, [])

  function removeRepository(listItems, index) {
    return [...listItems.slice(0, index),
    ...listItems.slice(index + 1, listItems.length)]
  }

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Novo repositório ${Date.now()}`,
      techs: ['Node', 'ReactJS'],
      url: 'https://github.com/GlennMateus/gostack/blob/master/lessons/frontend/src/App.js'
    });

    setRepositories([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    let response = await api.delete(`repositories/${id}`);
    if (response.status === 204) {
      const repos = repositories;
      const repoIndex = repos.findIndex(repository => repository.id === id)
      setRepositories(removeRepository(repositories, repoIndex))
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {
          repositories.map(repo => (
            <li key={repo.id}>
              {repo.title} / {repo.url}

              <button onClick={() => handleRemoveRepository(repo.id)}>
                Remover
              </button>
            </li>
          ))
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
