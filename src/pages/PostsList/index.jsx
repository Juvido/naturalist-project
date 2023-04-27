import { useEffect, useState } from "react";
import { api } from "../../assets/utils/api.js";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function PostsList() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/inserts");

        setPost([...response.data.data]);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPost();
  }, []);

  return (
    <>
    <Link to={"/"} >
        <p className={style.buttonHome}> Home </p>
      </Link>
      <h2 className={style.listTitle}> Here you can find: </h2>
      <div className={style.listGrid}>
      {post.map((currentPost) => {
        return (
          <>
          <div className={style.listItem} >
            <Link to={`/post/${currentPost.id}`}>
              <p key={currentPost.id} className={style.itemName}> {currentPost.attributes.commonName}</p>
            </Link>
            <img src={currentPost.attributes.image} className={style.image} />
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}
