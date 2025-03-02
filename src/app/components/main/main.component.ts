import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InfotitleComponent } from './infotitle/infotitle.component';
import { SelecaoComponent } from './selecao/selecao.component';
import { CommonModule } from '@angular/common';
import { MovieserviceService } from '../../service/movieservice.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, InfotitleComponent, SelecaoComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

    filmeSelecionado$ = this.movieService.filmeSelecionado$;
    isFading = false;
    currentBgImage: string | null = null;
  
    constructor(private movieService: MovieserviceService) { }
  
    ngOnInit() {
      this.filmeSelecionado$.subscribe(filme => {
          if (filme?.bg_image) {
              this.triggerFadeEffect(filme.bg_image);
          }
      });
  }

  triggerFadeEffect(newImage: string) {
    this.isFading = true; 

    setTimeout(() => {
        this.currentBgImage = newImage; // Troca a imagem após o fade-out
    }, 300); // Metade do tempo da transição para evitar delay perceptível

    setTimeout(() => {
        this.isFading = false; // Faz o fade-in
    }, 600); // Tempo total da animação
}

}
