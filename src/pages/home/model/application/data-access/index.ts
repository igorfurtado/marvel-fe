import { CharacterResponse } from '../value-objects/character-data'

export interface CharactersDataAccess {
  getCharacters({
    currentPage,
    itemsPerPage,
    signal
  }: {
    currentPage: number
    itemsPerPage: number
    signal?: AbortSignal
  }): Promise<CharacterResponse>
}
