const express = require("express");
const {
  addPost,
  deletePost,
  getPosts,
  getPost,
  updatePost,
  getPostChapter,
  getPostChapters,
} = require("../controllers/post.js");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/chapter/:id", getPostChapter);
router.get("/:id/chapters", getPostChapters);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
