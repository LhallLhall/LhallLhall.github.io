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
              What are some similarities and differences you can see with JS and Python?
              </h3>
              <p className="  my-5 ps-3 ">
                They are both very in the base concepts and both very useful
                </p>
                
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h3>
            <p className="my-4 ps-3 ">
                Definitely would have not benefited as much because with python you cant see visually and for me thats a big thing.
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">Think of a project or tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could you see yourself enjoying building something like that in the future? 

            </h3>
            <p className="my-4 ps-3 ">
            I can now see how twitter and instagram works now that i understand a database structure
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