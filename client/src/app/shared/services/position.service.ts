import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message, Position} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http: HttpClient) {

  }

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/position/${categoryId}`)
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('/api/position', position)
  }

  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(`/api/position/${position._id}`, {
      name: position.name,
      cost: position.cost
    })
  }

  remove(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/position/${id}`)
  }
}
