import { useState } from "react";
import { api } from "../../assets/utils/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export function CreatePost() {
  const [form, setForm] = useState({
    commonName: "",
    image: "",
    curiosity: "",
    where: "",
    when: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/inserts", { data: { ...form } });

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
      <h2 className={style.createTitle}> Make your post:</h2>

      <form onSubmit={handleSubmit} className={style.formCreate}>
        <div className={style.formItem}>
          <label>Common name:</label>
          <input
            name="commonName"
            value={form.commonName}
            onChange={handleChange}
          />
        </div>

        <div className={style.formItem}>
          <label>Image link:</label>
          <input name="image" value={form.image} onChange={handleChange} />
        </div>

        <div className={style.formItem}>
          <label>Curiosity:</label>
          <textarea
            name="curiosity"
            value={form.curiosity}
            onChange={handleChange}
            className={style.inputCuriosity}
          />
        </div>

        <div className={style.formItem}>
          <label>Where you can find:</label>
          <input name="where" value={form.where} onChange={handleChange} />
        </div>

        <div className={style.formItem}>
          <label>Created at:</label>
          <input name="when" value={form.when} onChange={handleChange} />
        </div>
        
        <button className={style.buttonEnter}> Enter </button>
      </form>
    </>
  );
}
