import {IAuthor} from "../model/author";
import {books} from "./books"

export const authors: IAuthor[] = [
  {
    id: 1,
    name: "Sample name",
    lastname: "Sample lastname",
    date_of_birth: new Date("01.13.1990"),
    books: [books[0], books[1]]
  }
]