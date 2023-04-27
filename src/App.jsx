import { Routes, Route } from "react-router-dom";
import "./global.css";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { PostsList } from "./pages/PostsList";
import { PostsDetails } from "./pages/PostsDetails";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostsList/>} />
        <Route path="/post/:id" element={<PostsDetails />}/>
        <Route path="/create" element={<CreatePost />}/>
       </Routes>
    </>
  );
}

export default App;