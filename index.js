const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {

	console.log("GET /")
	res.send('Hello World')
})

app.listen(PORT, () => {
		console.log('Started Server...')
})
