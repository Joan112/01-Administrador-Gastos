// import {Fragment} from 'react';

import { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restatnte}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:$ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restatnte)}>
                Restante:$ {restatnte}
            </div>
        </Fragment>
     );
}
 
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;