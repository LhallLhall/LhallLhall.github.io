import { Navbar } from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import BlogPost1 from "./blog-post-1.jsx";
import BlogPost2 from "./blog-post-2.jsx";
import BlogPost3 from "./blog-post-3.jsx";
import BlogPost4 from "./blog-post-4.jsx";
import Contact from "./contact/contact-card.jsx";
// import unsplashImage from 'unsplash-photo-1.jpg'
const externalImage = "./img/weather-app.jpeg";

export default function MainPage(props) {
  if (props.page === "Blog") {
    return <BlogPost4 page={props.page} setPage={props.setPage} />;
  }

  if (props.page === "Contact") {
    return <Contact page={props.page} setPage={props.setPage} />;
  }

  if (props.page === "Home") {
    return (
      <>
        <div
          className="d-flex text-center text-bg-dark image"
          style={{ height: "100vh" }}
        >
          <div className="cover-container d-flex w-100 h-75 p-3 mx-auto flex-column">
            <Navbar setPage={props.setPage} page={props.page} />

            <main className="px-3">
              <div className="row ">
                <div className="col-12 col-md-8">
                  <div className="col-12 d-flex justify-content-center">
                    <h1 className="test float-start">Logan Hall</h1>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <p className="lead test float-start">
                      Full Stack Web Developer
                    </p>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <a
                      href=""
                      className="btn btn-lg btn-secondary fw-bold border-white bg-white float-start"
                      onClick={() => {
                        props.setPage("Contact");
                      }}
                    >
                      Contact Me!
                    </a>
                  </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </main>

            <footer className="mt-auto text-white-50"></footer>
          </div>
        </div>

        <div className="row mt-5 text-center d-flex align-content-center  justify-content-center  ">
          <div className="col-12 col-md-10 text-center rounded bgShadow bgColor">
            <div className="col-12 pt-5">
              <h1 className="color">About Me!</h1>
            </div>
            <div className="col-12">
              <h5 className="color test text-center py-3 ">
                I was born in Lexington, Kentucky in 2004! I graduated
                highschool April of 2022. Afterwards I decided to pursue a
                career in web development because I already had a fascination
                for hardware and wanted more software experience.
              </h5>
            </div>
            <div className="col-12">
              <h5 className="color test text-center py-3 pb-4">
                My passions and hobbies are computers and technology. I love
                both hardware and software because of how complex electronics
                are nowadays. One thing i love to do is a quick puzzle that
                really makes me problem solve because there is no better feeling
                than solving a puzzle.
              </h5>
            </div>
          </div>
        </div>

        <div className="container  px-4 py-5" id="projects-cards">
          <h2 className="py-2 border-bottom border-dark color border-3 text-center">
            Current Projects
          </h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden bgColor rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    Alarm-Clock
                  </h2>
                  <h5 className="color2 text-center">Html, CSS, Javascript</h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/Alarm-Clock/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color">
                    Mind-Reader
                  </h2>
                  <h5 className="color2 text-center">
                    Html, CSS, Bootstrap, Javascript
                  </h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/Mind-Reader/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden bgColor rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    Pokemon Generator
                  </h2>
                  <h5 className="color2 text-center">
                    Html, CSS, Bootstrap, Javascript
                  </h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/pokemon-generator/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    To-do-list
                  </h2>
                  <h5 className="color2 text-center">
                    Html, CSS, Bootstrap, React
                  </h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/to-do-list/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden bgColor rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <img src={externalImage} className='img'/>
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    Weather-App
                  </h2>
                  <h5 className="color2 text-center">
                    Html, CSS, Bootstrap, Javascript
                  </h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/weather-app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    React
                    <br>
                    </br>
                    Restaurant
                  </h2>
                  <h5 className="color2 text-center">
                    Html, CSS, Bootstrap, React
                  </h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://lhalllhall.github.io/react-restaurant/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden bgColor rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color ">
                    EverCraft
                  </h2>
                  <h5 className="color2 text-center">Python</h5>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href="https://github.com/LhallLhall/EverCraft"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color"></h2>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden bgColor rounded-4 bgShadow d-flex "
                // style="background-image: url('unsplash-photo-3.jpg')"
              >
                <div className="col d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center color"></h2>
                </div>
                <div className="col-12 d-flex justify-content-center pb-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary w-50"
                    style={{ textDecoration: "none" }}
                  >
                    Let's Go!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer page={props.page} setPage={props.setPage} />
      </>
    );
  }
}
