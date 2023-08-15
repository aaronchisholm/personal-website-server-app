const users = [{
    "name": "user",
    "password": "pwd123"
}]

const findAllUsers = (req, res) => {
    res.json(users) //use database
}

const findUser = (req, res) => {
    const userId = req.params.postid;
    const user = users.find(user => user._id === userId);
    res.json(user)
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(user =>
        user._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((user) =>
        user._id === userId?
        {...user, ...updates} :
        user
    );
    res.sendStatus(200);
}  

const UserController = (app) => {
    app.get('/api/users', findUser)
    app.get('/api/users/:uid', findAllUsers)
    app.post('/api/users', createUser)
    app.delete('/api/users/:uid', deleteUser)
    app.put('/api/users/:uid', updateUser)
}



export default UserController;