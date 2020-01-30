import React, { Component } from "react";


const TablaCabecera = () =>{
    return(
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props =>{ /* el paso de parametros */
    const filasDeDatos = props.datosActoresActrices.map((fila, indice) =>{
        return(
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    }
    )

    return (
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}


class TablaComponentesSimplesProps extends Component{
    render(){
        const {datosActoresActrices } = this.props; /* props pasados al componentes desde la aplicación principal app.js */
        return(
            <table>
            <TablaCabecera />
            <TablaCuerpo datosActoresActrices = {datosActoresActrices}/>
            </table>
        )
    }
}

export default TablaComponentesSimplesProps