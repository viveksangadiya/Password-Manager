import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password } from '../model/pasword';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private _http:HttpClient) { }

  getAllPassword():Observable<Password[]>{
   return this._http.get<Password[]>("http://localhost:4000/api/getPassword")
  }

  addPassWord(data:any){
     return this._http.post("http://localhost:4000/api/AddPassword",data)
  }

  deletePassWord(id:string){
     return this._http.delete(`http://localhost:4000/api/DeletePasswords/${id}`)
  }
}
