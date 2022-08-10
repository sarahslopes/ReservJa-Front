import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartamentService {

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get('localhost:8070/api/apartament/list');
  }
}
