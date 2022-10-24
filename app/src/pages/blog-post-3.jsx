import { Navbar } from "../navbar/navbar"
export default function BlogPost3 (props) {
    const image = './pages/insert-image-html.jpg'
    return (

    <div className="container-fluid body ">
      <Navbar page={props.page} setPage={props.setPage}/>
      <div className="container px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 color fw-bold">Logan Hall</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead color mb-4">Aspiring Web Developer</p>
        </div>
        <div className="overflow-hidden" style={{maxHeight: "60vh"}}>
          {/* <div className="container px-5">
            <img
              src={image}
              className="img-fluid rounded-3 "
              alt="Example image"
              width="1100"
              height=""
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
      <div className="container p-4 p-md-5 mb-4 rounded text-bg-dark bgShadow">
        <div className="row ">
          <h3 className="display-5 fst-italic text-center">October, 10th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5  rounded text-bg-dark">
          <div className="">
            <div className="">
              <h2 className=" text-center fst-italic">What is pseudocode and how does it help with programming?
              </h2>
              <h5 className=" text-center my-5 ps-3 ">
                Pseudocode is your blueprint for you code. It is your foundation, logic, and plan for your project.
                It makes programming a lot easier because it allows you to split up the work into to sections.
                The logic (i.e pseudocode) and the code (i.e syntax). You split your project up into these sections so that you don't have to focus on both problems at once.
                Pseudocode will help you a whole lot if you practice it!
                </h5>
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic "></h3>
            <p className="my-4 ps-3 ">
                
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">
            </h3>
            <p className="my-4 ps-3 ">
            
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