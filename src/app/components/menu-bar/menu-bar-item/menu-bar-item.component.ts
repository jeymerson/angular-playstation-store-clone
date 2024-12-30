import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar-item.component.html',
  styleUrl: './menu-bar-item.component.css'
})
export class MenuBarItemComponent {
	@Input()
	Link:string = '';
	@Input()
	LinkTitle:string ='';
}
