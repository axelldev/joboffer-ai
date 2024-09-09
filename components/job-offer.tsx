import { type JobOffer } from '@/types.d'
import { Card, CardContent } from './ui/card'

interface JobOfferProps {
  jobOffer: JobOffer
}

export default function JobOfferCard({ jobOffer }: JobOfferProps) {
  return (
    <Card className="bg-card-background px-4 py-6 rounded-lg">
      <CardContent>
        <p>{jobOffer.title}</p>
        <p>{jobOffer.content}</p>
      </CardContent>
    </Card>
  )
}
