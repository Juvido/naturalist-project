import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../assets/utils/api.js";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import style from "./style.module.css";

export function PostsDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({attributes: {}, });
  const navigate = useNavigate();
    const deleteToast = () =>
    toast((t) => (
      <span>
        This item is being deleted! <br/>
        Are you sure ? <br/>
        <button onClick={() => toast.dismiss(t.id)} className={style.toast}> Dismiss </button>{" "}
        <button onClick={handleDelete} className={style.toast}> Delete </button>{" "}
      </span>
    ));

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
        <p className={style.buttonHome}> Home </p>{" "}
      </Link>
      <h2 className={style.information}> Informations </h2>
      <div className={style.detailsContent}>
        <div className={style.detailsHeader}>
          <h3> Common name: {post.attributes.commonName} </h3>{" "}
          <img src={post.attributes.image} className={style.detailImage} />{" "}
        </div>
        <div className={style.detailsInformation}>
          <p>
            {" "}
            <b> Curiosity: </b> {post.attributes.curiosity}{" "}
          </p>
          <p>
            {" "}
            <b> Where you can find: </b>
            {post.attributes.where}
          </p>
          <p>
            {" "}
            <b> Post created: </b> {post.attributes.when}
          </p>
        </div>{" "}
      </div>
      <div className={style.buttons}>
        <Link to={`/edit/${id}`}>
          <button className={style.buttonEdit}> Edit </button>{" "}
        </Link>
        <button onClick={deleteToast} className={style.buttonDelete}>
          {" "}
          Delete{" "}
        </button>{" "}
        <Toaster />
      </div>{" "}
      <Link to={"/post"}>
        <p className={style.buttonBack}> Back to List </p>{" "}
      </Link>{" "}
    </div>
  );
}
