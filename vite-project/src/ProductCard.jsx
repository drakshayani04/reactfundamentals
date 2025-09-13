function ProductCard({ProductName,price,available}) {

   
    return (
        <div>
            <p>ProductName:{ProductName}</p>
            <p>Price:{price}</p>
            <p>{available === true ? "IN STOCK":"OUT OF STOCK"}</p>
        </div>

    )

}
export default ProductCard