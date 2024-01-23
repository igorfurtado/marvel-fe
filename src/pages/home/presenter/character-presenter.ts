import { CharactersDataAccess } from '../model/application/data-access'
import { CharacterResponse } from '../model/application/value-objects/character-data'

interface ICharacterPresenter {
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

export default class CharactersPresenter implements ICharacterPresenter {
  public readonly _charactersDataAccess: CharactersDataAccess

  constructor(charactersDataAccess: CharactersDataAccess) {
    this._charactersDataAccess = charactersDataAccess
  }

  async getCharacters({
    currentPage,
    itemsPerPage,
    signal
  }: {
    currentPage: number
    itemsPerPage: number
    signal?: AbortSignal | undefined
  }): Promise<CharacterResponse> {
    return this._charactersDataAccess.getCharacters({
      currentPage,
      itemsPerPage,
      signal
    })
  }
}
