import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup | any;

  callLoginArray:any;

  serviceLogin:any;

 


  constructor(private fb:FormBuilder,private service:ApiService,private route:Router) { 
    // this.callLoginArray=this.service.login;
  }

  ngOnInit(): void {

    this.form=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }


  submitForm(){

    // let data:any=this.callLoginArray.find((x:any)=>{
    //   return (this.form.value.email==x.email && this.form.value.password==x.password)

      
      
      
    // })
    // console.log(data);

    // if(data){
    //   alert("Email and Password are verified Successfully");
    //   this.route.navigateByUrl('/dashboard')
      
    // }else{
    //   alert('Datas are Invalid ')
      
    // }

    if(this.form.valid){
      console.log(this.form.value);

      this.service.postLogin(this.form.value).subscribe((res:any)=>{

        if(res.status=="Login Successfully"){
          alert("Login Successfully")
        }else{
          alert(res.status)
        }

      })


      // this.service.postSignup(this.form.value).subscribe((res:any)=>{
      //   console.log(res,"res==>");

      //   this.serviceLogin=res.Data;

      //  if (res.length) {
      //   alert('Login success')

      //   this.route.navigateByUrl('/dashboard')
        
      //  } else {
      //   alert('Invalid params')

      //  }
      // })

      
    }else{
      alert("Datas are invalid")
    }

  }
}
