import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Password } from 'src/app/model/pasword';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent{

  password:Password[]=[];

  passwordForm : Password ={
    _id:'',
    siteName: '',
    siteURL : '',
    siteImgURL : ''
  }

  constructor(public _passwordService:PasswordService,private route:ActivatedRoute){
    this.loadSite()
  }

  loadSite(){
    this._passwordService.getAllPassword().subscribe(res=>
      {
        this.password=res
        console.log(res)
      }
    )
  }
  onSubmit(data:any){
    this._passwordService.addPassWord(data).subscribe(res=>
      {
        this.loadSite()
      }
    )
  }

  onDeletePassword(id:string){
    alert('Are sure want to delete ?')
     this._passwordService.deletePassWord(id).subscribe(res=>{
      this.loadSite()
      console.log(res);
     })
  }

  onEditData(password:Password[]){ 
     if(password){
    
      
     }
  }
}
