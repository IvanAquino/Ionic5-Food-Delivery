import { Component } from '@angular/core';

const categories = [
  {
    text: 'Fast food',
    img: 'https://image.flaticon.com/icons/svg/3075/3075929.svg',
  },
  {
    text: 'Meat',
    img: 'https://image.flaticon.com/icons/svg/3082/3082035.svg',
  },
  {
    text: 'Seafood',
    img: 'https://image.flaticon.com/icons/svg/3050/3050540.svg',
  },
  {
    text: 'Vegetables',
    img: 'https://image.flaticon.com/icons/svg/3099/3099656.svg'
  }
];

const products = [
  {
    text: 'Pizza',
    img: 'https://image.flaticon.com/icons/svg/1404/1404894.svg',
    price: '$ 30',
  },
  {
    text: 'Hamburger',
    img: 'https://image.flaticon.com/icons/svg/3075/3075929.svg',
    price: '$ 40',
  },
  {
    text: 'Hot Dog',
    img: 'https://image.flaticon.com/icons/svg/3106/3106136.svg',
    price: '$ 50',
  },
  {
    text: 'Hot cakes',
    img: 'https://image.flaticon.com/icons/svg/3124/3124573.svg',
    price: '$ 20',
  }
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categories: Array<{ text: string; img: string; }> = categories;
  products: Array<{text: string; img: string; price: string; }> = products;

  constructor() {}

}
