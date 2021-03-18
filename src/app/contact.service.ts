import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  private api: string =' http://localhost:3000/contacts';
  constructor(private http: HttpClient)
   { }

   addContact(contact:Contact):Observable<Contact>
   {
      return this.http.post<Contact>(this.api,contact);
   }

    getAllContacts():Observable<Array<Contact>>
    {
        return this.http.get<Array<Contact>>(this.api);
    }

    deleteContact(id:number):Observable<Contact>
    {
       return this.http.delete<Contact>(`${this.api}/${id}`);
                                  // "http://localhost:3000/contacts/1"
    }
   
}
