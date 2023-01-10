const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const axios = require('axios');

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
    console.log("port is ready")
})

const db = mysql.createConnection({

    user: 'admin',
    host: 'ecomm.ct3o6hqjvao9.us-east-1.rds.amazonaws.com',
    password: 'Candice3+',
    database: 'ecomm',

});


db.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("aws success")
})

app.get('/animeSwords', (req, res) => {
    db.query('select * from animeSwords', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/titlelowtohigh', (req, res) => {
    db.query('select * from animeSwords order by type asc', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/titlehightolow', (req, res) => {
    db.query('select * from animeSwords order by type desc', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



axios.get('http://localhost:8080/titlehightolow')
    .then(response => {
        console.log(response.data);
        // set the state of your component with the response data
    })
    .catch(error => {
        console.log(error);
    });

// render(){
//     return (
//         <div>
//             {this.state.data.map(item => (
//                 <p key={item.id}>{item.type}</p>
//             ))}
//         </div>
//     );
// }
