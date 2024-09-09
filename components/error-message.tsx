export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="py-4 px-6 bg-red-400/90 rounded-lg">
      <p className="text-white">{message}</p>
    </div>
  )
}
