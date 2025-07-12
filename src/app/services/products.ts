import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Hardcodeo de productos para simular una base de datos
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export class Products {

  // Hardcodeo de productos

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Kawasaki 600',
      descripcion: 'Una moto deportiva ligera y ágil, ideal para principiantes.',
      precio: 5000,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 2,
      nombre: 'Suzuki 1200',
      descripcion: 'Una naked bike versátil y cómoda para la ciudad y la carretera.',
      precio: 6000,
      imagen: '/img/suzuki-1200.jpg'
    },
    {
      id: 3,
      nombre: 'Suzuki Gixxer SF',
      descripcion: 'Una moto naked con un motor potente y un diseño agresivo.',
      precio: 7000,
      imagen: '/img/suzuki-gixxer-sf-720.jpg'
    }
  ]

  constructor() { }

  getPoducts(): Product[] {
    return this.products;
  }

  
}
