import { create } from 'zustand'

export type SelectedHomeView = {
  selectedHomeView: 'home' | 'profile'
  handleHomeView: (selectedHomeView: 'home' | 'profile') => void
}

const useStore = create<SelectedHomeView>((set) => ({
  selectedHomeView: 'home',
  handleHomeView: (selectedHomeView: 'home' | 'profile') => {
    set({
      selectedHomeView: selectedHomeView
    })
  }
}))

export const useSelectedHomeView = () =>
  useStore((state) => state.selectedHomeView)
export const useHandleSelectedHomeView = () =>
  useStore((state) => state.handleHomeView)
