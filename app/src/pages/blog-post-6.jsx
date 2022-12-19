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
              <h3 className="  fst-italic">
                Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?
              </h3>
              <p className="  my-5 ps-3 ">
                The biggest hurdle is definitely getting my head around the logic side of things in coding in react. The next big hurdle for me is definitely going to grasp databases.
                </p>
                
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?</h3>
            <p className="my-4 ps-3 ">
                Don't really have any ideas for my final project as of yet. I definitely want to do something gaming related
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic "> What surprised you about your first week in Python and how was it different from your first week in JavaScript? 

            </h3>
            <p className="my-4 ps-3 ">
            I picked up the concepts way quicker than javascript because i had already learned those base concepts in javascript
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