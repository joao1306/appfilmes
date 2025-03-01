import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InfotitleComponent } from './infotitle/infotitle.component';
import { SelecaoComponent } from './selecao/selecao.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, InfotitleComponent, SelecaoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
