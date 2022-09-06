import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpform:FormGroup | any;

  signUp:any;

  constructor(private fb:FormBuilder,private service:ApiService) {
    // this.signUpArray=this.service.signup;
   }

  ngOnInit(): void {
    this.signUpform=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      mobileno:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      referalcode:['']
    })
  }

  formSubmit(){
    if(this.signUpform.valid){
      console.log(this.signUpform.value);

      this.service.postSignup(this.signUpform.value).subscribe((res:any)=>{

        // this.signUp=res.Data;
        if(res.status=='Success'){
          alert("Login success")
        }else{
          alert(res.status)
        }

         })
      
    //   let myData=this.signUpArray.find((b:any)=>{

    //     return (this.signUpform.value.firstname==b.firstname && this.signUpform.value.lastname==b.lastname && this.signUpform.value.email==b.email && this.signUpform.value.mobileno==b.mobileno && this.signUpform.value.password==b.password && this.signUpform.value.confirmpassword==b.confirmpassword && this.signUpform.value.referalcode==b.referalcode  )

        
    //   })
    //   if(myData){
    //     alert("Datas are entered successfully")
    //   }else{
    //     alert("invalid")
        
    //   }


      
    // }


  }
}
}
