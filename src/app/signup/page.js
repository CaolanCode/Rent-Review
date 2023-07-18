import SignupForm from "./signup-form"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh] flex-col">
      <h1 className="text-white font-bold text-2xl pb-2">Sign Up</h1>
      <SignupForm />
    </div>
  )
}