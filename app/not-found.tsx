import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-8 min-h-screen grid place-content-center">
      <p className="font-bold text-xl sm:text-3xl">
        404 - No se encontró la página.
      </p>
      <Button variant="outline" className="mt-4" asChild>
        <Link href="/">Ir a la página principal</Link>
      </Button>
    </div>
  )
}
