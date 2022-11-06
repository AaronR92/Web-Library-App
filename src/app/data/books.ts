import {IBook} from "../model/book";
import {authors} from "./authors";

export const books: IBook[] = [
  {
    id: 1,
    name: "Sample book 1",
    description: "Sample text",
    author: Object,
    release_date: new Date("11.27.2019"),
    files: ["sample.txt"]
  },
  {
    id: 2,
    name: "Sample book 2",
    description: "Sample text",
    author: Object,
    release_date: new Date("11.27.2021"),
    files: ["sample.txt"]
  }
]
