import { Component, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { DisplayService } from '../display.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  passedDataMessage: string = 'Array from parent component';
 @Output() ChildUsers = [
  {
    Id: 1,
    Firstname: 'user',
    Lastname: 'user',
    DateOfBirth: '1910-01-11',
    PhoneNumber: '1234567890',
    Email: 'asd@example.com'
 },
];



}
