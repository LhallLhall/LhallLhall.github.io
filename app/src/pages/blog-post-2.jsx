export default function BlogPost2 () {
    return (
        <div className="container-fluid">
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
          <h3 className="display-5 fst-italic text-center">October, 2nd 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className=" fst-italic">What did you learn about that helped you understand the development process?
              </h3>
              <p className="my-4 ps-3 ">
                pseudocode!!! I never knew how much of it was needed for a large scale project or just any code related project. It so incredibly important to the development process.
                pseudocode is like the blueprints to a house. Without the blueprints there would be no house.
                </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What does it mean to develop good code?</h3>
            <p className="my-4 ps-3 ">
                Good code is effective code and effective code is code that can be dynamic. Having the ability to add on functions without the process being broken.
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What does it mean to be a good developer?
            </h3>
            <p className="my-4 ps-3 ">
            A good Developer keeps on learning and doesn't just stay stagnant. A developer should always make sure their code is effective and not sloppy.
            </p>
          </div>
        </div>
        <div className="">
            <div className="">
              <h3 className=" fst-italic ">What is one thing that programmers hate doing?</h3>
              <p className="my-4 ps-3">
               I would say programers hate talking to customers that don't know what can and can't be done on a project.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}