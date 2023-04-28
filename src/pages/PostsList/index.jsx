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
      <Link to={"/"} className={style.buttonHome}>
        <p > Home </p>
      </Link>
      
      <h2 className={style.listTitle}> Here you can find: </h2>
      <div>
      <Link to={`/create`} className={style.buttonCreate}>
        <p> New post</p>
      </Link>
      <p className={style.notes}> *Click for details </p>
      </div>
      <div className={style.listGrid}>
        {post.map((currentPost) => {
          return (
            <>
              <table className={style.table}>
                <tbody>
                  <tr>
                    <td className={style.cell}>
                      <Link to={`/post/${currentPost.id}`} className={style.itemName}>
                        <p key={currentPost.id} >
                          {currentPost.attributes.commonName}
                        </p>
                      
                      <img
                        src={currentPost.attributes.image}
                        className={style.image}
                        
                      />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </div>
    </>
  );
}
