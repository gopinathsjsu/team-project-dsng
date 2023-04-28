import React from "react";

const AwardsPage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ marginBottom: "40px" }}>Awards</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "600px" }}>
                    <h2>Best Gym of the Year Award</h2>
                    <img
                        src="https://tqpr.com/wp-content/uploads/2021/09/word-image-15.jpeg"
                        alt="Best Gym of the Year Award"
                        style={{ width: "100%", marginTop: "20px", marginBottom: "20px", border: "solid 2px #333" }}
                    />
                    <p style={{ marginBottom: "20px" }}>We are proud to announce that our gym has won the Best Gym of the Year award for the third consecutive year!</p>

                    <h2>Most Innovative Fitness Program Award</h2>
                    <img
                        src="https://www.ideafit.com/wp-content/uploads/2021/01/IDEA-awards-generic.jpg"
                        alt="Most Innovative Fitness Program Award"
                        style={{ width: "100%", marginTop: "20px", marginBottom: "20px", border: "solid 2px #333" }}
                    />
                    <p>We have been recognized for our cutting-edge fitness program that has helped our members achieve their fitness goals in record time.</p>

                    <h2>Best Training program of the Year Award</h2>
                    <img
                        src="https://competeperformance.com/wp-content/uploads/2021-Best-of-Lake-Forest-Award.jpg"
                        alt="Best Gym of the Year Award"
                        style={{ width: "100%", marginTop: "20px", marginBottom: "20px", border: "solid 2px #333" }}
                    />
                    <p style={{ marginBottom: "20px" }}>We are proud to announce that our gym has won the Best Gym of the Year award for the third consecutive year!</p>


                    <h2>Cleanest Gym of the Year Award</h2>
                    <img
                        src="https://www.girlontheriver.com/wp-content/uploads/2017/11/Logo-MPA.jpg"
                        alt="Best Gym of the Year Award"
                        style={{ width: "100%", marginTop: "20px", marginBottom: "20px", border: "solid 2px #333" }}
                    />
                    <p style={{ marginBottom: "20px" }}>We are proud to announce that our gym has won the Best Gym of the Year award for the third consecutive year!</p>


                </div>
            </div>
        </div>
    );
};

export default AwardsPage;