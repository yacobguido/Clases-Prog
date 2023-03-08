export default class Auto {
    private nombre: string;
    private modelo: string;
    private año: number;
    private color: string;
    constructor({nombre, modelo, año, color}:{nombre?: string, modelo?: string, año?:number, color?: string}) {
        this.nombre = nombre ? nombre : "";
        this.modelo = modelo ? modelo : "";
        this.año = año ? año : 0;
        this.color = color ? color : "";
    }

    getNombre(): string {
        return this.nombre;
    }

    getModelo(): string {
        return this.modelo;
    }

    getaño(): number {
        return this.año;
    }

    getColor(): string {
        return this.color;
    }

    setNombre(nombre: string): void {
        this.nombre=nombre;
    }

    setModelo(modelo: string): void {
        this.modelo=modelo;
    }

    setaño(año: number): void {
        this.año=año;
    }

    setColor(color: string): void {
        this.color=color;
    }

    actualizarAuto({nombre, modelo,año, color}:{nombre?: string, modelo?: string, año?: number, color?: string}) {
        if (nombre != null) this.nombre = nombre;
        if (modelo != null) this.modelo = modelo;
        if (año != null) this.año = año;
        if (color != null) this.color = color;
    }

    aTexto():string {
        return "" + this.nombre + ", " + this.modelo + ", " + this.año + ", " + this.color;
    }
}