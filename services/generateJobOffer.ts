import { type JobOffer } from '@/types'

interface GenerateJobOfferResponse {
  result: string
}

export async function generateJobOffer(description: string): Promise<JobOffer> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    body: JSON.stringify({
      message: description,
    }),
  })
  const data: GenerateJobOfferResponse = await response.json()
  return JSON.parse(data.result)
}
