'use client'

import AppHeader from '@/components/app-header'
import Toolbar from '@/components/toolbar'
import { useMutation } from '@tanstack/react-query'
import ErrorMessage from '@/components/error-message'
import JobOfferCard from '@/components/job-offer'
import { generateJobOffer } from '@/services/generateJobOffer'
import SelectTechnologies from '@/components/setps/select-technologies'
import useStepsStore from '@/lib/store/useStepsStore'
import DescribeProjectForm from '@/components/setps/describe-project-form'
import { useState } from 'react'
import useOfferStore from '@/lib/store/useOfferStore'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export default function Home() {
  const [error, setError] = useState<string | null>(null)

  const { currentStep } = useStepsStore()
  const { selectedTechnologies, autoAddTechnologies } = useOfferStore(
    (state) => state,
  )

  const mutation = useMutation({
    mutationFn: generateJobOffer,
  })

  const finalError = mutation.error?.message || error

  const handleSubmit = (description: string) => {
    if (!description) {
      setError('Por favor, describe tu proyecto.')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    mutation.mutate({
      description,
      technologies: selectedTechnologies,
      autoSelectTechnologies: autoAddTechnologies,
    })
  }

  console.log(mutation.data)

  return (
    <TooltipProvider>
      <div className="p-3 md:p-6 lg:p-8">
        <Toolbar />
        <div className="my-8">
          <AppHeader />
        </div>
        {currentStep === 0 && <SelectTechnologies />}
        {currentStep === 1 && (
          <DescribeProjectForm
            isLoading={mutation.isPending}
            onSubmit={handleSubmit}
          />
        )}
        <div className="mt-4">
          {finalError && <ErrorMessage message={finalError} />}
        </div>
        <main className="mt-6 max-w-[800px] mx-auto">
          {mutation.data && <JobOfferCard jobOffer={mutation.data} />}
        </main>
      </div>
    </TooltipProvider>
  )
}
