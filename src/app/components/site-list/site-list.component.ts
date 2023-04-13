import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { Password } from 'src/app/model/password';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent{

  password:Password[]=[];
  
  @Input()
  isEditMode:boolean=false;
  @ViewChild('data', {static: false}) data: NgForm | undefined;
  passwordId : string =''
  show:boolean=false;

  passwordForm : Password ={
    _id:'',
    siteName: '',
    siteURL : '',
    siteImgURL : ''
  }

  constructor(
    public _passwordService:PasswordService,
    private route:ActivatedRoute,
    private ngxService:NgxUiLoaderService,
    private router:Router){
    this.loadSite()
  }

  loadSite(){
    this.ngxService.start()
    this._passwordService.getAllPassword().subscribe(res=>
      {
        this.password=res
        console.log(res)
      }
    )
    this.ngxService.stop();
  }
  onSubmit(data:Password){
    this.show=!this.show;
    if(!this.isEditMode){
      this._passwordService.addPassWord(data).subscribe(res=>
        {
          this.loadSite()
        }
      )
    }else{
      this._passwordService.updatePassWord(this.passwordId,data).subscribe(()=> this.loadSite())
    }
    this.data?.resetForm();
  }

  onDeletePassword(id:string){
    alert('Are sure want to delete ?')
     this._passwordService.deletePassWord(id).subscribe(res=>{
      this.loadSite()
      console.log(res);
     })
  }

  onEditData(password:Password){ 
    this.isEditMode=true
     if(password){
       this.passwordForm=password
       this.passwordId=this.passwordForm._id;
     }
  }
 
  onAddNewPassword(id:string){
     this.router.navigate([`/password-list/${id}`]);
  }
}
