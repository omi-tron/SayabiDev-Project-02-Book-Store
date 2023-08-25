import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{ borderBottom: '1px solid white' }}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            BookStore
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>
                  Add Book
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
