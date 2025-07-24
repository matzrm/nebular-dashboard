import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  title = 'nebular-dashboard';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['it-IT', 'en-US', 'fr-FR']);
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');
  }
}
