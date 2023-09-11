import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[],searchkey:string,propname:string): any[] {
    const result:any=[]
    if(!allcontacts || searchkey==''||propname==''){
      return allcontacts
    }
    allcontacts.forEach((item:any)=>{
      if(item[propname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
