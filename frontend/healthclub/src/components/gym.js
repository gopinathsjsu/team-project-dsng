import React from "react";

const GymDetails = () => {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#f2f2f2", padding: "20px" }}>
            <h1 style={{ borderBottom: "2px solid #ccc", paddingBottom: "10px" }}>Gym Name</h1>
            <h2 style={{ marginTop: "30px" }}>Branches</h2>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
                <div style={{ maxWidth: "300px", margin: "20px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ccc", padding: "10px" }}>
                    <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>San Jose</h3>
                    <img
                        src="https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/2022-12/Exterior_0.jpg"
                        alt="San Jose Gym Image"
                        style={{ width: "100%", height: "200px", marginTop: "10px", border: "1px solid black" }}

                    />
                    <p style={{ marginTop: "10px" }}>
                        Address: 123 Main Street, San Jose, CA
                    </p>
                    <p>
                        Phone: (123) 456-7890
                    </p>
                    <p>
                        Hours: Monday - Friday 5am-10pm, Saturday - Sunday 7am-8pm
                    </p>
                </div>
                <div style={{ maxWidth: "300px", margin: "20px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ccc", padding: "10px" }}>
                    <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>Sunnyvale</h3>
                    <img
                        src="https://www.citysportsfitness.com/pages/Images/ClubExterior/662.jpg"
                        alt="Sunnyvale Gym Image"
                        style={{ width: "100%", height: "200px", marginTop: "10px", border: "1px solid black" }}

                    />
                    <p style={{ marginTop: "10px" }}>
                        Address: 456 Main Street, Sunnyvale, CA
                    </p>
                    <p>
                        Phone: (123) 456-7890
                    </p>
                    <p>
                        Hours: Monday - Friday 5am-10pm, Saturday - Sunday 7am-8pm
                    </p>
                </div>
                <div style={{ maxWidth: "300px", margin: "20px", backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ccc", padding: "10px" }}>
                    <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>Milpitas</h3>
                    <img
                        src="https://www.24hourfitness.com/content/dam/24-hour-fitness/images/clubs/CA/eastvale/00893/image1.jpg"
                        alt="Milpitas Gym Image"
                        style={{ width: "100%", height: "200px", marginTop: "10px", border: "1px solid black" }}
                    />
                    <p style={{ marginTop: "10px" }}>
                        Address: 789 Main Street, Milpitas, CA
                    </p>
                    <p>
                        Phone: (123) 456-7890
                    </p>
                    <p>
                        Hours: Monday - Friday 5am-10pm, Saturday - Sunday 7am-8pm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GymDetails;