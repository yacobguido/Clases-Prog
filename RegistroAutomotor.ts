import Auto from "./Auto";
import * as fs from 'fs';

export default class RegistroAutomotor {
    private listaAutos: Auto[];
    constructor() {
      this.listaAutos = new Array();
    }
  
    agregarAuto(auto: Auto):void {
      this.listaAutos.push(auto);
    }
  
    buscarAuto(nombreAuto: string):Auto|undefined {
      let auto:Auto|undefined = this.listaAutos.find((auto) => auto.getNombre() === nombreAuto);
      if (auto===undefined) {
        throw new Error('Auto no encontrado');
      }
      return auto;
    }

    buscarAutoPorIndice(indiceAuto: number):Auto {
      if(indiceAuto < 0 || indiceAuto > this.listaAutos.length){
        throw new Error('Auto no encontrado');
      }
      return this.listaAutos[indiceAuto];
    }

    listarAutos():void {
      this.listaAutos.forEach((auto, index) => {
        console.log(auto.aTexto());
        if (index===this.listaAutos.length) {
          console.log("\n");
        }
      });
    }

    actualizarAutos(nombreAuto: string, {nombre, modelo, año, color}:{nombre?: string, modelo?: string, año?: number, color?: string}) {
      const autoIndex = this.listaAutos.findIndex((auto) => auto.getNombre() === nombreAuto);
      if (autoIndex < 0 ) {
        throw new Error('Auto no encontrado');
      }
      this.listaAutos[autoIndex].actualizarAuto({nombre, modelo, año, color});
    }
  
    borrarAuto(nombreAuto: string) {
      this.listaAutos = this.listaAutos.filter((auto) => auto.getNombre() !== nombreAuto);
    }

    cargarAutosFromCollection() {
      try {
        const jsonData = fs.readFileSync('PrimerTp/listaAutos.json', 'utf-8');
        const dataAutos = JSON.parse(jsonData) as Auto[];
  
        for (const dataAuto of dataAutos) {
          let auto:Auto= new Auto({...dataAuto});
          this.listaAutos.push(auto);
        }
      } catch (error) {
        console.error(`Error loading cars data: ${error}`);
      }
    }
  }
