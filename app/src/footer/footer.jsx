export default function Footer(){
    return (
        <div>
            <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
        <div className="col-md-4 d-flex align-items-center">
          <h3 className="mb-3 mb-md-0">Logan Hall, Inc</h3>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="https://twitter.com/Ioganhall">
              <i className="bi bi-twitter"></i></a>
          </li>
          <li className="ms-3">
            <a
              className="text-light"
              href="https://www.instagram.com/logan_hall2004/"
              >
              <i className="bi bi-instagram"></i></a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="https://github.com/LhallLhall">
              <i className="bi bi-github"></i></a>
          </li>
        </ul>
      </footer>
        </div>
    )
}