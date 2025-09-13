import "./Avatar.css"
function ProductCard({ Name, Course, Rollno}) {
    const tstyle={
    fontSize:"30px",
    fontWeight: "200",
    color:"red"
    }
     
    return (
   
        <div className="container">
            <img className="img1" src="./profile-icon-design-free-vector.jpg" />
            <p style={tstyle}>{Name}</p>
            <p className="course">Course:<a className="col">{Course}</a></p>
            <p className="roll">Rollno:<a className="col">{Rollno}</a></p>
           
        </div>

    )

}
export default ProductCard