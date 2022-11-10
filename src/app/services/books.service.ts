import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {delay, Observable} from "rxjs";
import {IBook} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(environment.serverUrl + "/api/v1/book")
  }

  getBooksByName(name: string): Observable<IBook[]> {
    return this.http.get<IBook[]>(environment.serverUrl + "/api/v1/book", {
      params: new HttpParams({
        fromObject: {name: name} 
      })
    })
  }
}
