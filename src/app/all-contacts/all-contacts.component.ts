import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{
  allcontacts:MyContact[]=[]
  searchkey:string=''
constructor(private api:ApiService){

}
ngOnInit(): void {
  this.getallcontacts()

}
getallcontacts(){
   // asynchronous
   this.api.getallcontacts()
   .subscribe((result:any)=>{
     console.log(result);
     this.allcontacts=result
   })
}
// deletecontact
deletecontact(id:any){
  this.api.removecontact(id)
  .subscribe((result:any)=>
  {
    console.log(result);
  this.getallcontacts()
    
  }
 
  )
}
}
