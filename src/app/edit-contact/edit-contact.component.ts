import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/mycontact';
import { MyGroup } from 'src/model/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  contactid:any;
  contact:MyContact={};
  groupid=''
  groupname=''
  groups:MyGroup[]=[]
constructor(private activatedroute:ActivatedRoute,private api:ApiService,private router:Router){

}
ngOnInit(): void {
  // to fetch contact id from url
  this.activatedroute.params.subscribe(
    (data:any)=>{      
      this.contactid=data['id']
      console.log(this.contactid);
      
    }
  )
  // to fetch data of a particular id
  if(this.contactid){
    this.api.viewcontact(this.contactid).subscribe(
      (result:any)=>{
        console.log(result);
        this.contact=result
        this.groupid=result.groupId
        console.log(this.groupid);
        // to fetch details of a particular group
        this.api.getgroup(this.groupid).subscribe(
          (data:any)=>{
            console.log(data);
            this.groupname=data['name']
            
          }
        )
// to fetch all groups
this.api.getallgroups().subscribe((result:any)=>{
  console.log(result);
  
  this.groups=result
})
        
      }
    )
  }
}
// user defined function -it should be always specified after ngOnInit
// editcontact(contact)
editcontact(contact:MyContact){
  this.api.updatecontact(this.contactid,contact).subscribe(
    (result:any)=>{
      console.log(result);
    alert("contact updated successfully")
this.router.navigateByUrl('')
      
    }
  )
}
}
