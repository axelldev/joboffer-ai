import { Loader2 } from 'lucide-react'
import { Button } from './ui/button'

interface GenerateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  disabled?: boolean
}

export default function GenerateButton({
  loading,
  disabled,
  ...props
}: GenerateButtonProps) {
  return (
    <Button disabled={disabled || loading} {...props}>
      Generar
      {loading && <Loader2 className="ml-2 w-4 animate-spin" />}
    </Button>
  )
}
