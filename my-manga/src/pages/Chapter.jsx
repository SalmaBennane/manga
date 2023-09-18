import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Chapter = () => {
  const { chapterId } = useParams();
  console.log(chapterId);
  const [chapter, setChapter] = useState({});
  const [postTitle, setPostTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/chapter/${chapterId}`
        );
        setChapter(res.data);
        const postRes = await axios.get(
          `http://localhost:8800/api/posts/${res.data.post_id}`
        );
        setPostTitle(postRes.data.title);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [chapterId]);
  console.log(chapter);
  return (
    <div className="chapter">
      <Link to={`/post/${chapter.post_id}`}>
        <h1 className="ch-titre">{postTitle}</h1>
      </Link>
      <img src={`/mangas/${chapter.img}`} alt="" className="ch-image" />
    </div>
  );
};

export default Chapter;
