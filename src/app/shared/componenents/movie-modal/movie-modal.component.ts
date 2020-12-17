import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {
  url: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) { 
   this.url = `https://www.youtube.com/embed/${data.movie.key}?autoplay=1&color=yellow`;
  }

  ngOnInit(): void {
  
    console.log("DATA",this.data.movie?.key)
  }

}
