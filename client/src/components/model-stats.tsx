'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const modelData = [
  {
    name: "Accuracy",
    value: 84,
  },
  {
    name: "Precision",
    value: 79,
  },
  {
    name: "Recall",
    value: 82,
  },
  {
    name: "F1 Score",
    value: 80,
  },
]

const factorsData = [
  { factor: "Length of Stay", importance: 0.22 },
  { factor: "Age", importance: 0.19 },
  { factor: "First Use", importance: 0.14 },
  { factor: "No prior visits", importance: 0.12 },
  { factor: "Marital status", importance: 0.086 },
  { factor: "Primary pay", importance: 0.078 },
  { factor: "Psychiatric problem", importance: 0.051 },
  { factor: "Service Setting", importance: 0.072 },
  { factor: "DSM diagnosis", importance: 0.022 },
]

export default function ModelStats() {
  return (
    <div className="space-y-6">      

      <Card>
        <CardHeader>
          <CardTitle>Key Factors</CardTitle>
          <CardDescription>Feature importance in prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {factorsData.map((item) => (
              <div key={item.factor} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.factor}</span>
                  <span className="font-medium">{(item.importance * 100).toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: `${item.importance * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
