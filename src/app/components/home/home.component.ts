import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films/films.service';
import {NgForm, FormControlName} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    public filmsServices: FilmsService, 
    private sanitizer: DomSanitizer
  ) {}

  filmName = new FormGroup({
  nameFilm: new FormControl()
  });


  ngOnInit(): void {
   this.filmsServices.getAllFilms()

    .subscribe(
    allFilms => {
       this.filmsServices.allFilms = allFilms;
      }
   )
  
}

click_Films(){
console.log(this.filmName.value);
this.filmsServices.getFilmByName(this.filmName.value)

.subscribe(
  allFilms => {
    this.filmsServices.allFilms = allFilms;
  }
)

};

}


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