'use client'

import { FormEvent, useState } from 'react'

import AppHeader from '@/components/app-header'
import { Textarea } from '@/components/ui/textarea'
import Toolbar from '@/components/toolbar'
import GenerateButton from '@/components/generate-button'
import { useMutation } from '@tanstack/react-query'
import ErrorMessage from '@/components/error-message'
import JobOfferCard from '@/components/job-offer'
import { generateJobOffer } from '@/services/generateJobOffer'
import SelectTechnologies from '@/components/setps/select-technologies'
import useStepsStore from '@/lib/store/useStepsStore'

export default function Home() {
  const [jobDescription, setJobDescription] = useState('')

  const { currentStep } = useStepsStore()

  const mutation = useMutation({
    mutationFn: generateJobOffer,
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    mutation.mutate(jobDescription)
  }

  return (
    <div className="p-8">
      <Toolbar />
      <div className="my-8">
        <AppHeader />
      </div>
      {currentStep === 0 && <SelectTechnologies />}
      {currentStep === 1 && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Textarea
                onChange={({ target }) => setJobDescription(target.value)}
                placeholder="Describe los requisitos de tu producto ...."
                rows={5}
              ></Textarea>
              <GenerateButton loading={mutation.isPending} />
            </div>
          </form>
        </div>
      )}
      <div className="mt-4">
        {mutation.isError && <ErrorMessage message={mutation.error.message} />}
      </div>
      <main>{mutation.data && <JobOfferCard jobOffer={mutation.data} />}</main>
    </div>
  )
}
