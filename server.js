require("dotenv").config()
const ct = require("console.table")
const inquirer = require('inquirer');
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.sql_pw,
    database: 'workforce_db'
  },
  console.log(`Connected to the workforce_db database.`)
);

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/index.html"))
// );

// // GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// // GET Route for catch all
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// );



// Borrowed server format from last homework