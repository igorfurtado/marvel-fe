import { Character } from '@/pages/home/model/application/entities/character'
import { create } from 'zustand'

export type SelectedCharacter = {
  selectedCharacter: Character | null
  handleCharacter: (clickedCharacter: Character | null) => void
}

const useStore = create<SelectedCharacter>((set) => ({
  selectedCharacter: null,
  handleCharacter: (clickedCharacter: Character | null) => {
    set({
      selectedCharacter: clickedCharacter
    })
  }
}))

export const useSelectedCharacter = () =>
  useStore((state) => state.selectedCharacter)
export const useHandleSelectCharacter = () =>
  useStore((state) => state.handleCharacter)
