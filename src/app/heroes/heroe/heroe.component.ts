import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html'

})
export class HeroeComponent{
nombre:string='Iron Man'
edad:number=45
get obtenerCapitalizado():string{
    return `${this.nombre}-${this.edad}`.toUpperCase();
}
obtenerNombre():string{
return `${this.nombre}-${this.edad}`;

}

cambiarNombre():void{
this.nombre='Spiderman'
}
cambiarEdad():void{
    this.edad=30;
}

}