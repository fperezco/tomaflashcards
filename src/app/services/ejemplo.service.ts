import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor() { }

  test(){
    console.log("test");
  }
}
