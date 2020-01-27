import React, {Component} from 'react'

class Tabla extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>

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
            </table>
        )
    }
}

export default Tabla