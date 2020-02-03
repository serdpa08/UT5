import React, {Component} from 'react'
import Tabla from "./tabla"
import TablaComponentesSimples from "./TablaComponentesSimples"
import TablaComponentesSimplesProps from "./TablaComponentesSimplesProps"
import TablaComponentesSimplesState from "./TablaComponentesSimplesState"
import personaje from './personajes.json'
import Formulario from './Formulario'


class App extends Component{

    /* objeto para utilizar en state */

    /*state = {

        personaje: [
            {
                nombre: "Payton Hobart"
            },

            {
                nombre: "Wendy Carr"
            },

            {
                nombre: "Mina"
            },

            {
                nombre: "Jonathan Harker"
            },

            {
                nombre: "Dracula"
            },

            {
                nombre: "Once"
            },

            {
                nombre: "Jim Hooper"
            },
        ]

    }
    */

    /* Utilizo un fichero JSON con los datos de personajes */

    //state = {personaje}


    /* Dejo la colección vacía para rellenarla con un formulario */

    state = { personaje: []}


    /*Método para manejar los datos del formulario */

    manejarEnvio = personaje => { 
        this.setState({personaje: [...this.state.personaje, personaje]}); 
    }

    /*Método para borrar personajes */

    borrarPersonaje = indice =>{
        const {personaje} = this.state;

        this.setState(
            {
                personaje: personaje.filter((personaje, i) =>{
                    return i !== indice; /* Devuelve todos los que no tiene que borrar. Es decir todos los distintos del indice */

                })
            }
        )
    }


    render(){
        /* colección de objetos con nomenclatura json para utilizar con props */
        const actoresactrices = [
            {
                nombre: "Joel",
                apellidos: "Edger"
            },

            {
                nombre: "Carme",
                apellidos: "Maura"
            },

            {
                nombre: "Luis",
                apellidos: "Tosar"
            },
            {
                nombre: "Chloe",
                apellidos: "Grace Moretz"
            }

        ];
        /* Inicializamos el objeto de personajes */
        const {personaje} = this.state
        return(
            <div className="App">
                <h1>Funciona</h1>
                <h2>Tabla sin componentes simples</h2>
                <Tabla />
                <h2>Tabla creada mediante un componente de clase que utiliza componentes simples </h2>
                <TablaComponentesSimples />

                <h2>Tabla creada mediante un componente de clase que utiliza paso de parámetros con props</h2>
                <TablaComponentesSimplesProps datosActoresActrices={actoresactrices}/>

                <h2>Tabla creada con componentes simples (con state y que permite eliminar elementos), que utiliza dos elementos simples</h2>
                <TablaComponentesSimplesState datosPersonaje= {personaje} borrarPersonaje={this.borrarPersonaje}/>

                <h2>Añadir nuevo personaje</h2>
                <Formulario manejarEnvio={this.manejarEnvio}/>
            </div>

            
        )
    }
}

export default App