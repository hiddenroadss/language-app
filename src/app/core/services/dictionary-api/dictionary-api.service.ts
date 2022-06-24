import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryApiService {
  private readonly baseUrl = 'localhost:3000'

  constructor(private apiService: ApiService) { }

  getWords(): Observable<Word[]> {
    return this.apiService.get<Word[]>(`${this.baseUrl}/words`);
  }
}
