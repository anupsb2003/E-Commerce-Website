const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
app.use(express.json());
const product = require("./Models/Product");
const signup = require("./Models/Signup");
const signin = require("./Models/Signin");


app.get('/', (req, res) => {
  res.send("hello this is api")
})
app.post('/addproductdata', (req, res) => {
  res.send("hello this is api")
})
app.post("/addproducts",async (req,res) => {
  try
  {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    console.log("Data inserted");
  }
  catch(error)
  {
    res.send("Data not inserted");

  }
});
app.get("/getproducts",async(req,res) => {
  try {
    const product = await Product.find({});
    res.json(product);
    console.log("Data fetched");
  } catch (error) {
    res.send("Data not fetched");
  }
});
app.post("/signup",async(req,res) => {
  try {
    const signup = await Signup.create(req.body);
    res.json(user);
    console.log("user created",user);
  } catch (error) {
    res.send("user not created");
  }
})
app.post("/signin", async (req, res) => {
  try {
      const { rollNo, password } = req.body;

  
      const user = await User.findOne({ rollNo });
      if (!user) return res.status(400).json({ message: "User not found!" });

    
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });
      const token = jwt.sign({ id: user._id, rollNo: user.rollNo }, process.env.JWT_SECRET, { expiresIn: "1h" });

  
      res.json({ token, user: { name: user.name, rollNo: user.rollNo } });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://hujarattiabhishek:Atria%401234567@p5.s3tfb.mongodb.net/")
.then(() =>{
    console.log("Connected to MongoDB sucsessfully");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
})