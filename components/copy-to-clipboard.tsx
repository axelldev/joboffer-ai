'use client'
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Button } from './ui/button'
import { Tooltip } from './ui/tooltip'
import { useState } from 'react'

interface Props {
  content: string
}

export default function CopyToClipboard({ content }: Props) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="rounded-sm"
          onClick={copyToClipboard}
        >
          {copied ? (
            <span className="icon-[lets-icons--done]" />
          ) : (
            <span className="icon-[iconamoon--copy]" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copiar al portapapeles</p>
      </TooltipContent>
    </Tooltip>
  )
}
