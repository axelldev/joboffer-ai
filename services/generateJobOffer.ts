import { Technology, type JobOffer } from '@/types'

interface GenerateJobOfferResponse {
  result: string
}

interface GenerateJobOfferData {
  description: string
  technologies: Technology[]
  autoSelectTechnologies?: boolean
}

export async function generateJobOffer({
  description,
  technologies,
  autoSelectTechnologies,
}: GenerateJobOfferData): Promise<JobOffer> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    body: JSON.stringify({
      description,
      technologies,
      autoSelectTechnologies,
    }),
  })
  const data: GenerateJobOfferResponse = await response.json()
  return JSON.parse(data.result)
}
