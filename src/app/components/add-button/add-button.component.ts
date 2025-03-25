import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
@Input() modalID!:number; /* recibe su valor del componente padre Main */
}
