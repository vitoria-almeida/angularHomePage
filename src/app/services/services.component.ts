import { Component} from '@angular/core';
import { faLifeRing, faRocket, faCogs, faMagic } from  '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  faLifeRing = faLifeRing
  faRocket = faRocket
  faCogs = faCogs
  faMagic = faMagic
}
