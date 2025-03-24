import './App.css'

function Signin() {

  return (
    <>
    <div className='signin'>
    <div className="signinframe">
        <h1 className="heading">Sign in</h1>
        <div className="details">
        <h3>Username</h3>
            <input type="text" id="username" placeholder="username" required/>
            <br/>
            <h3>password</h3>
            <input type="password" id="password" placeholder="password" required/>
            <br/>
            <a href="">Create a account</a>
            <a href="">forgot password?</a>
            <br/>
            <br/>
            <button>Sign in</button>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Signin
