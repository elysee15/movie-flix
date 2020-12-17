import { MovieModalComponent } from './../../shared/componenents/movie-modal/movie-modal.component';
import { MoviesService } from './../../shared/services/movies.service';
import { Movies } from './../../core/utils/movie.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movies;

  constructor(
    private readonly moviesService: MoviesService,
    public dialog: MatDialog
  ) { 
    
  }

  ngOnInit(): void {
  }

  getMovieTrailer(movieId){
    return this.moviesService
    .getMoviesVideos(movieId)
    .subscribe(response => {
      console.log(response)
      return response
    });
  }

  async openDialog(id) {
    this.moviesService
      .getMoviesVideos(id)
      .subscribe(response => {
        const dialogRef = this.dialog.open(MovieModalComponent, {
          height: '80%',
          width: '80%',
          data: { movie: response[0] }
        });
      })


  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  template: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
