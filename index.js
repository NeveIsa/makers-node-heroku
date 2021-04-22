const express = require('express')
const app = express();

// use json
app.use(express.json())
app.use(express.urlencoded({extended: true} ) );

const PORT = process.env.PORT || 3000;


const people = [];

app.get("/",(req,res) => {

	res.json(people);
})

app.post("/insert", (req,res) =>{

	const name = req.body.name;
	
	people.push(name)

	res.sendStatus(200);
} )


app.listen(PORT, () => {
		console.log('Started Server...')
})
