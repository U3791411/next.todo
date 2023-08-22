'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OffcanvasNavbar = () => {
  useEffect(() => { import('bootstrap/dist/js/bootstrap' as string); }, []);

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid m-3">
        <Link className="navbar-brand d-block-inline" href="/">
          <span>&#x1F680;</span>
          <Image src="/next.svg" alt="Next.js Logo" width={90} height={16}></Image>
          <span className="badge bg-black text-white text-uppercase ml-1">beta</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        > <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header p-4">
            <h5 
              className="offcanvas-title text-capitalize display-4" 
              id="offcanvasNavbarLabel"
            > profile
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-black" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            >
            </button>
          </div>
          <div className="offcanvas-body p-4">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-capitalize">
              <li className="nav-item">
                <a className="nav-link" href="/">home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default OffcanvasNavbar;