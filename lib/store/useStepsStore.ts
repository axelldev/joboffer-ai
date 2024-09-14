'use client'
import { create } from 'zustand'

interface UseStepsState {
  currentStep: number
}

interface UseStepsActions {
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
}

type UseStepsStore = UseStepsState & UseStepsActions

const useStepsStore = create<UseStepsStore>((set) => ({
  currentStep: 0,
  nextStep: () => {},
  prevStep: () => {},
  setStep: (step) => {
    set({ currentStep: step })
  },
}))

export default useStepsStore
