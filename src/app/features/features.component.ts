import { Component } from '@angular/core';
import { faMobileAlt, faCode, faLifeRing, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  faMobileProperty = faMobileAlt
  faCode = faCode
  faLifeRing = faLifeRing
  faPencilAlt = faPencilAlt


}
