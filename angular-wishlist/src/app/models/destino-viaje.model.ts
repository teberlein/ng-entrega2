export class DestinoViaje {
    /* private selected: boolean = false; */
    servicios: String[];
    constructor(public nombre: string, public url: string, public selected: boolean, public votes: number = 0) {
        this.servicios = ['pileta', 'desayuno'];
    }
/*     isSelected():boolean{
        return this.selected;
    }
    setSelected(s:boolean) {
        this.selected = s;
    } */
    
    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }
}