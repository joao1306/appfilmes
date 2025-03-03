import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-pl',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dialog-pl.component.html',
  styleUrl: './dialog-pl.component.css'
})
export class DialogPlComponent {

  constructor(private dialogRef: MatDialogRef<DialogPlComponent>) {}

  form = new FormGroup({
    nome: new FormControl(''),
    fotoUrl: new FormControl('')
  });

  salvarPlaylist() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Retorna os dados ao fechar o modal
    }
  }

  fechar() {
    this.dialogRef.close();
  }

}
