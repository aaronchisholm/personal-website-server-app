import express from 'express';
import BlogPostsController from './controllers/blog-posts/blog-posts-controller.js';
import LoginController from './controllers/login/login-controller.js'
import mongoose from 'mongoose';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

const app = express();
mongoose.connect(CONNECTION_STRING);
app.use(express.json());
BlogPostsController(app);
LoginController(app);
app.listen(process.env.PORT || 4000)
