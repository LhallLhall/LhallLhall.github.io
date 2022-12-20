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
          <h3 className="display-5 fst-italic text-center">December, 20th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5  rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className="  fst-italic">
              How did the Awesome Inc Bootcamp challenge you?
              </h3>
              <p className="  my-5 ps-3 ">
                The Bootcamp challenged me more than any other course ever. It challenged not only myself but my relationships with friends and family as well.
                I found it very hard to keep up pace with the Bootcamp while also having my own personal time.
                I found myself slowly pushing everything and everyone away that wasn't associated with the Bootcamp.
                But since I did that I now am able to easily take some of my free time and dedicate it to tasks that I might have not even done in the past.
                Overall I would say that the Bootcamp challenged every part of my life and I would say it was the best thing I could have done at my age.
                </p>
                
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What would I change about the bootcamp?</h3>
            <p className="my-4 ps-3 ">
                I definitely wouldn't change much with the Bootcamp because the amount of material is just enough to always keep pressure and you know what they say "takes pressure and heat to forge a diamond".
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What does life look like in the future now that your a Full Stack Web Developer? 

            </h3>
            <p className="my-4 ps-3 ">
            I would hopefully say very financially stable!
             I look forward to being young, successful, and full of knowledge!
             I hope to get a job ASAP so that I can actually buy gifts and presents for my family!
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