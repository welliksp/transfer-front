import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transfer {
  id: string;
  cpf: string;
  originAccount: string;
  destinationAccount: string;
  scheduleDate: string;
  transferValue: number;
  interestRate: number;
  status: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private apiUrl = 'http://localhost:8080/api/v1/transfer';

  constructor(private http: HttpClient) {}

  createTransfer(transferData: any): Observable<any> {
    return this.http.post(this.apiUrl, transferData);
  }

  getTransfers(): Observable<{ _embedded: { transferDtoList: Transfer[] } }> {
    return this.http.get<{ _embedded: { transferDtoList: Transfer[] } }>(
      this.apiUrl
    );
  }
}
