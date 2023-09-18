import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import axios from "axios";
import { Link } from "react-router-dom";

const Single = () => {
  const [post, setPost] = useState({});
  const [chapters, setChapters] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_1 = await axios.get(`http://localhost:8800/api/posts/${id}`);
        const res_2 = await axios.get(
          `http://localhost:8800/api/posts/${id}/chapters`
        );
        console.log(res_1);
        setPost(res_1.data);
        setChapters(res_2.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const Chapters = chapters.map((chapter) => (
    <div className="chapter-item" key={chapter.chapter_id}>
      <Link
        key={chapter.chapter_id}
        to={`/post/${post.post_id}/chapter/${chapter.chapter_id}`}
      >
        <div>{chapter.title}</div>
      </Link>
    </div>
  ));
  return (
    <div className="Single">
      <div className="title-single">{post.title}</div>
      <div className="post-info">
        <Post img={post.img} isHome={false} />
        <div className="manga-info">
          <div>
            <span className="post-content-item">Category:</span>
            <div>{post.cat}</div>
          </div>
          <div>
            <span className="post-content-item">Date:</span>
            <div>{post.created_at ? post.created_at.split("T")[0] : "N/A"}</div>
          </div>
          <div>
            <span className="post-content-item">Summary:</span>
            <div>{post.summary}</div>
          </div>
        </div>
      </div>
      <div className="chapters">
        <div className="chapters-title">Chapters</div>
        <div className="ch">{Chapters}</div>
      </div>
    </div>
  );
};
export default Single;
