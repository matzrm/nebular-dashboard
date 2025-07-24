import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-wait-dialog',
  templateUrl: './wait-dialog.component.html',
  styleUrls: ['./wait-dialog.component.scss'],
    standalone: false,

})
export class WaitDialogComponent {
  constructor(protected ref: NbDialogRef<WaitDialogComponent>) { }

}
