import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCultura'
})
export class FiltroCulturaPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    if(arg ==='' ) return value;
    arg="Cultura";
      
    const resultPost =[];
    
    for(const arregloCard of value){
        if(arregloCard.description.toLowerCase().indexOf(arg.toLowerCase()) >-1 ){
          resultPost.push(arregloCard);
       

             
      
          
        
    };
    
  };  
  return resultPost; 

  }

}
