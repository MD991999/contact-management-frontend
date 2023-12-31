import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // path AllContactsComponent
  {
    path:'',component:AllContactsComponent
    
  },
  // path Addcontact
  {
    path:'add',component:AddContactComponent
  },
  // path Editcontact
  {
path:'edit/:id',component:EditContactComponent
  },
  // path view component
  {
    path:'view-contact/:id',component:ViewContactComponent
  },{
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
