const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = 5000;

//mysql db connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "daily_todo",
  table: "ticket"
});

//json parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//working with post requests
app.post('/insert', (req) => {
  console.log("title ", req.body.title);
  console.log("description ", req.body.description);
  //insert into daily_todo.ticket table
  let sql = `insert into ticket(title, description) values("${req.body.title}", "${req.body.description}");`;
  // con.query(sql, function (err) {
  //   if (err) throw err;
  //   console.log("Inserted");
  // });
})

//serve app
app.use(express.static(path.join(__dirname, 'frontend/')));
app.get('/', function(res) {
  //serve frontend/index.html
  res.sendFile(path.join(__dirname, 'frontend/', 'index.html'));
});

app.get('/loadTickets', function(req, res) {
  //get all ToDos
  con.query(`select * from ticket;`, function(err, result){
    if (err) throw err;
    // console.log(result);
    // console.log("Send");
    //send json with db info to client
    res.json(JSON.stringify(result));
  });
});

app.get('/coronaApi', function(req, res) {
  //get all corona api json
  fetch("https://covid-19-data.p.rapidapi.com/country?name=switzerland", {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "",
				"x-rapidapi-host": ""
			}
		})
		.then(response => {
      return response.json();
		})
		.then((data) => {
      let result = data[0].deaths;
      res.send(`CH Covid-19 deaths: ${result}`);
    })
		.catch(err => {
			console.error(err);
		});
  
});

//port listen
app.listen(port, () => {
  console.log(`App listening at port: ${port}`)
})