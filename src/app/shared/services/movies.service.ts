import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPopularMovies(){
    return this.http
      .get("https://api.themoviedb.org/3/movie/popular?api_key=4de02da1796bc818d4a2adfac7688966")
      .pipe(
        map((v: any) => v.results),
        catchError((err) => err)
      )
  }

  getTopRatedMovies(){
    return this.http
      .get("https://api.themoviedb.org/3/movie/top_rated?api_key=4de02da1796bc818d4a2adfac7688966&page=1")
      .pipe(
        map((v: any) => v.results),
        catchError((err) => err)
      )
  }

  getMoviesVideos(movieId){
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4de02da1796bc818d4a2adfac7688966`)
      .pipe(
        map((v: any) => v.results),
        catchError((err) => err)
      )
  }
}
