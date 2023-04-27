import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../assets/utils/api.js";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function PostsDetails() {
  const { id } = useParams();

  const [post, setPost] = useState({ attributes: {} });

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/inserts/${id}`);
        setPost(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, []);

  return (
    <div>
      <Link to={"/"}>
        <p className={style.buttonHome}> Home </p>
      </Link>
      <h2 className={style.information}>Informations</h2>
      <div className={style.detailsContent}>
      <div className={style.detailsHeader}>
        <h3>Common name: {post.attributes.commonName}</h3>
        <img src={post.attributes.image} className={style.detailImage} />
      </div>
      <div className={style.detailsInformation}>
        <p>Curiosity: {post.attributes.curiosity} </p>
        <p>Where you can find: {post.attributes.where}</p>
        <p>Post created: {post.attributes.when}</p>
      </div>
      </div>
      <Link to={"/post"}>
        <p> Back to List </p>
      </Link>
    </div>
  );
}
