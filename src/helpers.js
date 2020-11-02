export const revisarPresupuesto = (presupuesto,restatnte) =>{

    let clase

    if ((presupuesto / 4) > restatnte){
        clase= 'alert alert-danger';
    }else if ((presupuesto / 2) > restatnte ){
        clase = 'alert alert-warning'
    }else {
        clase = 'alert alert-success'
    }

    return clase
}