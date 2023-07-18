import LoginForm from "./login-form"

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[90vh] pb-[5vh] flex-col">
      <h1 className="text-white font-bold text-2xl pb-2">Login</h1>
      <LoginForm />
    </div>
  )
}