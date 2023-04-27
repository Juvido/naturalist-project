import { useState } from "react";
import { api } from "../../assets/utils/api";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const [form, setForm] = useState({
    commonName: "",
    image: "",
    curiosity: "",
    where: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/inserts", { data: { ...form } });

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h2> Make your post:</h2>
      <form onSubmit={handleSubmit}>
        <label>Common name:</label>
        <input
          name="commonName"
          value={form.commonName}
          onChange={handleChange}
        />
        <label>Image link:</label>
        <input name="image" value={form.image} onChange={handleChange} />
        <label>Curiosity:</label>
        <input
          name="curiosity"
          value={form.curiosity}
          onChange={handleChange}
        />
        <label>Where you can find:</label>
        <input name="where" value={form.where} onChange={handleChange} />

        <button> Enter </button>
      </form>
    </>
  );
}
