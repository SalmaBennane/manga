const db = require("../db");

const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    res.status(200).json(data);
  });
};

const getPost = (req, res) => {
  const q = "SELECT * FROM posts WHERE post_id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    res.status(200).json(data[0]);
  });
};

const getPostChapter = (req, res) => {
  const q = "SELECT * FROM chapters WHERE chapter_id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    res.status(200).json(data[0]);
  });
};

const getPostChapters = (req, res) => {
  const q = "SELECT title, chapter_id FROM chapters WHERE post_id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    res.status(200).json(data);
  });
};
const addPost = (req, res, next) => {
  const q =
    "INSERT INTO posts (`img`, `cat`, `title`, `created_at`, `summary`) VALUES (?)";
  const values = [
    req.file.originalname,
    req.body.category,
    req.body.title,
    req.body.date,
    req.body.summary,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500);
    req.postId = data.insertId;
    next();
  });
};

const addChapters = (req, res) => {
  const { chaptersImages, postId } = req.body;
  chaptersImages.foreach((rowData) => {
    const q = "INSERT INTO chapters (post_id, img) VALUES (?, ?)";
    const values = [rowData.originalname, postId];
    db.query(q, values, (err, data) => {
      if (err) console.error("Error insterting row:", err);
    });
    res.status(200).json({ message: "Manga has been created", data });
  });
};
const deletePost = (req, res) => {};
const updatePost = (req, res) => {};

module.exports = {
  getPost,
  getPosts,
  getPostChapter,
  getPostChapters,
  addPost,
  addChapters,
  deletePost,
  updatePost,
};
