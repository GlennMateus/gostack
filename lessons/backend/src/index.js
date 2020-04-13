// External Dependencies  (node_modules)
const express = require('express')
const { uuid, isUuid } = require('uuidv4')
const cors = require('cors');

const app = express();
// Need to come above our routes
// it's used to say to the application that
// we are receiving JSON objects
const projects = [];

app.use(cors());
app.use(express.json());
// My dependencies
const { PORT } = require('../.env')

// My middleware
function logRequests(req, res, next) {
    const { method, url } = req;
    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.time(logLabel);
    next();
    console.timeEnd(logLabel);
}

function validateProjectId(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id))
        return res.status(400).json({ message: 'Invalid project ID.' })
    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId)

app.get('/projects', (req, res) => {
    const { title } = req.query;
    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return res.json(results)
})

app.post('/projects', (req, res) => {
    const { title, owner } = req.body;
    const project = { id: uuid(), title, owner }

    projects.push(project);
    return res.json(project)
})
// :id = Route parameter
app.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, owner } = req.body;
    const projectIndex = projects.findIndex(project => project.id === id)

    if (projectIndex < 0) {
        return res.status(400).json({ message: 'Project not found!' })
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;

    return res.json(project)
})

app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex(project => project.id === id)

    if (projectIndex < 0) {
        return res.status(400).json({ message: 'Project not found!' })
    }

    projects.splice(projectIndex, 1);

    return res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);
})