import ToggleDarkMode from './toggle-dark-mode'

export default function Toolbar() {
  return (
    <div className="w-full flex justify-end fixed top-0 right-0 left-0 px-8 py-4">
      <ToggleDarkMode />
    </div>
  )
}
