import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MovieserviceService } from '../../../service/movieservice.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogPlComponent } from '../../../dialog-pl/dialog-pl.component';
import { DialogMvComponent } from '../../../dialog-mv/dialog-mv.component';

@Component({
  selector: 'app-selecao',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './selecao.component.html',
  styleUrl: './selecao.component.css'
})
export class SelecaoComponent {

  movies: any[] = [];
  items: any[] = [];

  constructor(private movieService: MovieserviceService, private dialog_pl: MatDialog, private dialog_mv: MatDialog) {};

  openDialogPl(){
    this.dialog_pl.open(DialogPlComponent);
  }

  openDialogMv(){
    this.dialog_mv.open(DialogMvComponent);
  }

  ngOnInit(){
    this.movies = this.movieService.getMovies();
    this.items = this.movieService.getPlaylists();
    this.movieService.setPlaylist(this.items[0].nome);
    this.movieService.setFilme(this.movies[0].title);
  }

  updateFilmes(){
    return this.movies;
  }

  updatePlaylist(){
    return this.items;
  }

  setFilme(e:string){
    this.movieService.setFilme(e);
  }

  setPlaylist(e:string){
    this.movieService.setPlaylist(e);
  }


}
