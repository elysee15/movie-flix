import { MoviesService } from './../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movies } from '../core/utils/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  topRatedMovies: Movies[] = [];
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);


  constructor(
    private readonly movieServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRatedMovies();
  }

  getPopularMovies(){
    this.movieServices
      .getPopularMovies()
      .subscribe(response => {
        this.movies = response
        console.log("Popular movies",response)
      })
  }

  getTopRatedMovies(){
    this.movieServices
    .getTopRatedMovies()
    .subscribe(response => {
      this.topRatedMovies = response;
      console.log("Top rated Movies",response)
    })
  }
}
