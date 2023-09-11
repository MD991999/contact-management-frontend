import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/model/mycontact';
import { MyGroup } from 'src/model/mygroup';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
contact:MyContact={}
allgroups:MyGroup[]=[]
constructor (private api:ApiService,private router:Router){
this.contact.groupId="Select A Group"
}
ngOnInit():void{
  this.api.getallgroups()
  .subscribe((result:any)=>
  {
    console.log(result);
    this.allgroups=result
  })
}
addcontact(){
  this.api.addcontact(this.contact)
  .subscribe((result:any)=>{
    console.log(result);
    alert("new contact added")
    // redirect to all contact page
    this.router.navigateByUrl('')
  })
    

  }
}

