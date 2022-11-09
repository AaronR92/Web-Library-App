import {IAuthor} from "./author";

export interface IBook {
  id: number
  name: string
  description: string
  author: IAuthor
  release_date: Date
  files: string[]
}
