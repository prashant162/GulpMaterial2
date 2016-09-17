import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'CustomButton',
  templateUrl: 'CustomButton.html',
  styleUrls: ['CustomButton.css'],
})
export class CustomButton {
  isDisabled: boolean = false;
  clickCounter: number = 0;
}
