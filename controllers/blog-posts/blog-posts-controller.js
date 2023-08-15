import * as blogPostDao from './blog-post-dao'

const findAllBlogPosts = async (req, res) => {
    const blogPosts = await blogPostDao.findBlogPosts();
    res.json(blogPosts) //use database
}

//either have to implement findBlogPostById in dao or just filter a findAll req
const findBlogPost = async (req, res) => {
    const postId = req.params.postid;
    const post = await blogPostsDao.findBlogPost(post => post._id === postId);
    res.json(post)
}

const createBlogPost = async (req, res) => {
    const newBlogPost = req.body;
    newBlogPost.timestamp = Date.now();
    const insertedBlogPost = await blogPostDao.createBlogPost(newBlogPost);
    res.json(newBlogPost);
}

const deleteBlogPost = async (req, res) => {
    const postId = req.params['postid'];
    const status = await blogPostDao.deleteBlogPost(postId);
    res.sendStatus(status);
}

const updateBlogPost = async (req, res) => {
    const postId = req.params['postid'];
    const updates = req.body;
    const status = await blogPostDao.updateBlogPost(postId, updates);
    res.sendStatus(status);
}  

const BlogPostsController = (app) => {
    app.get('/api/blog-posts', findBlogPost)
    app.get('/api/blog-posts/:postid', findAllBlogPosts)
    app.post('/api/blog-posts', createBlogPost)
    app.delete('/api/blog-posts/:postid', deleteBlogPost)
    app.put('/api/blog-posts/:postid', updateBlogPost)
}



export default BlogPostsController;