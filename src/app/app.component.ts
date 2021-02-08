import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['Francisco', 'Eliana', 'Kyra', 'Kissy'];
  productos: Product[] = [
    {
      id: '1',
      titulo: 'Camiseta',
      imagen: 'assets/images/camiseta.png',
      precio: 100000,
      descripcion: 'Descripcion de la camiseta',
    },
    {
      id: '2',
      titulo: 'Hoodie',
      imagen: 'assets/images/hoodie.png',
      precio: 50000,
      descripcion: 'Descripcion del hoodie',
    },
    {
      id: '3',
      titulo: 'Mug',
      imagen: 'assets/images/mug.png',
      precio: 25000,
      descripcion: 'Descripcion del mug',
    },
    {
      id: '4',
      titulo: 'Pin',
      imagen: 'assets/images/pin.png',
      precio: 75000,
      descripcion: 'Descripcion del pin',
    },
    {
      id: '5',
      titulo: 'Stickers',
      imagen: 'assets/images/stickers1.png',
      precio: 5000,
      descripcion: 'Descripcion del stickers',
    },
    {
      id: '6',
      titulo: 'Stickers',
      imagen: 'assets/images/stickers2.png',
      precio: 2500,
      descripcion: 'Descripcion del stickers',
    },
  ];
  addItem() {
    this.items.push('Nuevo integrante');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
