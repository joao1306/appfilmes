import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import db from '../data/database.json';
import pl from '../data/playlists.json';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private dados = db;
  private playlists = pl;

  // BehaviorSubjects para armazenar as seleções
  private filmeSelecionadoSubject = new BehaviorSubject(this.dados[0]);
  private playlistSelecionadaSubject = new BehaviorSubject(this.playlists[0].nome);

  // Observables para que os componentes possam escutar as mudanças
  filmeSelecionado$ = this.filmeSelecionadoSubject.asObservable();
  playlistSelecionada$ = this.playlistSelecionadaSubject.asObservable();

  constructor() {}

  getMovies() {
    return this.dados;
  }

  getPlaylists() {
    return this.playlists;
  }

  setFilme(n_filme: string) {
    const filme = this.dados.find(f => f.title === n_filme);
    if (filme) {
      this.filmeSelecionadoSubject.next(filme); // Atualiza o BehaviorSubject
    }
  }

  setPlaylist(playlist: string) {
    this.playlistSelecionadaSubject.next(playlist);
  }

  getFilmeSelecionado() {
    return this.filmeSelecionadoSubject.getValue();
  }

  getPlaylistSelecionada() {
    return this.playlistSelecionadaSubject.getValue();
  }
}
