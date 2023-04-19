import Footer from "./Footer";

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
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                            <p>
                                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                                sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                            </p>
                            <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                            <p>
                                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                                sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                            </p>
                            <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
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
            {/* Features End */}


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


            {/* Class Timetable Start */}
            < div className="container gym-feature py-5" >
                <div className="d-flex flex-column text-center mb-5">
                    <h4 className="text-primary font-weight-bold">Class Timetable</h4>
                    <h4 className="display-4 font-weight-bold">Working Hours and Class Time</h4>
                </div>
                <div className="tab-class">
                    <ul className="nav nav-pills justify-content-center mb-4">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#class-all">All Classes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#class-cardio">Cardio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#class-crossfit">Crossfit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#class-powerlifting">Powerlifting</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="class-all" className="container tab-pane p-0 active">
                            <div className="table-responsive">
                                <table className="table table-bordered table-lg m-0">
                                    <thead className="bg-secondary text-white text-center">
                                        <tr>
                                            <th>Time</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="class-cardio" className="container tab-pane fade p-0">
                            <div className="table-responsive">
                                <table className="table table-bordered table-lg m-0">
                                    <thead className="bg-secondary text-white text-center">
                                        <tr>
                                            <th>Time</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                            <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="class-crossfit" className="container tab-pane fade p-0">
                            <div className="table-responsive">
                                <table className="table table-bordered table-lg m-0">
                                    <thead className="bg-secondary text-white text-center">
                                        <tr>
                                            <th>Time</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                            <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td><h5>Power Lifting</h5>James Alien</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="class-powerlifting" className="container tab-pane fade p-0">
                            <div className="table-responsive">
                                <table className="table table-bordered table-lg m-0">
                                    <thead className="bg-secondary text-white text-center">
                                        <tr>
                                            <th>Time</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">6.00am - 8.00am</th>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">10.00am - 12.00am</th>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">5.00pm - 7.00pm</th>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-secondary text-white align-middle">7.00pm - 9.00pm</th>
                                            <td></td>
                                            <td><h5>Cardio</h5>John Deo</td>
                                            <td></td>
                                            <td><h5>Crossfit</h5>Adam Phillips</td>
                                            <td></td>
                                            <td className="bg-primary text-white"><h5 className="text-white">Power Lifting</h5>James Alien</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Class Timetable End */}

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
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-instagram"></i></a>
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
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-instagram"></i></a>
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
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-instagram"></i></a>
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
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: "40px", height: "40px" }} href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="card-body bg-secondary">
                                <h4 className="card-title text-primary">Trainer Name</h4>
                                <p className="card-text">Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />
        </>
    );
}

export default Home;