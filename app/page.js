import Link from "next/link";
import styles from './page.module.css'
import Title from "./component/title";
import Paragraph from "./component/paragraph";
import Button from "./component/button";
import NavBar from "./component/navBar";
export default function Home() {
  return ( <div className={styles.main}>
    <NavBar />
    <h1>Home Page</h1>
    <Title />
    <Paragraph />
    <Button />
    <Link href="/about">Take me to About page</Link>
    </div>
    );
  };