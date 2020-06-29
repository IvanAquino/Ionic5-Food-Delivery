import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product: Product = {
    name: 'Pizza',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    price: '$ 40',
    image: 'https://anos30.com.br/wp-content/uploads/2018/03/pizza-destaque-850x491.jpg',
    ingredients: [
      'https://image.flaticon.com/icons/svg/3077/3077418.svg',
      'https://image.flaticon.com/icons/svg/889/889709.svg',
      'https://image.flaticon.com/icons/svg/3073/3073025.svg',
      'https://image.flaticon.com/icons/svg/862/862847.svg',
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
