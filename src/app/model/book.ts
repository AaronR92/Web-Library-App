import {IAuthor} from "./author";

export interface IBook {
  id: number
  name: string
  description: string
  author: Object
  release_date: Date
  files: string[]
}
