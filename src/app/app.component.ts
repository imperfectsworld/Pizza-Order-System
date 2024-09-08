import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrandChirpusLab';


menu: MenuItem[] = [
  {name: "Chicken Fingers", category: "Dinner" , price: 11.99, vegetarian: false, soldOut: false},
  {name: "Pizza", category: "Dinner" , price: 11.99, vegetarian: true, soldOut: false},
  {name: "Pepperoni Pizza", category: "Dinner" , price: 12.99, vegetarian: false, soldOut: false},
  {name: "Bread Sticks", category: "Sides" , price: 4.99, vegetarian: true, soldOut: true},
  {name: "Wings", category: "Sides" , price: 8.99, vegetarian: false, soldOut: false},
  {name: "Cinnamon Roll", category: "Dessert" , price: 8.99, vegetarian: true, soldOut: false}
];

/*
When that "Add to order" button is clicked, call a method that takes 
the price of the selected item and adds it to the total. Display the total on the page.
*/

total: number = 0;

addToOrder(price:number)
{
  this.total += price;
}


}