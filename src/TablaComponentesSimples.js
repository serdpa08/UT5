import React, {Component} from 'react'

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

const TablaCuerpo = () =>{
    return(
        <tbody>
                    <tr>
                        <td>Buitre</td>
                        <td>Maister</td>
                    </tr>

                    <tr>
                        <td>Vulture</td>
                        <td>Maestro</td>
                    </tr>

                    <tr>
                        <td>Ceporro</td>
                        <td>Ceporrete</td>
                    </tr>
                </tbody>
    )
}


class TablaComponentesSimples extends Component{
    render(){
        return(
            <table>
                <TablaCabecera />
                <TablaCuerpo />
            </table>
        )
    }
}

export default TablaComponentesSimples