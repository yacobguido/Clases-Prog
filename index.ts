import RegistroAutomotor from "./RegistroAutomotor";
import Auto from "./Auto";


const registro = new RegistroAutomotor();
registro.agregarAuto(new Auto({nombre:'Ford', modelo:'Mustang', año:2022, color:'Rojo'}));
registro.agregarAuto(new Auto({nombre:'Tesla', modelo:'Model S', año:2021, color:'Negro'}));
registro.agregarAuto(new Auto({nombre:'Toyota', modelo:'Corolla',año:2020, color:'Blamco'}));

console.log("--registro de auto Ford--");
const autoEncontrado = registro.buscarAuto('Ford');
console.log(autoEncontrado?.aTexto());

console.log("--actualizacion de auto Tesla--");
registro.actualizarAutos('Tesla ', { año:2022 });
const autoEncontrado2 = registro.buscarAuto('Tesla');
console.log(autoEncontrado2?.aTexto());

console.log("--Lista de Autos--");
registro.listarAutos(); 

console.log("--borrado de auto Toyota--");
registro.borrarAuto('Toyota');
console.log("--Lista de Autos--");
registro.listarAutos();

console.log("--carga de lista de autos desde JSON--");
registro.cargarAutosFromCollection();
console.log("--Lista de Autos--");
registro.listarAutos();
