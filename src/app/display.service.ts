import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  constructor() { 
    console.log("Array is displayed by Display service");

  }
}
