import Home from "./Home";
import { NavLink as Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid p-0 nav-bar" style={{ backgroundColor: "black" }}>
                <nav className="navbar navbar-expand-lg  navbar-dark " style={{ backgroundColor: "black" }}>
                    <a href="" className="navbar-brand">
                        <h1 className="m-0 display-4 font-weight-bold " style={{ color: "#dc3545" }}>SHARK Healthclub</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4">
                            <Link to='/'>
                                <a className="nav-item nav-link">Home</a>
                            </Link>
                            <Link to='/About' >
                                <a className="nav-item nav-link">About</a>
                            </Link>
                            <Link to='/'>
                                <a className="nav-item nav-link">Founder</a>
                            </Link>   
                        </div>
                    </div>
                </nav>
            </div >
            {/* Navbar End */}
        </>
    );
}

export default Navbar;