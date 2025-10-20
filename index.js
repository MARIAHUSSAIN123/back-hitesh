require('dotenv').config()
const express = require('express')
const app = express()

const PORT = 3000   // ✅ Correct PORT handling

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
  res.send('Hello World! welcome to youtube')
})

app.get('/jokes',(req,res)=>{
  const jokes = [
  {
    id: 1,
    title: "Teacher Joke",
    content: "Teacher: Tum itni der kyun late? Student: Sir sapne mein match dekh raha tha. Teacher: Toh usme school kab se aane laga?"
  },
  {
    id: 2,
    title: "Math Joke",
    content: "Maths ki book udaas kyun thi? Kyun ke uske paas bahut zyada problems thi."
  },
  {
    id: 3,
    title: "Computer Joke",
    content: "Computer ke mouse ko school kyun bheja gaya? Kyun ke wo click bait ban gaya tha!"
  },
  {
    id: 4,
    title: "Doctor Joke",
    content: "Patient: Doctor sahab, mujhe aapki baatein samajh nahi aati. Doctor: Toh phir fees samajh aati hai ya nahi?"
  },
  {
    id: 5,
    title: "Marriage Joke",
    content: "Wife: Mere birthday par mujhe aisa gift chahiye jo 0 se 100 tak 2 second me pohanch jaye. Husband ne gift me weighing machine de diya."
  },
  {
    id: 6,
    title: "Mobile Joke",
    content: "Mobile: Tum mera data kyun khatam karte ho? User: Kyun ke tum bhi to meri battery khatam karte ho!"
  },
  {
    id: 7,
    title: "Friend Joke",
    content: "Friend: Yaar tumhari yaad aati hai. Dost: Thanks! Friend: Kyun ke tumse paisay lene hain."
  },
  {
    id: 8,
    title: "School Joke",
    content: "Teacher: Homework kyun nahi kiya? Student: Sir light nahi thi. Teacher: Par tum toh din me homework karte ho? Student: Ji sir, par bijli ki notebook nahi mil rahi thi."
  },
  {
    id: 9,
    title: "Programming Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 10,
    title: "Time Joke",
    content: "Kal se diet start karungi — Meri ye line calendar ke sath best friend ban chuki hai."
  }
];
res.send(jokes);
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`)  // ✅ Correct log
})
