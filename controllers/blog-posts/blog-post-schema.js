import mongoose from 'mongoose';
const schema = mongoose.Schema({
  authors: String,
  title: String,
  image_url: String,
  body: String,
  timestamp: String,
}, {collection: 'blog-posts'});
export default schema;