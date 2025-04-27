import { Compass } from "lucide-react"
import RecoveryForm from "@/components/recovery-form"
import ModelStats from "@/components/model-stats"

const Home = () => {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="h-6 w-6 text-teal-600" />
            <h1 className="text-2xl font-bold text-gray-900">Recovery Compass</h1>
          </div>
          <p className="text-gray-600">
            A clinical decision support tool to help predict alcohol recovery risk factors
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecoveryForm />
          </div>
          <div>
            <ModelStats />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
