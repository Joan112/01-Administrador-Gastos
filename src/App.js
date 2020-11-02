// import React from 'react';
import { useState, useEffect } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import LIstado from './components/Listado';
import Pregunta from './components/pregunta';




function App() {

  // definimos el state
  const [presupuesto, setPresupuesto] = useState(0)
  const [restatnte, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarpregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)

 useEffect(() => {
    if (crearGasto) {

      setGastos([
        ...gastos,
        gasto
      ])

      const presupuestoRestante = restatnte -gasto.cantidad
      setRestante(presupuestoRestante)

      setCrearGasto(false)
    }
 }, [gasto]);

 

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ? 
          (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarpregunta={setMostrarpregunta}
            />
          ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto= {setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <LIstado
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restatnte={restatnte}
                  />
                </div>
              </div>
            )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
