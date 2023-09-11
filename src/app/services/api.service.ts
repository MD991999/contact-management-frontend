import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // get-all-contact-function
  getallcontacts(){
      // api-call-asynchronous
// https://my-json-server.typicode.com/MD991999/contact-server/contacts
// https://my-json-server.typicode.com/MD991999/contact-server/groups
  return  this.http.get('http://localhost:3000/contacts')
  }
// view-contact api
viewcontact(contactid:any){
  // api-call-asynchronous
  return this.http.get('http://localhost:3000/contacts/'+contactid)
}
  // api call to get details of a particular group
  getgroup(groupid:string){
    // api call-asynchronous
    return this.http.get('http://localhost:3000/groups/'+groupid)
    }
    // 4.api call to fetch all groups
    getallgroups(){
      return this.http.get('http://localhost:3000/groups')
    }
    // 5.api call to add/store details to server
    addcontact(contact:any){
      return this.http.post('http://localhost:3000/contacts',contact)
    }
    // 6.api call to delete a particular contact from server
    removecontact(id:any){
      return this.http.delete('http://localhost:3000/contacts/'+id)
    }
    // 7.api call to update an existing contact from server
    updatecontact(id:any,contact:any){
return this.http.put('http://localhost:3000/contacts/'+id,contact)
    }
}
