import Footer from "./Footer";
function About() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: "400px" }}>
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
                </div>
            </div>
            {/* Page Header End  */}

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
            {/* About End  */}


            {/* Features Start */}
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: "300px" }}>
                            <i className="flaticon-training display-3 text-primary mr-3"></i>
                            <div className="">
                                <h2 className="text-white mb-3">Progression</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: "300px" }}>
                            <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                            <div className="">
                                <h2 className="text-white mb-3">Workout</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: "300px" }}>
                            <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                            <div className="">
                                <h2 className="text-white mb-3">Nutrition</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Team Start */}
            <div className="container pt-5 team">
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Our Trainers</h4>
                    <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="img/team-1.jpg" alt="" />
                            <div className="card-social d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Trainer Name</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="img/team-2.jpg" alt="" />
                            <div className="card-social d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Trainer Name</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="img/team-3.jpg" alt="" />
                            <div className="card-social d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Trainer Name</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="card border-0 bg-secondary text-center text-white">
                            <img className="card-img-top" src="img/team-4.jpg" alt="" />
                            <div className="card-social d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }}><i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Trainer Name</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Team End */}

            <Footer />
        </>
    );
}

export default About;