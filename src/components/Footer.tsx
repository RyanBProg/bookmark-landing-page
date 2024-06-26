import logo from "../assets/images/logo-bookmark.svg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      <img src={logo} alt="bookmark logo" />
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
      </ul>
    </footer>
  );
}
