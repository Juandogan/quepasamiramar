import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'filtro'
  
})

export class FiltroPipe implements PipeTransform {
  


  transform(value:any, arg:any): any {

    if(arg ==='' || arg.length < 0 ) return value;
     
    const resultPost =[];
    var todo:string;
    
    for(const arregloCard of value){
      var todo:string = arregloCard.description + arregloCard.palabrasClaves;

        if(todo.toLowerCase().indexOf(arg.toLowerCase()) >-1 ){
          resultPost.push(arregloCard);
       

        
        
      
          
        
    };
    
  };  
  return resultPost; 


}


}
