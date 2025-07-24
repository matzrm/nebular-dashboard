import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss'],
    standalone: false,

})
export class GoBackComponent {

  @Input() route : string="";
  constructor(){

  }


}
