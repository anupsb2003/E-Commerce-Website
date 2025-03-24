import './App.css'
import Navbar from './nav.jsx'
import Product from './product.jsx'
import Signin from './signin.jsx'
import Signup from './signup.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {

  return (
    <>
    <Navbar/>
      <Signin />
      <br/>
      <Signup />
      <br/>
      <Product/>
    </>
  )
}

export default App
