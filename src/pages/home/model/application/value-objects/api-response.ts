import { Character } from '../entities/character'

export type ApiResponse = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: Character[]
  }
}
