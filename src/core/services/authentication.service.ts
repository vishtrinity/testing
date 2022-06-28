import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // saveRegisteredUser(){
  //   localStorage.setItem('user','ABC')
  // }

  getRegisteredUser(){
    console.log(localStorage.getItem('user'))
    return localStorage.getItem('user')
  }
}
