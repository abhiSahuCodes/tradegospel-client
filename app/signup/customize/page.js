'use client'
import { useRouter } from 'next/navigation'

export default function SignupCustomize() {
  const router = useRouter()

  const handleSkip = () => {
    router.push('/dashboard') 
  }

  const handleComplete = () => {
    router.push('/dashboard') 
  }

  return (
    <div className="w-full max-w-md p-6">
      <h1>Customize Profile</h1>
      <div className="flex gap-4">
        <button onClick={handleComplete}>Complete Setup</button>
        <button onClick={handleSkip}>Skip for Now</button>
      </div>
    </div>
  )
}