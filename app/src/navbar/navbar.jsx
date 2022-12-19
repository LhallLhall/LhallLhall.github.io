import App from "../App.js";
import Contact from "../pages/contact/contact-card.jsx";
import MainPage from "../pages/mainPage.jsx";
import BlogPost3 from "../pages/blog-post-3";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export function Navbar() {
  // console.log(props);

  // const renderNavbar = (activeLink) => {
  //   return ["Home|Home", "Current Blog|Blog", "Contact|Contact"].map((item) => {
  //     let active = "";

  //     if (item.split("|")[1] == activeLink) {
  //       active = "active";
  //     }

  //     let classes = `nav-link  fw-bold py-1 px-2 ${active}`;

  //     return (
  //       <>
  //         <a
  //           className={classes}
  //           id={item.split("|")[1]}
  //           aria-current="page"
  //           onClick={() => {
  //             props.setPage(item.split("|")[1]);
              
  //           }}
  //         >
  //           {item.split("|")[0]}
  //         </a>
  //       </>
  //     );
  //   });
  // };

  return (
    <div className="cover-container  d-flex w-100 h-50 p-3 mx-auto flex-column">
      <header className="mb-auto ">
        <img
          className="float-start"
          height=""
          width="180px"
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eBqhVPnxnFwXs1M3EMoAJtliYoh...Vu9P05"
        />
        <div className="">
          {/* <!-- <h3 className="float-md-start mb-0">Logan Hall</h3> --> */}
          <nav className="nav nav-masthead justify-content-center float-sm-end ">
            <Link className="nav-link  fw-bold py-1 px-2" aria-current="page" to='/'>Home</Link>
            <Link className="nav-link  fw-bold py-1 px-2" aria-current="page" to='/Blog'>Blog</Link>
            <Link className="nav-link  fw-bold py-1 px-2" aria-current="page" to='/Contact'>Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
