import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './models/contact';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'TemplateFormCRUD';
  contact:Contact = new Contact();
  contacts:Array<Contact> = [];
  constructor(private http: HttpClient, private contactService: ContactService)
  {}

  ngOnInit()
  {

    this.viewContacts();
  }

addContact()
{
  this.contactService.addContact(this.contact)
                .subscribe(data =>{
                  console.log('Added to Contacts array',data);
                  this.contacts.push(data);
                },
                error=>
                {
                  console.log(error);
                }
                )

}

viewContacts()
{
    this.contactService.getAllContacts().subscribe(
      data=>
      {
        this.contacts = data;
      },
      error=>
                {
                  console.log(error);
                }
                )
    
}

deleteContact(id:number)
{
  this.contactService.deleteContact(id).subscribe(
    data=>
    {
      console.log('Record deleted',data)
      let contactIndex = this.contacts.findIndex(contact=>contact.id === id);
      this.contacts.splice(contactIndex,1);
    },
    error=>
                {
                  console.log(error);
                }
                
  )

}

}
