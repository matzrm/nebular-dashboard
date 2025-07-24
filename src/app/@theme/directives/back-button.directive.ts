import { Directive, HostListener, Input } from "@angular/core";
import { NavigationService } from '../../@core/utils.ts/navigation.service';

@Directive({
  selector: "[backButton]",
    standalone: false,

})
export class BackButtonDirective {
  constructor(private navigation: NavigationService) {}
  @Input() backButtonRoute="";
  @HostListener("click")
  onClick(): void {
    this.navigation.back(this.backButtonRoute);
  }
}
