function Card() {
    return (
        <div
            style={{
                border: "10px solid brown",
                height: "400px",
                width: "300px",
                borderRadius: "15px",
                textAlign: "center",
                margin: "50px auto",
                backgroundColor: "white"
            }}
        >
            <h2
                style={{
                    backgroundColor: "brown",
                    color: "black",
                    padding: "15px",
                    margin: "0"
                }}
            >
                ABES Engineering College
            </h2>
            <h2
                style={{
                    color: "black",
                    marginTop: "30px"
                }}
            >
                Sugandhi Bansal
            </h2>
            <img src="/passport size photo.jpg"alt="Sugandhi Bansal"style={{ width: "100px",height: "100px",  borderRadius: "50%",objectFit: "cover",display: "block",margin: "20px auto" }}/>

            <p style={{ color: "black" }}>Roll No: 2400321530198</p>

            <p style={{ color: "black" }}>Branch: CSE - AIML</p>

            <p style={{ color: "black" }}>College: ABES Engineering College</p>
            <p style={{ color: "black" }}>Section: C</p>
            
        </div>
    );
}
export default Card;