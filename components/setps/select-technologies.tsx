'use client'

import useOfferStore from '@/lib/store/useOfferStore'
import useStepsStore from '@/lib/store/useStepsStore'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import AutoSelectTechnologiesButton from './auto-select-technologies-button'
import { technologiesData } from '@/lib/technologies'
import { useMemo, useState } from 'react'

export default function SelectTechnologies() {
  const {
    selectedTechnologies,
    isSelected,
    addTechnology,
    setAutoAddTechnologies,
  } = useOfferStore((state) => state)
  const { nextStep } = useStepsStore((state) => state)

  const [displayCount, setDisplayCount] = useState(6)
  const technologies = useMemo(
    () => technologiesData.slice(0, displayCount),
    [displayCount],
  )
  const canShowMore = displayCount < technologiesData.length

  const handleShowMore = () => {
    if (!canShowMore) return
    setDisplayCount(displayCount + 6)
  }

  const handleClickAutoSelect = () => {
    setAutoAddTechnologies(true)
    nextStep()
  }

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center">
        <p className="sm:text-2xl md:text-3xl font-bold">
          Selecciona las tecnologias de tu proyecto
        </p>
        <div
          className="justify-center grid place-content-center items-center grid-cols-2 sm:grid-cols-3
            md:grid-cols-6 mt-4 gap-4"
        >
          {technologies.map((t) => (
            <div
              key={t.id}
              onClick={() => addTechnology(t)}
              className={cn(
                `flex flex-col bg-secondary dark:bg-secondary w-[100px] h-[100px] justify-center
                items-center rounded-sm p-6 hover:bg-indigo-300/20 cursor-pointer`,
                {
                  'border-2 border-indigo-300 bg-indigo-300/20': isSelected(
                    t.id,
                  ),
                },
              )}
            >
              <div className="relative size-[80px]">
                <Image
                  src={t.image}
                  fill
                  alt="react logo"
                  className="object-contain"
                />
              </div>
              <p className="capitalize font-semibold">{t.name}</p>
            </div>
          ))}
        </div>

        {canShowMore && (
          <div className="flex w-full justify-center mt-6">
            <Button variant="secondary" onClick={handleShowMore}>
              Mostar mas
            </Button>
          </div>
        )}

        <AutoSelectTechnologiesButton onClick={handleClickAutoSelect} />

        {selectedTechnologies.length > 0 && (
          <Button className="mt-8 py-2 w-[300px]" onClick={() => nextStep()}>
            Continuar
          </Button>
        )}
      </div>
    </section>
  )
}
