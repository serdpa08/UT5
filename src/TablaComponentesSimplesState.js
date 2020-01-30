import React, { Component } from "react";


const TablaCabecera = () =>{
    return(
        <thead>
            <tr>
                <th>Nombre:</th>
                <th>Borrar:</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props =>{
    const filaDatos = props.datosPersonaje.map((fila, indice) =>{
        return(
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td><button onClick={() => props.borrarPersonaje(indice)}>Borrar</button></td>
            </tr>
        )
    }
    
    )

    return(
        <tbody>
            {filaDatos}
        </tbody>
    )

    
}

const TablaComponentesSimplesState = (props) =>{
    const {datosPersonaje, borrarPersonaje} = props;
    return(
        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonaje={datosPersonaje} borrarPersonaje={borrarPersonaje}/>
        </table>
    )
}

export default TablaComponentesSimplesState