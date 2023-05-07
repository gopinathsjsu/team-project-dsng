import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";

function Home() {
    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-primary text-capitalize m-0">Gym & Fitness Center</h3>
                                <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Best Gym In Town</h2>
                                <a href="" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h3 className="text-primary text-capitalize m-0">Gym & Fitness Center</h3>
                                <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Get Body In Shape</h2>
                                <a href="" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            {/* Carousel End */}


            {/* Gym Class Start */}
            <div className="container gym-class mb-5">
                <div className="row px-3">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">How Excited are you today?</h3>
                            <p>
                                We are excited to see you at class. Login and book your spots. For being a member reach out the branch and enroll yuourself gor free trial and join classes.
                                <Login />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Not Enrolled yet? Signup Now</h3>
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
            {/* Gym Class End */}


            {/* About Start */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                        <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                        <div className="row py-2">
                            <div className="col-sm-6">
                                <i className="flaticon-barbell display-2 text-primary"></i>
                                <h4 className="font-weight-bold">Certified GYM Center</h4>
                                <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                            </div>
                            <div className="col-sm-6">
                                <i className="flaticon-medal display-2 text-primary"></i>
                                <h4 className="font-weight-bold">Award Winning</h4>
                                <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                            </div>
                        </div>
                        <a href="" className="btn btn-lg px-4 btn-outline-primary">Learn More</a>
                    </div>
                </div>
            </div>
            {/* About End */}


            {/* GYM Feature Start */}
            <div className="container feature pt-5">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                    <h4 className="display-4 font-weight-bold">Benifits of Joining Our GYM</h4>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image" />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Videos Instruction</h4>
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image" />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Training Calendar</h4>
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image" />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image" />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-weight-bold">Community Support</h4>
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima  erat tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* GYM Feature End */}
            <Footer />
        </>
    );
}

export default Home;