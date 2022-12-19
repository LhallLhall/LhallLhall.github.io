import { Navbar } from "../navbar/navbar"
import imageTagImage from './virtual-reality-bro.png'

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
        <div  className="overflow-hidden" style={{maxHeight: "30vh"}}>
            <img src={imageTagImage} alt="virtual reality" height="250px" />
        </div>
      </div>
      <div className="container p-4 p-md-5 mb-4 rounded text-bg-dark bgShadow">
        <div className="row ">
          <h3 className="display-5 fst-italic text-center">October, 16th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5  rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className="  fst-italic">What have you learned about CLIs? Do you think they are scary?
              </h3>
              <p className="  my-5 ps-3 ">
                I have learned that they have a lot of very powerful commands and they are super useful. Yes they are super scary!
                </p>
                
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">If you were to build a CLI, what would it do?</h3>
            <p className="my-4 ps-3 ">
                Not Really sure but i would love to have a personal one on my computer that just runs macros and launches applications
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">List some ideas that without a Framework, would take you a long time to code
            </h3>
            <p className="my-4 ps-3 ">
            I think a database would take a very long time to do without a framework!
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