import axios from "axios";
import React from "react";

import { useState } from "react"
import { useEffect } from "react";
import { Table } from "react-bootstrap";

import { Utente } from "../interfacce/Utente";
import { RigaComponente } from "./RigaComponente";


export const ElencoContattiComp = () =>{
//dichiaro la variabile elenco e tramite setElenco aggiorno lo stato secondo le specfiche stabilite nell'interfaccia Utente
    const [elenco, setElenco] = useState <Utente []> ();

    //se elenco non è gia presente vienerichiamato tramite axios dal database e sempre tramite le specifiche di Utente viene salvato dentro Risultato 
 
    // const [invio, SetInvio] = useState : any (false)

     setInterval (() => {

        axios.get<Utente[]>("http://localhost:4000/contatti").then((Risultato) =>{
            setElenco(Risultato.data)
        })

    }, 5000)
     

    // if (!elenco) {
    //         axios.get<Utente[]>("http://localhost:4000/contatti").then((Risultato) =>{
    //             setElenco(Risultato.data)
    //         })
        
    //     }

    

    return(
        <>
            <Table >
                <thead>
                    <tr>

                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Telefono</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    
                            { elenco?.map((elemento, indice) => <RigaComponente pers ={elemento}  key = {indice}/>)}
                    
                </tbody>
            </Table>
        </>
    )

}