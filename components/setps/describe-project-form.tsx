import { useState } from 'react'
import GenerateButton from '../generate-button'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'
import useStepsStore from '@/lib/store/useStepsStore'

interface Props {
  onSubmit: (description: string) => void
  isLoading: boolean
}

export default function DescribeProjectForm({ onSubmit, isLoading }: Props) {
  const { prevStep } = useStepsStore()
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    onSubmit(description)
  }

  return (
    <div className="flex flex-col gap-3 items-center max-w-[800px] mx-auto">
      <p>
        Describe los requisitos de tu proyecto para que los desarrolladores
        tengan una idea clara de lo que necesitas.
      </p>
      <Textarea
        className="w-full"
        onChange={({ target }) => setDescription(target.value)}
        rows={5}
        value={description}
      ></Textarea>
      <div className="w-full flex gap-2">
        <Button variant="outline" onClick={prevStep}>
          Regresar
        </Button>
        <GenerateButton
          className="flex-grow btn-grad text-white"
          loading={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}
