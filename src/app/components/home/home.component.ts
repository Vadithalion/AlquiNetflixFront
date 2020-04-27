import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  cards: Array<any> = [
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Star Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://pics.filmaffinity.com/Gladiator-152381312-large.jpg',
      name: 'Gladiator',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://i.pinimg.com/originals/4d/d2/3b/4dd23b8120032cce4e9826f3cbffeafc.jpg',
      name: 'Avatar',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://es.web.img3.acsta.net/r_1280_720/pictures/15/08/13/15/37/044333.jpg',
      name: 'No Scape',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51cfeIIm12L._AC_.jpg',
      name: 'Start Wars',
      txt: 'Era se una vez una galaxia muy muy lejana y estaba Don Quijote',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
