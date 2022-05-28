const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const port = 4000
const host = "localhost"
const connessione = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password: "MySQL&psw_22",
    database: "contatti"
})

app.listen(port, () => {
    console.log("Sono acceso")
})

app.get("/contatti" , (req,res) => {
    connessione.query(`SELECT * FROM rubrica `, (errore,risultato) => {

        if(errore) {
            res.json ({
                status: "errore",
                data: errore.sqlMessage
            })
        } else {
            res.json(risultato)
        }
    })
})

app.post("/inserisci" , (req, res) => {
    connessione.query(`INSERT INTO rubrica (nome, cognome, telefono) VALUES ( "${req.body.nome}" , "${req.body.cognome}" , ${req.body.telefono})`, (errore,risultato) => {
        if(errore) {
            res.json({
                status: "erore",
                data: errore.sqlMessage
            })
        } else {
            res.json(
               { status :"succes"} 
            )
        }
    })
})

app.delete("/elimina/:id", (req,res) => {
    connessione.query(`DELETE FROM rubrica WHERE id = ${req.params.id}` , (errore,risultato) =>{

        if(errore) {
            res.json({
                status: "errore",
                data: errore.sqlMessage
            })
        } else {
            res.json(
               { status :"succes"} 
            )
        }
    } )
})