'use client'

import { cn } from '@/lib/utils'
import useOfferStore from '@/lib/store/useOfferStore'
import Image from 'next/image'

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
                  'border-2 border-indigo-300': isSelected(t.id),
                },
              )}
            >
              <Image src={t.image} width={100} height={100} alt="react logo" />
              <p className="capitalize font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 font-bold md:justify-start">
          <button
            onClick={() => setAutoAddTechnologies(true)}
            className="sm:text-2xl text-white/50 hover:text-indigo-300 cursor-pointer flex gap-1
              items-center"
          >
            <span>Elegir las tecnologias por mi</span>
            <span className="icon-[mingcute--ai-line] bg" />
          </button>
        </div>
      </div>
    </section>
  )
}
