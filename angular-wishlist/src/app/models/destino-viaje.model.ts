export class DestinoViaje {
    /* private selected: boolean = false; */
    servicios: String[];
    constructor(public nombre: string, public url: string, public selected: boolean) {
        this.servicios = ['pileta', 'desayuno'];
    }
/*     isSelected():boolean{
        return this.selected;
    }
    setSelected(s:boolean) {
        this.selected = s;
    } */
}