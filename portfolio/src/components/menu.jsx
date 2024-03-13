
import "../styles/menu.css"

export default function Menu() {
    // const asd = document.getElementsByClassName("open")
    // const toggleMenu = () => document.getElementsByClassName("open").classList.toggle("open");
  return (
    <div className="open">
      {/* <button class="burger" onclick={toggleMenu()}></button> */}
      <button class="burger"></button>
      <div class="menu">
        <div></div>
        <div style={{transitionDelay: "0.1s"}}></div>
        <div style={{transitionDelay: "0.2s"}}></div>
        <div style={{transitionDelay: "0.3s"}}></div>
        <div style={{transitionDelay: "0.4s"}}></div>
        <ul>
          <li style="animation-delay: 0.4s">
            <a href="#home">About</a>
          </li>
          <li style="animation-delay: 0.5s">
            <a href="#home">Services</a>
          </li>
          <li style="animation-delay: 0.6s">
            <a href="#home">Products</a>
          </li>
          <li style="animation-delay: 0.7s">
            <a href="#home">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
