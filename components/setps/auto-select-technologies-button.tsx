interface Props {
  onClick: () => void
}

export default function AutoSelectTechnologiesButton({ onClick }: Props) {
  return (
    <div className="flex justify-center mt-4 font-bold md:justify-start">
      <button
        onClick={onClick}
        className="sm:text-2x hover:text-indigo-400 cursor-pointer flex gap-1 items-center"
      >
        <span>Elegir las tecnologias por mi</span>
        <span className="icon-[mingcute--ai-line] bg" />
      </button>
    </div>
  )
}
