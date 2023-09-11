import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from 'src/model/mycontact';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  contactid:any
  contact:MyContact={}
  // to store groupid we create a variable
  groupid:string=""
  groupname:string=""
constructor(private api:ApiService,private activatedroute:ActivatedRoute){

}
ngOnInit(): void {
  // 1. to get path parameters from url
  this.activatedroute.params
  .subscribe((data:any)=>{
    console.log(data['id']);
    this.contactid=data['id']
    
  })
  // 2. call api we have to call api to get a particular details of a contact id
  this.api.viewcontact(this.contactid)
  .subscribe((result:any)=>{
    console.log(result);
    this.contact=result
    this.groupid=result.groupId
    console.log(this.groupid);

    // 3. api calls to get details of particular group
    this.api.getgroup(this.groupid)
      .subscribe((result:any)=>{
        console.log(result);
        this.groupname=result.name
      })
    
  })




}
}
