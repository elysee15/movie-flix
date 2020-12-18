import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, ReviewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxSkeletonLoaderModule.forRoot()
  ]
})
export class MoviesModule { }
