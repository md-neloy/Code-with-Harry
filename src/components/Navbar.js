
import React ,{useState} from "react";

const Navbar = (props) => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [bodyback, setBodyBack] = useState({
    background: selectedColor,
  });
  const modechanger = () => {
    if (document.getElementById("flexSwitchCheckDefaults").checked) {
      setBodyBack(selectedColor);
    }
  }
  const selectColor = (color) => {
    setSelectedColor(color);
    if (document.getElementById("flexSwitchCheckDefaults").checked) {
      setBodyBack(color);
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg`} style={{ background: bodyback }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div
        className={`form-check form-switch mx-3 text-${
          props.mode === "white" ? "black" : "white"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={props.togglemode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable dark mode
        </label>
      </div>
      <div
        className={`form-check form-switch mx-3 text-${
          props.mode === "white" ? "black" : "white"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefaults"
          onClick={modechanger}
        />
        <select
          id="theme"
          onChange={(e) => selectColor(e.target.value)}
          value={selectedColor}
        >
          <option value="white">white</option>
          <option value="#1A2832">dark</option>
          <option value="#FA4442">red</option>
          <option value="#37649B">blue</option>
          <option value="#36BB5A">green</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
