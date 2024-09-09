import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'

interface GenerateButtonProps {
  loading?: boolean
  disabled?: boolean
}

export default function GenerateButton({
  loading,
  disabled,
}: GenerateButtonProps) {
  return (
    <Button disabled={disabled || loading}>
      Generar
      {loading && <Loader2 className="ml-2 w-4 animate-spin" />}
    </Button>
  )
}
