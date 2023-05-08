import Footer from "./Footer";
import Login from "./Login";

function Home() {
    return (
        <>

            {/* Carous

            {/* Gym Class Start */}
            <div className="container gym-class mb-5">
                <div className="row px-3">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">How Excited are you today?</h3>
                            <p>
                                We are excited to see you at class. Login and book your spots. For being a member reach out the branch and enroll yuourself gor free trial and koin classes.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding"></i>
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Login </h3>
                            <Login />
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

            <Footer />
        </>
    );
}

export default Home;