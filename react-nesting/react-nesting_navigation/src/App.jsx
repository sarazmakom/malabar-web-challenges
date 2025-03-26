import "./styles.css";

import avatar from "./img/avatar.jpg";
// import logo from "./img/logo.jpg";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Logo />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />{" "}
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
