import Profile from "./ProductCard.jsx" 
function App() {
   const productName = "Milk"
    const price = 30
    const isAvailable = true
  
  


  return (
   <>
   <Profile ProductName={productName} price={price} available={isAvailable}/>

   
   </> 
  )
}

export default App
