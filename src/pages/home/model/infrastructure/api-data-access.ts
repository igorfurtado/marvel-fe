import axios, { AxiosResponse } from 'axios'
import { CharactersDataAccess } from '../application/data-access'
import { ApiResponse } from '../application/value-objects/api-response'
import { CharacterResponse } from '../application/value-objects/character-data'

export default class CharacterApiDataAccess implements CharactersDataAccess {
  private readonly _apiKey: string
  constructor() {
    this._apiKey = import.meta.env.VITE_ACCESS_KEY
  }

  async getCharacters({
    currentPage,
    itemsPerPage,
    searchParam = '',
    signal
  }: {
    currentPage: number
    itemsPerPage: number
    searchParam: string
    signal?: AbortSignal
  }): Promise<CharacterResponse> {
    try {
      const url = `https://gateway.marvel.com/v1/public/characters?limit=${itemsPerPage}&offset=${searchParam ? 0 : (currentPage - 1) * itemsPerPage}${searchParam && `&nameStartsWith=${searchParam}`}&orderBy=name&apikey=${this._apiKey}`

      const configRequest = {
        method: 'GET',
        url,
        signal
      }

      const axiosResponse =
        await axios.request<AxiosResponse<ApiResponse>>(configRequest)

      const apiResponse = axiosResponse.data as unknown as ApiResponse

      if (apiResponse.status === 'Ok' && apiResponse.code === 200) {
        return {
          numberOfItems: apiResponse.data.total,
          result: apiResponse.data.results
        }
      }
    } catch {
      return { numberOfItems: 0, result: [] }
    }

    return {
      numberOfItems: 0,
      result: []
    }
  }
}
