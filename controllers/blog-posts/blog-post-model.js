import mongoose from 'mongoose';
import blogPostSchema from './blog-post-schema.js'
const blogPostModel = mongoose
              .model('BlogPostModel', blogPostSchema);
export default blogPostModel;