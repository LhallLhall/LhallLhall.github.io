export default function BlogPost () {
    return (
        <>
        
    <div className="container-fluid">
      
      <div className="contianer px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 text-light fw-bold">Logan Hall</h1>
        <div className="col-lg-6 mx-auto">
          <h5 className="lead text-light mb-4">Welcome to my Blog!</h5>
        </div>
        <div className="overflow-hidden" style="max-height: 60vh">
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
          <h3 className="display-5 fst-italic text-center">September, 25th 2022 Blog Post</h3>
        </div>
        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="">
            <div className="">
              <h3 className=" fst-italic">What is the number one thing that held you back this week? Why?
              </h3>
              <p className="my-4 ps-3 ">
                {/* <!-- I wouldn't say that there were too many things holding me back this week but I would instead say "challenges". One of the things that was holding me back was anxiety. --> */}
                One thing I would say that "held" me back was myself.
                I feel like I would have done better in the beggining of this week if I had gone in with a little more confidence.
                I tend to put a lot of pressure on myself so when stakes are high I usually break down and that is definetly a blocker I wish to overcome.
                </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h3>
            <p className="my-4 ps-3 ">
                I would love to learn more about classNamees and constructors in JS.
                It looks like it would be very hard to understand at first but once you get the hang of it it can be very easy and helpful.
            </p>
              
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className=" fst-italic ">How does In-Person Bootcamp compare to Remote Onboarding?</h3>
            <p className="my-4 ps-3 ">
            I would say that the environment now is drastically different than the one in Onboarding. Being in person has been helping me learn a lot more than onboarding.
            Constantly being surrounded with motivation help my work flow a lot more. If I were still at home working I don't think I would have been able to get this much work done!
            </p>
          </div>
        </div>
        <div className="">
            <div className="">
              <h3 className=" fst-italic ">What is your “Why”?</h3>
              <p className="my-4 ps-3">
                My "why" consists of many things. It's conprised of a couple different things such as not wanting to go too college while not really seeing another viable option other than college.
                I feel like my "why" is to have a very lucrative career at a very young age and to work in a career that will never get old and die out.
                I love to learn new things having a job that always makes you learn new things and constantly expand is something I really want.
              </p>
            </div>
          </div>
        </div>
      </div>
      


      
    </div>
    </>
    )
}