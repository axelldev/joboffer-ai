'use client'
import { type JobOffer } from '@/types.d'
import ReactMarkdown from 'react-markdown'
import CopyToClipboard from './copy-to-clipboard'
import DownloadButton from './download-button'
import { useRef } from 'react'
import generatePDF, { Margin } from 'react-to-pdf'

interface JobOfferProps {
  jobOffer: JobOffer
}

export default function JobOfferCard({ jobOffer }: JobOfferProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const handleGeneratePdf = async () => {
    generatePDF(targetRef, {
      filename: `oferta-${jobOffer.title}.pdf`,
      page: {
        margin: Margin.SMALL,
      },
    })
  }

  return (
    <div className="bg-card-background px-4 py-6 rounded-md border border-muted">
      <div className="flex justify-end gap-2 w-full">
        <CopyToClipboard content={jobOffer.content} />
        <DownloadButton onClick={handleGeneratePdf} />
      </div>
      <div>
        <p className="font-bold text-2xl my-2">{jobOffer.title}</p>
        <div ref={targetRef}>
          <ReactMarkdown>{jobOffer.content}</ReactMarkdown>
          <div className="py-8"></div>
        </div>
      </div>
    </div>
  )
}
