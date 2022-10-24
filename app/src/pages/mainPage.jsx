import { Navbar } from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'
import BlogPost1 from './blog-post-1.jsx'
import BlogPost2 from './blog-post-2.jsx'
import BlogPost3 from './blog-post-3.jsx'
import BlogPost4 from './blog-post-4.jsx'
import Contact from './contact/contact-card.jsx'
// import unsplashImage from 'unsplash-photo-1.jpg'
const externalImage = 'https://cdn.fansshare.com/image/backgroundimage/top-best-simple-awesome-background-images-for-your-website-or-blog-for-website-41002968.jpg'

export default function MainPage(props) {
    
    
    if (props.page === 'Blog') {
      return <BlogPost3 page={props.page} setPage={props.setPage}/>
    }

    if (props.page === 'Contact') {
      return <Contact page={props.page} setPage={props.setPage}/>
    }
    
    if (props.page === 'Home') {
      return(
            <>
            <div className="d-flex text-center text-bg-dark image" style={{height: '100vh'}}>
          <div className="cover-container d-flex w-100 h-75 p-3 mx-auto flex-column">
            
            <Navbar setPage={props.setPage} page={props.page}/>
    
            <main className="px-3">
              <div className="row ">
                <div className="col-12 col-md-8">
                  <div className="col-12 d-flex justify-content-center">
                    <h1 className="test float-start ">Logan Hall</h1>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <p className="lead test float-start">Full Stack Web Developer</p>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <a href="" className="btn btn-lg btn-secondary fw-bold border-white bg-white float-start" onClick={() => {props.setPage('Contact')}}>Contact Me!</a>
                  </div>
                  
                </div>
                <div className="col">
      
                </div>
                <div className="col">
      
                </div>
              </div>
            </main>
          
            <footer className="mt-auto text-white-50">
              
            </footer>
          </div>
          </div>
          
            <div className="row mt-5 text-center d-flex align-content-center  justify-content-center  ">
                <div className="col-12 col-md-10 text-center rounded test bgShadow bg-dark">
                  <div className="col-12 pt-5">
                    <h1 className="color">About Me!</h1>
                  </div>
                  <div className="col-12">
                    <h5 className="color text-center py-3"> 
                        I was born in Lexington, Kentucky in 2004! I graduated highschool April of 2022.
                        Afterwards I decided to pursue a career in web development because I already had a fascination for hardware and wanted more software experience.
                      
                    </h5>
                  </div>
                  <div className="col-12">
                    <h5 className='color text-center py-3'>My passions and hobbies are computers and technology.
                        I love both hardware and software because of how complex electronics are nowadays.
                        One thing i love to do is a quick puzzle that really makes me problem solve because there is no better feeling than solving a puzzle.
                        </h5>
                  </div>
                </div>
              </div>
              {/* <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom border-dark border-3 text-center">Blog Post</h2>
            
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${externalImage})`}}>
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className=" mt-5 mb-4 display-6 lh-1 fw-bold text-center">Sprint 1 Blog</h3>
                        
                        
                      </div>
                    </div>
                  </div>
            
                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${externalImage})`}}>
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className=" mt-5 mb-4 display-6 lh-1 fw-bold text-center" >Sprint 2 Blog</h3>
                        
                      </div>
                    </div>
                  </div>
        
                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${externalImage})`}}>
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h3 className=" mt-5 mb-4 display-6 lh-1 fw-bold text-center ">Sprint 3 Blog</h3>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              
              <div className="container  px-4 py-5" id="projects-cards">
                <h2 className="pb-2 border-bottom border-dark border-3 text-center">Current Projects</h2>
        
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                  <div className="col">
                    <div
                      className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                      // style={{backgroundImage: `url(${unsplashImage})`}}
                      >
                      <div
                        className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
                        >
                        <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center">
                          {/* <a href="https://lhalllhall.github.io/Alarm-Clock/" style="text-decoration: none;">Alarm-Clock</a> */}
                        </h2>
                      </div>
                    </div>
                  </div>
        
                  <div className="col">
                    <div
                      className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                      // style="background-image: url('unsplash-photo-2.jpg')"
                      >
                      <div
                        className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
                        >
                        <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center">
                          {/* <a href="https://lhalllhall.github.io/Mind-Reader/" style="text-decoration: none;" >Mind-Reader</a> */}
                        </h2>
                      </div>
                    </div>
                  </div>
        
                  <div className="col">
                    <div
                      className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                      // style="background-image: url('unsplash-photo-3.jpg')"
                      >
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2 className="pt-3 mt-4 mb-4 display-6 lh-1 fw-bold text-center">
                          {/* <a href="Pokemon/pokemon.html" style="text-decoration: none;" >Pokemon Generator</a> */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer page={props.page} setPage={props.setPage}/>
            </>
        )
    }
}

