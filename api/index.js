const express = require("express");
const authRoutes = require("./routes/auth.js");
// const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const upload = require("./multerConfig.js");
const { addPost, addChapters } = require("./controllers/post.js");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());

//multer route

app.post(
  "/api/upload",
  upload.fields([{ name: "manga-image" }, { name: "chapters-images" }]),
  addPost,
  addChapters
);

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use("/", (req, res) => res.send("testsalma"));

app.listen(8800, () => {
  console.log("Connected!");
});
