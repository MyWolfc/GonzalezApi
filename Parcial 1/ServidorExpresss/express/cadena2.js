const pasarmayusculas = (cadena) =>{
    return cadena.toUpperCase();
}
const quitarespacios = (cadena) =>{
    return cadena.replace(/ /,"");
}

const Longitud = (cadena) => {
    return cadena.length;
}

exports.pasarmayusculas=pasarmayusculas;
exports.quitarespacios=quitarespacios;
exports.Longitud=Longitud;