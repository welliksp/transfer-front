import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { TransferService, Transfer } from '../schedule-transfer/transfer.service';

@Component({
  selector: 'app-list-transfer',
  standalone: true, // Indica que é um componente standalone
  imports: [CommonModule], // Inclui CommonModule para usar *ngFor e outros recursos
  templateUrl: './list-transfer.component.html',
  styleUrls: ['./list-transfer.component.css'],
})
export class ListTransferComponent {
  transfers: Transfer[] = [];

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferService.getTransfers().subscribe({
      next: (data) => {
        this.transfers = data._embedded.transferDtoList;
      },
      error: (err) => console.error('Erro ao buscar transfers:', err),
    });
  }
}
