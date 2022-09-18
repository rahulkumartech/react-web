import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light header">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://technext.github.io/famms/images/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servecs">
                Servecs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="loginLog">
            <Link to="/">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </Link>
            <Link to="/">
              <i class="fa fa-search" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
