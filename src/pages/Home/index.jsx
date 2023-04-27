import { Link } from "react-router-dom";
import { Card } from "../card-content";
import style from "./style.module.css"


export function Home() {
  return (
    <div className={style.home}>
      <h1 className={style.title}>Naturalist</h1>
      <h3 className={style.content}> Make your observations and share with us!</h3>
      <h4 className={style.content}> Identify species and discover curiosities </h4>
      <Link to={`/post`} className={style.buttonExplore}>
        <p> Explore </p>
      </Link>
      <Link to={`/create`} className={style.buttonMake}>
        <p>Make your post</p>
      </Link>

      <div className={style.divCard}>
            <Card 
            cardTitle="1. Take your picture" 
            cardContent="Take pictures of animals or plants that you find"
            />
            <Card 
            cardTitle="2. Publish" 
            cardContent="Post your photo!"
            />
            <Card 
            cardTitle="3. Comment" 
            cardContent="Enter information about the species you know."
            />
            <Card 
            cardTitle="4. Learn" 
            cardContent="Other users will also be able to add information to their posts."
            />
                
        </div>
    </div>
  );
}
