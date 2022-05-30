import axios from "axios";
import React from "react";
import { Utente } from "../interfacce/Utente";

interface Props {
    pers:Utente
}

export const RigaComponente = (props:Props) => {

    const elimina = (id:number):void => {
        axios.delete(`http://localhost:4000/elimina/${id}` ).then((risultato) => {
            console.log(risultato)
        })
    }
    
    return(
        <tr>
            <td>{props.pers.nome}</td>
            <td>{props.pers.cognome}</td>
            <td>{props.pers.telefono}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={()=>elimina(props.pers.id)}>Elimina</button>
            </td>
        </tr>
    )
}