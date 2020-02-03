import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: any[];

  constructor() {}

  ngOnInit() {
    this.movies = [
      {
        Title: "Iron Man",
        Year: "2008",
        Poster:
          "https://4.bp.blogspot.com/_U-_MB3ct83I/S6pL1KH_aHI/AAAAAAAAFI4/xAg9nivP8Bs/s1600/hr_iron_man_poster1.jpg"
      },
      {
        Title: "Iron Man 2",
        Year: "2010",
        Poster:
          "https://vignette.wikia.nocookie.net/transcripts/images/1/14/Marvel%27s_Iron_Man_2_-_iTunes_Movie_Poster.jpeg/revision/latest?cb=20170206025128"
      },
      {
        Title: "Iron Man",
        Year: "2012",
        Poster:
          "http://l.yimg.com/os/251/2013/02/27/ironman3-poster-watermark-jpg_162144.jpg"
      }
    ];
  }
}
