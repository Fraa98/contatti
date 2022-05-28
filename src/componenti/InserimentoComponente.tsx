import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { Utente } from "../interfacce/Utente";


export const InserimentoComponente:any = () => {

    const funzInserimento = (evt:any) =>{
        evt.preventDefault ();

        let varPersona : any = {
            nome : evt.target.inputNome.value,
            cognome : evt.target.inputCognome.value,
            telefono : evt.target.inputTelefono.value
        }

        axios.post<Utente>("http://localhost:4000/inserisci", varPersona).then((risultato) => {console.log(risultato)})    

        console.log(varPersona)

    }
    
    return (
        <form onSubmit={funzInserimento }>
            <Form.Group>
                <Form.Label className="mt-2">Nome</Form.Label> 
                <Form.Control type="text" id="inputNome" placeholder="Inserisci il nome"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label className="mt-2">Cognome</Form.Label> 
                <Form.Control type="text" id="inputCognome" placeholder="Inserisci il Cognome"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label className="mt-2">Telefono</Form.Label> 
                <Form.Control type="text" id="inputTelefono" placeholder="Inserisci il Telefono"></Form.Control>
            </Form.Group>

            <button type="submit" className=" mt-2 btn btn-primary">Inserisci</button>
            
        </form>
    )
}

// function funzInserimento(): React.FormEventHandler<HTMLFormElement> | undefined {
//     throw new Error("Function not implemented.");
// }
