import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MovieserviceService } from '../../../service/movieservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infotitle',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './infotitle.component.html',
  styleUrl: './infotitle.component.css'
})
export class InfotitleComponent {
  
  filmeSelecionado$ = this.movieService.filmeSelecionado$;

  constructor(private movieService: MovieserviceService) { }

  debug(){
    console.log(this.filmeSelecionado$);
  }

}
