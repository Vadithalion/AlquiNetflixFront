import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films/films.service';
import {NgForm, FormControlName} from '@angular/forms';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  todasPelis = []; // Esta variable es la que recoge el HTML
  pelisTitulo = [];


  constructor(
    public filmsServices: FilmsService, // Invocamos el servicio para luego traer la funcion getAllFimls
    private sanitizer: DomSanitizer
  ) {}

   filmName = new FormGroup({
   nameFilm: new FormControl()
   });

ngOnInit(): void {
    this.getPeliculas(); // llamas a la funcion en el ONINIT, la funcion la creabs debajo, fuera del ONINIT
  }


  getPeliculas() {
    this.filmsServices.getAllFilms() // Este getAllFilms viene del servicio
    .subscribe(
    allFilms => {
        this.pelisTitulo = allFilms;
       }
    );
    }

    getPelisTitulo(tituloform: NgForm) {
      console.log(tituloform);
      if (!tituloform.value.titulo) {
    return  this.getPeliculas();
    }
      this.filmsServices.getFilmByName(tituloform.value.titulo)
      .subscribe(
        filmsTitle => {
          this.pelisTitulo = filmsTitle;
          console.log(tituloform.value);
        }
      );
    }




// click_Films(){
// console.log(this.filmName.value);
// this.filmsServices.getFilmByName(this.filmName.value)
//
// .subscribe(
// filmsTitle => {
//    this.pelisTitulo = filmsTitle;
//    console.log(nameFilm.value);
//  }
// )
//
// };

/* this.getAllFilms();
}
getAllFilms(){
  this.filmsServices.getAllFilms(this.Films)
  .subscribe(
    films => {
      this.Films
    },
    console.log(this.getAllFilms);
    console.log(this.listFilms);

  },
  err => console.log(err)
  );
}*/
}// NO BORRARRRRRRRRRRRRRRRR ESTA LLAVE ES LA QUE SE ABRE EN ONINIT
