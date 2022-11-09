import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IBook} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>("http://localhost:8080/api/v1/book")
  }
}
