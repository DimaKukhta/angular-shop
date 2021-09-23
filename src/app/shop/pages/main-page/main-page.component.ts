import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public discountGoods = [
    {
      id: '612e05c53a4458874142f298',
      name: 'Смартфон Xiaomi Redmi 9C 3GB/64GB без NFC (серый)',
      imageUrls: [
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4d93ad5e.jpeg',
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4dcc75e1.jpeg',
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4dccffb9.jpeg',
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4dcd8c3b.jpeg',
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4dce1685.jpeg',
        'https://cdn21vek.by/img/galleries/6141/799/preview_b/redmi9c3gb64gbm2006c3mgnfc_xiaomi_5f4ca4dd008b4.jpeg',
      ],
      rating: 1,
      availableAmount: 13,
      price: 472.84,
      description:
        'duis voluptate veniam dolor enim occaecat pariatur eu enim officia commodo proident aliqua aute ut irure excepteur amet Lorem proident laboris fugiat labore veniam nostrud esse magna cupidatat aute dolore elit nisi ut proident fugiat excepteur officia ullamco laborum voluptate',
    },
    {
      id: '612e05c5f9b35258fc7929cb',
      name: 'Смартфон ZTE Blade A3 2020 1GB/32GB (темно-серый)',
      imageUrls: [
        'https://cdn21vek.by/img/galleries/6133/839/preview_b/a320201gb32gb_zte_5f3f9ae544884.jpeg',
        'https://cdn21vek.by/img/galleries/6133/839/preview_b/a320201gb32gb_zte_5f3f9ba475dfe.jpeg',
        'https://cdn21vek.by/img/galleries/6133/839/preview_b/a320201gb32gb_zte_5f3f9ba4a7fca.jpeg',
        'https://cdn21vek.by/img/galleries/6133/839/preview_b/a320201gb32gb_zte_5f3f9ba4ca4c2.jpeg',
        'https://cdn21vek.by/img/galleries/6133/839/preview_b/a320201gb32gb_zte_5f3f9ba50fab5.jpeg',
      ],
      rating: 4,
      availableAmount: 8,
      price: 944.42,
      description:
        'nostrud laborum minim in incididunt ullamco do nisi pariatur magna non esse ipsum dolor aliqua in veniam sunt eiusmod labore veniam officia anim adipisicing nisi est commodo laborum enim minim amet incididunt irure minim elit commodo culpa occaecat laborum magna',
    },
    {
      id: '612e05c57e5cfaba3c14ed5c',
      name: 'Мобильный телефон Texet TM-513R (черно-оранжевый)',
      imageUrls: [
        'https://cdn21vek.by/img/galleries/293/851/preview_b/tm513r_texet_560553f710b36.png',
        'https://cdn21vek.by/img/galleries/293/851/preview_b/tm513r_texet_57c893d5f3bab.jpeg',
        'https://cdn21vek.by/img/galleries/293/851/preview_b/tm513r_texet_57c893d61aa72.jpeg',
        'https://cdn21vek.by/img/galleries/293/851/preview_b/tm513r_texet_56055427a4654.png',
      ],
      rating: 4,
      availableAmount: 19,
      price: 678.46,
      description:
        'consectetur laboris occaecat ipsum aliquip mollit deserunt irure Lorem sunt velit irure ad in mollit elit ex nulla fugiat aute est mollit culpa fugiat reprehenderit laborum anim cupidatat esse adipisicing veniam excepteur elit esse eiusmod adipisicing qui Lorem commodo pariatur',
    },
    {
      id: '612e05c5caf19519be5c8a6c',
      name: 'Смартфон ZTE Blade A5 2020 2GB/32GB (аквамарин)',
      imageUrls: [
        'https://cdn21vek.by/img/galleries/6130/156/preview_b/bladea520202gb32gb_zte_5f4370f25e3f7.jpeg',
        'https://cdn21vek.by/img/galleries/6130/156/preview_b/bladea520202gb32gb_zte_5f4370f84e371.jpeg',
        'https://cdn21vek.by/img/galleries/6130/156/preview_b/bladea520202gb32gb_zte_5f4370f86ab59.jpeg',
        'https://cdn21vek.by/img/galleries/6130/156/preview_b/bladea520202gb32gb_zte_5f4370f896cb4.jpeg',
      ],
      rating: 5,
      availableAmount: 16,
      price: 942,
      description:
        'elit laboris exercitation culpa labore ad duis ipsum velit ad sint commodo commodo cupidatat cupidatat proident labore occaecat voluptate laborum cupidatat quis sunt culpa sint minim reprehenderit veniam culpa ullamco id non irure quis duis sit incididunt Lorem cupidatat deserunt',
    },
  ];
}
