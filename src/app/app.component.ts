import { Component, Input } from '@angular/core';
import { ParentUser } from './parent-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giorgi_Maghlakelidze';
  userForm!: FormGroup;

  users1 = [
    { firstname: 'givi', lastname: 'givadze', age: 25 },
    { firstname: 'nika', lastname: 'kiladze', age: 22 },
    { firstname: 'luka', lastname: 'tarkhnishvili', age: 30 },
    { firstname: 'giorgi', lastname: 'maghlakelidze', age: 18 },
    { firstname: 'iva', lastname: 'saatashvili', age: 28 },
  ];
  usersArray: ParentUser[] = [
    {
      Id: 1,
      Firstname: 'zxc',
      Lastname: 'sda',
      DateOfBirth: '1990-01-01',
      PhoneNumber: '555555555',
      Email: 'john@example.com'
    },
  ];
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Id: [null],
      Firstname: ['', [Validators.required, Validators.minLength(3)]],
      Lastname: ['', [Validators.required, Validators.minLength(3)]],
      DateOfBirth: ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      Email: ['', [Validators.required, Validators.minLength(8), Validators.email]]
    });
  }
  
  addUser() {
    if (this.userForm.valid) {
      // this.users.push(this.userForm.value);
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
    //   @Input() users1: ParentUser[] = [
      //     {
        //     Id: 1,
//     Firstname: 'John',
//     Lastname: 'Doe',
//     DateOfBirth: '1990-01-01',
//     PhoneNumber: '1234567890',
//     Email: '@example.com'
//   },
// ];
}

}