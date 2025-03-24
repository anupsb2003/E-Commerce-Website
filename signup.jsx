import './App.css'

function Signup() {

  return (
    <>
    <div className='signup'>
    <div className="signupframe">
        <h1 className="heading">Sign up</h1>
        <div className="details">
        <h3>Username</h3>
            <input type="text" id="username" placeholder="username" required/>
            <br/>
            <h3>email</h3>
            <input type="email" id="emailid" placeholder="username" required/>
            <br/>
            <h3>Phone Number</h3>
            <input type="number" id="phonenumber" placeholder="phonenumber" required/>
            <br/>
            <h3>password</h3>
            <input type="password" id="password" placeholder="password" required/>
            <br/>
            <h3>confirm it</h3>
            <input type="password" id="password" placeholder="password" required/>
            <br/>
            <br/>
            <button>Sign up</button>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Signup
