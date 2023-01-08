const Post = require("../modules/Post");

exports.createPost = async (req, res) => {
  const { title, description } = req.body;
  const CreatedPost = await Post.create({
    title,
    description,
  });
  res.json({
    status: "succes",
    message: CreatedPost,
  });
};
exports.ReadPost = async (req, res) => {
  const posts = await Post.find();
  res.json({
    message: "working",
    posts: posts,
  });
};
exports.updatePost = async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;
  const post = await Post.findById(id);
  //if post is not found
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  const updatepost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      description,
      title,
    },
    { new: true }
  );
  res.json({
    message: "working",
    post: updatepost,
  });
};
exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }
  await post.remove();
  res.json({
    message: "working",
    id: post._id,
  });
};
