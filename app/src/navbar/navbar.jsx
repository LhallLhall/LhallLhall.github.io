export default function Navbar () {
    return (
        <div className="cover-container d-flex w-100 h-75 p-3 mx-auto flex-column">
      <header className="mb-auto ">
        <img className="float-start" height="" width="150px" src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eBqhVPnxnFwXs1M3EMoAJtliYoh...Vu9P05"/>
        <div className="">
          {/* <!-- <h3 className="float-md-start mb-0">Logan Hall</h3> --> */}
          <nav className="nav nav-masthead justify-content-center float-md-end ">
            <a className="nav-link  fw-bold py-1 px-0" aria-current="page" href="/index.html">Home</a>
            <a className="nav-link  fw-bold py-1 px-0 active" href="/pages/blog-post-sprint-1.html">Current Blog</a>
            <a className="nav-link  fw-bold py-1 px-0 " href="/pages/contact.html">Contact</a>
          </nav>
        </div>
      </header>
      </div>
    )
}