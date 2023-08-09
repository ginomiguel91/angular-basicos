import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
styles:[`
button{
  margin-right:5px;
}
`]
})
export class PorRegionComponent {
regiones:string[]=['africa','americas','asia','europe','oceania'];
regionActiva:string=''; 
paises:Country[]=[];
hayError:boolean=false;

constructor(private paisesService:PaisService){}
getClaseCSS(region:string):string{

 return (region===this.regionActiva)?'btn btn-primary':'btn btn-outline-primary';
}
activarRegion(region:string){
  if(region===this.regionActiva){
    return;
  }
  this.regionActiva=region;
  this.paises=[];

  //TODO  hacer el llamado al servicio

this.paisesService.getBuscarRegion(this.regionActiva).pipe
(tap(console.log)
  
  )
    .subscribe((paises)=>{
      this.paises=paises;
    },
    (err)=>{
      this.hayError=true;
      this.paises=[];
    }


      )

;
}
}
