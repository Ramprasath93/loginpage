import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // login=[
  //   {Email:"ram@gmail.com",Password:"123"},
  //   {Email:"Sam@gmail.com",Password:"456"},
  //   {Email:"sandy@gmail.com",Password:"789"}
  // ]

  //  signup=[
  //   {firstname:"ram",lastname:"prasath",email:"ram@gmail.com",mobileno:9043816180,password:123,confirmpassword:123,referalcode:505},
  //   {firstname:"sam",lastname:"sandy",email:"sam@gmail.com",mobileno:9043816181,password:456,confirmpassword:456,referalcode:500},
   
  // ]


  constructor(private http:HttpClient) { }


  apiUrl="http://localhost:4400"

  postSignup(data:any){
    return this.http.post(`${this.apiUrl}/signup`,data)
  }

  postLogin(data:any){
    return this.http.post(`${this.apiUrl}/login`,data)
  }
}
