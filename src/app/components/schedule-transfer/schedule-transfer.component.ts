import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-transfer',
  templateUrl: './schedule-transfer.component.html',
  styleUrls: ['./schedule-transfer.component.css'],
  imports: [ReactiveFormsModule, CommonModule], 
  standalone: true
})
export class ScheduleTransferComponent implements OnInit {
  transferForm: FormGroup;
  private apiUrl = 'http://localhost:8080/api/v1/transfer';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.transferForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern('^\\d{11}$')]],
      originAccount: ['', Validators.required],
      destinationAccount: ['', Validators.required],
      scheduleDate: ['', Validators.required],
      transferValue: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.transferForm.valid) {
      const transferData = this.transferForm.value;
      
      // Fazendo a requisição POST
      this.http.post(this.apiUrl, transferData).subscribe({
        next: (response) => {
          console.log('Agendamento criado com sucesso:', response);
          alert('Agendamento criado com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao criar agendamento:', error);
          alert('Erro ao criar agendamento. Tente novamente.');
        }
      });
    } else {
      console.error('Formulário inválido!');
      alert('Formulário inválido! Preencha os campos corretamente.');
    }
  }
}
