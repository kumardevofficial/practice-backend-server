import {Post} from "../Model/postSchema.js"

const createPost = async (req, res) => {
  const postData = req.body;
  const post = new Post(postData);
  try{
    await post.save();
    res.status(200).json({"message" : "user created successfully"});
  } catch (err) {
    res.status(500).json({"message":"internal server error", "err" : err});
  }
}

const getAllArticles = async (req, res) => {
  try {
    const allPosts = await Post.find(); // Removed the filter condition to fetch all posts
    res.json(allPosts); // Respond with all posts
  } catch (err) {
    res.status(500).json({ "message": "Internal server error", "err": err }); // Improved error response message for consistency
  }
};

const getAllPolitics =  async (req, res) => {
try{
  const allPolitics = await Post.find({category : "politics"});
  res.json(allPolitics);
}  catch (err) {
  res.status(500).json({"message": "internal server error", "err": err});
}
}

const getAllTechnology = async (req, res) => {
try{
  const allTechnology = await Post.find({category : "technology"})
  res.json(allTechnology);
} catch(err){
res.status(500).json({"message" : "internal server error", "err": err});
}
}

const getAllGeneral = async (req, res) => {
  try{
    const allGeneral  = await Post.find({category : "general"});
    res.json(allGeneral);
  } catch (err){
    res.status(500).json({"message":"internal server error", "err": err});
  }
}

export {createPost, getAllArticles, getAllPolitics, getAllTechnology, getAllGeneral};