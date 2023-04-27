import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../assets/utils/api.js";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import style from "./style.module.css";

export function PostsDetails() {
  const { id } = useParams();

  const [post, setPost] = useState({ attributes: {} });

  const navigate = useNavigate();

  const notify = ()=> toast('This item is being deleted')

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

  async function handleDelete() {
    await api.delete(`/inserts/${id}`);
    navigate("/post");
  }

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
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>

      <Link onClick={handleDelete} >
        <button onClick={notify}>Delete</button>
        <Toaster />
      </Link>

      <Link to={"/post"}>
        <p> Back to List </p>
      </Link>
    </div>
  );
}
