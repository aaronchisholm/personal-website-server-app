const projects = [{
    "title": "project1",
    "github": "github.com",
    "description": "A sample github project"
}]

const findAllProjects = (req, res) => {
    res.json(projects) //use database
}

const findProject = (req, res) => {
    const projectId = req.params.projectid;
    const project = projects.find(project => project._id === projectId);
    res.json(project)
}

const createProject = (req, res) => {
    const newProject = req.body;
    newBlogPost._id = (new Date()).getTime() + '';
    projects.push(newProject);
    res.json(newProject);
}

const deleteProject = (req, res) => {
    const projectId = req.params['projectid'];
    projects = projects.filter(project =>
        project._id !== projectId);
    res.sendStatus(200);
}

const updateProject = (req, res) => {
    const postId = req.params['postid'];
    const updates = req.body;
    projects = projects.map((post) =>
        post._id === postId?
        {...post, ...updates} :
        post
    );
    res.sendStatus(200);
}  

const ProjectItemController = (app) => {
    app.get('/api/projects', findProject)
    app.get('/api/projects/:projectid', findAllProjects)
    app.post('/api/projects', createProject)
    app.delete('/api/projects/:projectid', deleteProject)
    app.put('/api/projects/:projectid', updateProject)
}



export default ProjectItemController;