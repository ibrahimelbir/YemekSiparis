import { Component } from '@angular/core';
import { faCaretDown, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  faStarOfLife = faStarOfLife;
  faCaretDown = faCaretDown;
}
