import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="https://raw.githubusercontent.com/DevMountain/simulation-shelfie/master/assets/logo.png" alt="shelfie-logo" width="112" height="28" />
                </Link>
            </div>
        </nav>
    );
}