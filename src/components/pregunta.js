
import React from 'react';
import { Fragment, useState } from "react"
import Error from './Error';


const Pregunta = ({ setPresupuesto, setRestante, setMostrarpregunta }) => {

    // definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }

        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarpregunta(false)

    }

    return (

        <Fragment>

            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje=" El presupuesto es incorrecto " /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>

        </Fragment>

    );
}

export default Pregunta;