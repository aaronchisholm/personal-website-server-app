import blogPostModel from './blog-post-model.js';
export const findBlogPosts = () => blogPostModel.find();
export const createBlogPost = (blogPost) => blogPostModel.create(blogPost);
export const deleteBlogPost = (pid) => blogPostModel.deleteOne({_id: pid});
export const updateBlogPost = (pid, blogPost) => blogPostModel.updateOne({_id: pid}, {$set: blogPost})