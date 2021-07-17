import { Component } from '@angular/core';
import { faBasketballBall, faHashtag, faAppleAlt, faAt, faBomb, faBolt} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  fa1 = faBasketballBall  
  fa2 = faHashtag
  fa3 = faAppleAlt
  fa4 = faAt 
  fa5 = faBomb 
  fa6 = faBolt
}
