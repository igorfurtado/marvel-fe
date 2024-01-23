import { CharacterResponse } from '../value-objects/character-data'

export interface CharactersDataAccess {
  getCharacters({
    currentPage,
    itemsPerPage,
    searchParam,
    signal
  }: {
    currentPage: number
    itemsPerPage: number
    searchParam: string
    signal?: AbortSignal
  }): Promise<CharacterResponse>
}
