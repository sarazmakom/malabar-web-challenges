import logo from "../img/logo.jpg";
import { Image } from "./Image";

export function Logo() {
  return (
    <>
      <a href="#">
        <Image src={logo} alt="logo"></Image>
      </a>
    </>
  );
}
