import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, map } from 'rxjs';
import { Password } from '../model/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  password =new BehaviorSubject<Password[]>([])

  constructor(private _http:HttpClient) { }

  getAllPassword():Observable<Password[]>{
   return this._http.get<Password[]>("http://localhost:4000/api/getPassword").pipe(
    map((res) => {
      console.log(res);
      
      this.password.next(res)
    return res}
    ))
  }

  addPassWord(data:any){
     return this._http.post("http://localhost:4000/api/AddPassword",data)
  }

  deletePassWord(id:string){
     return this._http.delete(`http://localhost:4000/api/DeletePasswords/${id}`)
  }

  updatePassWord(id:string,data:any){
    return this._http.put(`http://localhost:4000/api/UpdatePassword/${id}`,data)
  }
}
