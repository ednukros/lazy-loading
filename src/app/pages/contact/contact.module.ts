import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from '../contact/contact.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    ContactComponent,
    ListadoComponent,
    AddContactComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
