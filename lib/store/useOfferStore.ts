'use client'
import { Technology } from '@/types'
import { create } from 'zustand'

interface State {
  selectedTechnologies: Technology[]
  autoAddTechnologies: boolean
}

interface Actions {
  setAutoAddTechnologies: (value: boolean) => void
  addTechnology: (technology: Technology) => void
  isSelected: (id: number) => Technology | undefined
}

type UseOfferStore = State & Actions

const useOfferStore = create<UseOfferStore>((set, get) => ({
  selectedTechnologies: [],
  autoAddTechnologies: false,
  isSelected: (id: number) => {
    return get().selectedTechnologies.find((t) => t.id === id)
  },
  addTechnology: (technology) => {
    set({
      autoAddTechnologies: false,
    })
    // Removes if the technology is already selectedf
    if (get().isSelected(technology.id)) {
      set((state) => ({
        selectedTechnologies: state.selectedTechnologies.filter(
          (t) => t.id !== technology.id,
        ),
      }))
    } else {
      set((state) => ({
        selectedTechnologies: [...state.selectedTechnologies, technology],
      }))
    }
  },
  setAutoAddTechnologies: (value: boolean) =>
    set((state) => ({
      autoAddTechnologies: value,
      selectedTechnologies: value ? [] : state.selectedTechnologies,
    })),
}))

export default useOfferStore
