import { api } from "../../assets/utils/api.js";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function EditPage() {
  const [form, setForm] = useState({
    commonName: "",
    image: "",
    curiosity: "",
    where: "",
    when: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(`/inserts/${id}`);
      setForm({ ...response.data.data.attributes });
    }
    fetchPost();
  }, []);

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/inserts/${id}`, { data: form });
      navigate("/post");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Link to={"/"}>
        <p className={style.buttonHome}> Home </p>
      </Link>
      <h2 className={style.editTitle}> Edit your post:</h2>

      <form onSubmit={handleSubmit} className={style.editCreate}>
        <div className={style.editItem}>
          <label>Common name:</label>
          <input
            name="commonName"
            value={form.commonName}
            onChange={handleChange}
          />
        </div>

        <div className={style.editItem}>
          <label>Image link:</label>
          <input name="image" value={form.image} onChange={handleChange} />
        </div>

        <div className={style.editItem}>
          <label>Curiosity:</label>
          <input
            name="curiosity"
            value={form.curiosity}
            onChange={handleChange}
            className={style.editCuriosity}
          />
        </div>

        <div className={style.editItem}>
          <label>Where you can find:</label>
          <input name="where" value={form.where} onChange={handleChange} />
        </div>

        <div className={style.editItem}>
          <label>Created at:</label>
          <input name="when" value={form.when} onChange={handleChange} />
        </div>

        <button className={style.buttonEnter}> Enter </button>
      </form>
    </>
  );
}
