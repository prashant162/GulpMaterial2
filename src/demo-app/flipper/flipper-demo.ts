import {Component} from '@angular/core';
import {NgClass} from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'flipper-demo',
  templateUrl: 'flipper-demo.html',
  styleUrls: ['flipper-demo.css'],
})
export class FlipperDemo {
     isClassVisible = false;
  
  flip(){
    this.isClassVisible = !this.isClassVisible;
    this.isClassVisible = this.isClassVisible?true:false;
  }
 
}
