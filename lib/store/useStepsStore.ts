'use client'
import { create } from 'zustand'

const MAX_STEPS = 3

interface UseStepsState {
  currentStep: number
}

interface UseStepsActions {
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
}

type UseStepsStore = UseStepsState & UseStepsActions

const useStepsStore = create<UseStepsStore>((set, get) => ({
  currentStep: 0,
  nextStep: () => {
    set((state) => {
      if (state.currentStep > MAX_STEPS) return state

      return {
        currentStep: state.currentStep + 1,
      }
    })
  },
  prevStep: () => {
    const currentStep = get().currentStep
    if (currentStep === 0) {
      return
    }
    set({
      currentStep: currentStep - 1,
    })
  },
  setStep: (step) => {
    set({ currentStep: step })
  },
}))

export default useStepsStore
