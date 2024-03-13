import styles from "../styles/menu.module.css"

export default function Menu() {
    let switcher = false
    const toggleMenu = () => {
      if(switcher) {
        switcher = false
      } else {
        switcher = true
      }
      const elements = document.getElementsByClassName("cover");
      if (switcher) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("cover");
        }
      } else {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("cover");
        }
      }
    };
  return (
    <div className="cover">
      <button className={styles.burger} onClick={toggleMenu}></button>
      {/* <button className={styles.burger}></button> */}
      <div className={styles.menu}>
        <div></div>
        <div style={{transitionDelay: "0.1s"}}></div>
        <div style={{transitionDelay: "0.2s"}}></div>
        <div style={{transitionDelay: "0.3s"}}></div>
        <div style={{transitionDelay: "0.4s"}}></div>
        <ul className={styles.ul}>
          <li style={{animationDelay: "0.4s"}}>
            <a href="#home">About</a>
          </li>
          <li style={{animationDelay: "0.5s"}}>
            <a href="#home">Services</a>
          </li>
          <li style={{animationDelay: "0.6s"}}>
            <a href="#home">Products</a>
          </li>
          <li style={{animationDelay: "0.7s"}}>
            <a href="#home">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
