import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() users!:User[];
  
  @Output() deletedUser = new EventEmitter<User>();

  


  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(value:User) {
    this.deletedUser.emit(value);
  }
}