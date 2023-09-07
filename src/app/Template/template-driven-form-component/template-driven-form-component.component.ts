import { Component, OnInit } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {



  userModel = new User('', '', '', 0, '', 0)

  ngOnInit() {
    console.log(this.userModel)
  }
  onSubmit() {
    console.log(this.userModel)
  }

}
