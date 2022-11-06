import {IBook} from "./book";

export interface IAuthor {
  id: number
  name: string
  lastname: string
  date_of_birth: Date
  books: IBook[]
}
