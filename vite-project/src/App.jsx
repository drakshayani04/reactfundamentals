
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleClick = (name) => {
    console.log("you clicked the button")
    alert("hello " + name)
  }
  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email:${formData.email}/n password:${formData.password}`)
  }
  const handleIncrement = () => {
    setCount((previouscount) => previouscount + 1)
    console.log(count)
  }


  const handleEmail = (event) => {
    setEmail(event.target.name)
  }
  const handlePassword = (event) => {

    setPassword(event.target.value)
  }


  return (
    <div>
      <p>I am a button</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="enter your email"
          onChange={handleChange}></input>
        <input type="password" name="password" placeholder="enter your password" onChange={handleChange}></input>
        <button type="submit">LOGIN</button>
      </form>

    </div>
  )
}

export default App