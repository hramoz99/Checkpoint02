import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private request = 'https://demo8451558.mockable.io/pokemon';
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) { }

  listar(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.request) as Observable<Pokemon[]>;
  }
}


