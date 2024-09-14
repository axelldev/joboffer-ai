import { Button } from './ui/button'

export default function DownloadButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="outline" onClick={onClick}>
      <span className="icon-[tabler--pdf]" />
    </Button>
  )
}
