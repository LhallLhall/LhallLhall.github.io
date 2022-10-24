import { Navbar } from "../navbar/navbar"
export default function BlogPost3 (props) {
    return (

    <div className="container-fluid" style={{backgroundColor: "#808080"}}>
      <Navbar page={props.page} setPage={props.setPage}/>
      <div className="container px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold">Logan Hall</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Aspiring Web Developer</p>
        </div>
        <div className="overflow-hidden" style={{maxHeight: "60vh"}}>
          <div className="container px-5">
            <img
              src="/img/insert-image-html.jpg"
              className="img-fluid rounded-3 "
              alt="Example image"
              width="1100"
              height=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div className="row ">
          <h3 className="display-5 fst-italic text-center">October, 10th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className=" fst-italic">What is pseudocode and how does it help with programming?
              </h3>
              <p className="my-4 ps-3 ">
                
                </p>
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