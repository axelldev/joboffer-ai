'use client'

import useOfferStore from '@/lib/store/useOfferStore'
import useStepsStore from '@/lib/store/useStepsStore'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import AutoSelectTechnologiesButton from './auto-select-technologies-button'

const technologies = [
  {
    id: 1,
    name: 'react',
    image: '/logos/react.svg',
  },
  {
    id: 2,
    name: 'vue',
    image: '/logos/vue.svg',
  },
  {
    id: 3,
    name: 'angular',
    image: '/logos/angular.svg',
  },
  {
    id: 4,
    name: 'laravel',
    image: '/logos/laravel.png',
  },
]

export default function SelectTechnologies() {
  const { isSelected, addTechnology, setAutoAddTechnologies } = useOfferStore(
    (state) => state,
  )

  const { nextStep } = useStepsStore((state) => state)

  const handleClickAutoSelect = () => {
    setAutoAddTechnologies(true)
    nextStep()
  }

  return (
    <section className="container">
      <div className="flex flex-col items-center">
        <p className="sm:text-2xl md:text-3xl font-bold">
          Selecciona las tecnologias de tu proyecto
        </p>
        <div className="w-full justify-center grid grid-cols-tech gap-4 mt-4">
          {technologies.map((t) => (
            <div
              key={t.id}
              onClick={() => addTechnology(t)}
              className={cn(
                `flex flex-col bg-card w-[100px] h-[100px] justify-center items-center rounded-sm
                p-6 hover:bg-indigo-300/20 cursor-pointer`,
                {
                  'border-2 border-indigo-300 bg-indigo-300/20': isSelected(
                    t.id,
                  ),
                },
              )}
            >
              <Image src={t.image} width={100} height={100} alt="react logo" />
              <p className="capitalize font-semibold">{t.name}</p>
            </div>
          ))}
        </div>

        <AutoSelectTechnologiesButton onClick={handleClickAutoSelect} />

        <Button className="mt-8 py-2 w-[300px]" onClick={() => nextStep()}>
          Continuar
        </Button>
      </div>
    </section>
  )
}
