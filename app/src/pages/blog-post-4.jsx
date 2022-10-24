import { Navbar } from "../navbar/navbar"

export default function BlogPost4 (props) {
    // const image = './pages/insert-image-html.jpg'
    return (

    <div className="container-fluid body ">
      <Navbar page={props.page} setPage={props.setPage}/>
      <div className="container px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 color fw-bold">Logan Hall</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead color mb-4">Aspiring Web Developer</p>
        </div>
        <div className="overflow-hidden" style={{maxHeight: "60vh"}}>
          
        </div>
      </div>
      <div className="container p-4 p-md-5 mb-4 rounded text-bg-dark bgShadow">
        <div className="row ">
          <h3 className="display-5 fst-italic text-center">October, 16th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5  rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className="  fst-italic">Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?
              </h3>
              <p className="  my-5 ps-3 ">
                I think they are easy to use. Since once you know all of the original concepts it all looks familiar in just a slightly changed way.
                </p>
                
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What Frameworks or Libraries are you interested in learning more about?</h3>
            <p className="my-4 ps-3 ">
                Still would love to dive deeper into react, Laravel, Django
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">Find one emerging JavaScript tool that you would like to learn more about or use in your final project.
            </h3>
            <p className="my-4 ps-3 ">
            Don't really know of any new ones but I would love to dive deeper into WebStorm.
            </p>
          </div>
        </div>
        <div className="">
            <div className="">
              <h3 className=" fst-italic "></h3>
              <p className="my-4 ps-3">
              
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )
}