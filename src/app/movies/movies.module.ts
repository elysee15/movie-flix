import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxSkeletonLoaderModule.forRoot()
  ]
})
export class MoviesModule { }
