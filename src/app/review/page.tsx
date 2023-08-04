import ReviewForm from "./components/ReviewForm"

export default function Review() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-2">
      <h1 className="text-white text-2xl font-bold">
        Create Review
      </h1>
      <ReviewForm />
    </div>
  )
}