"use client"

import type React from "react"
import { toast } from "sonner"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { AlertCircle, ArrowRight } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RecoveryForm() {
  const [prediction, setPrediction] = useState<null | {
    riskScore: number
    riskLevel: string
    confidence: number
  }>(null)

  const [dsm, setDsm] = useState("")
  const [psyprob, setPsyprob] = useState("")
  const [primpay, setPrimpay] = useState("")
  const [marstat, setMarstat] = useState("")
  const [los, setLos] = useState("")
  const [age, setAge] = useState("")
  const [servsetd, setServsetd] = useState("")
  const [frstuse, setFrstuse] = useState("")
  const [noprior, setNoprior] = useState("")
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      "DSMCRIT": Number(dsm),
      "PSYPROB": Number(psyprob),
      "PRIMPAY": Number(primpay),
      "MARSTAT": Number(marstat),
      "LOS": Number(los),
      "AGE": Number(age),
      "SERVSETD": Number(servsetd),
      "FRSTUSE1": Number(frstuse),
      "NOPRIOR": Number(noprior)
    }
    try {
      
      const res = await fetch("http://127.0.0.1:8000/predict",{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
  
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const res_data = await res.json()
      console.log(res_data);
      setPrediction({
        riskScore: res_data.cluster,
        riskLevel: res_data.label,
        confidence: Math.round((0.65 + Math.random() * 0.3) * 100) / 100,
      })
      
    } catch (error) {
      console.log(error.message);
      toast.error("There has been an error", {
        description:error?.message,
        style:{
          background:"red",
          color:'white'
        }
      })
    }

    // In a real application, this would call an API endpoint with the form data
    // For demo purposes, we'll simulate a prediction
    
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Patient Assessment</CardTitle>
          <CardDescription>Enter patient data to predict recovery risk factors</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-2.5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">DSM Diagnosis</Label>        
          <Select onValueChange={value => setDsm(value)}>
            <SelectTrigger>
              <SelectValue placeholder="DSM Diagnosis" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">Alcohol Dependence</SelectItem>
              <SelectItem value="9">Alcohol Abuse</SelectItem>              
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email">PSYCHIATRIC PROBLEM IN ADDITION TO ALCOHOL</Label>        
          <Select onValueChange={value => setPsyprob(value)}>
            <SelectTrigger>
              <SelectValue placeholder="PSYCHIATRIC PROBLEM IN ADDITION TO ALCOHOL" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Yes</SelectItem>
              <SelectItem value="2">No</SelectItem>              
              <SelectItem value="-9">Unknown</SelectItem>              
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email">ACTUAL PRIMARY SOURCE OF PAYMENT</Label>        
          <Select onValueChange={value => setPrimpay(value)}>
            <SelectTrigger>
              <SelectValue placeholder="/ACTUAL PRIMARY SOURCE OF PAYMENT" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Self Pay</SelectItem>
              <SelectItem value="2">Health Insuarance companies</SelectItem>              
              <SelectItem value="3">Worker's compensation</SelectItem>              
              <SelectItem value="4">MEDICAID</SelectItem>              
              <SelectItem value="5">Other Goverment Payments</SelectItem>              
              <SelectItem value="8">Free, charity, special research</SelectItem>              
              <SelectItem value="9">Other</SelectItem>              
              <SelectItem value="-9">Unknown</SelectItem>              
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email">Marital status</Label>        
          <Select onValueChange={value => setMarstat(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Never married</SelectItem>
              <SelectItem value="2">Now married</SelectItem>              
              <SelectItem value="3">Separated</SelectItem>              
              <SelectItem value="4">Divorced or windowed</SelectItem>                                     
              <SelectItem value="-9">Unknown</SelectItem>              
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email">Age</Label>        
          <Select onValueChange={value => setAge(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">12-14</SelectItem>
              <SelectItem value="3">15-17</SelectItem>              
              <SelectItem value="4">18-20</SelectItem>              
              <SelectItem value="5">21-24</SelectItem>                                     
              <SelectItem value="6">25-29</SelectItem>                                     
              <SelectItem value="7">30-34</SelectItem>                                     
              <SelectItem value="8">35-39</SelectItem>                                     
              <SelectItem value="9">40-44</SelectItem>                                     
              <SelectItem value="10">45-49</SelectItem>                                     
              <SelectItem value="11">50-54</SelectItem>                                     
              <SelectItem value="12">55 and over</SelectItem>                                     
              
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email"> SERVICE SETTING AT DISCHARGE</Label>        
          <Select onValueChange={value => setServsetd(value)}>
            <SelectTrigger>
              <SelectValue placeholder=" SERVICE SETTING AT DISCHARGE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">DETOX, 24 HR, HOSPITAL INPATIENT</SelectItem>
              <SelectItem value="2">DETOX, 24 HR, FREE-STANDING RESIDENTIAL </SelectItem>              
              <SelectItem value="3">REHAB/RES, HOSPITAL (NON-DETOX) </SelectItem>              
              <SelectItem value="4">REHAB/RES, SHORT TERM (30 DAYS OR FEWER)</SelectItem>                                     
              <SelectItem value="5">REHAB/RES, LONG TERM (MORE THAN 30 DAY)</SelectItem>                                     
              <SelectItem value="6">AMBULATORY, INTENSIVE OUTPATIENT</SelectItem>                                     
              <SelectItem value="7">AMBULATORY, NON-INTENSIVE OUTPATIENT.</SelectItem>                                     
              <SelectItem value="8">AMBULATORY, DETOXIFICATION </SelectItem>                                                                       
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email">AGE AT FIRST USE</Label>        
          <Select onValueChange={value => setFrstuse(value)}>
            <SelectTrigger>
              <SelectValue placeholder=" SERVICE SETTING AT DISCHARGE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">11 and under</SelectItem>                                                          
              <SelectItem value="2">12-14</SelectItem>                                                          
              <SelectItem value="3">15-17</SelectItem>                                                          
              <SelectItem value="4">18-20</SelectItem>                                                          
              <SelectItem value="5">21-24</SelectItem>                                                          
              <SelectItem value="6">25-29</SelectItem>                                                          
              <SelectItem value="7">30-34</SelectItem>                                                          
              <SelectItem value="8">35-39</SelectItem>                                                          
              <SelectItem value="9">40-44</SelectItem>                                                          
              <SelectItem value="10">45-49</SelectItem>                                                          
              <SelectItem value="11">50-54</SelectItem>                                                          
              <SelectItem value="12">55 and over</SelectItem>                                                          
              <SelectItem value="-9">Unknown</SelectItem>                                                          
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email"> NUMBER OF PRIOR TREATMENT EPISODES</Label>        
          <Select onValueChange={value => setNoprior(value)}>
            <SelectTrigger>
              <SelectValue placeholder=" NUMBER OF PRIOR TREATMENT EPISODES" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">NO PRIOR TREATMENT EPISODESr</SelectItem>                                                          
              <SelectItem value="1">1 PRIOR TREATMENT EPISODES</SelectItem>                                                                        
              <SelectItem value="2">2 PRIOR TREATMENT EPISODES</SelectItem>                                                                        
              <SelectItem value="3">3 PRIOR TREATMENT EPISODES</SelectItem>                                                                        
              <SelectItem value="4">4 PRIOR TREATMENT EPISODES</SelectItem>                                                                        
              <SelectItem value="5">5 PRIOR TREATMENT EPISODES</SelectItem>                                                                        
              <SelectItem value="-9">Unknown</SelectItem>                                                          
            </SelectContent>
          </Select>          
        </div>  
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="capitalize" htmlFor="email"> Length of Stay</Label>        
          <Select onValueChange={value => setLos(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Length of Stay" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Less than 21 days</SelectItem>                                                          
              <SelectItem value="31">31-45 days</SelectItem>
              <SelectItem value="32">46-60 days</SelectItem>
              <SelectItem value="33">61-90 days</SelectItem>
              <SelectItem value="34">91-120 days</SelectItem>
              <SelectItem value="35">121-180 days</SelectItem>
              <SelectItem value="36">181-365 days</SelectItem>
              <SelectItem value="37">More than a year</SelectItem>
              
              <SelectItem value="-9">Unknown</SelectItem>                                                          
            </SelectContent>
          </Select>          
        </div>          
          
        </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Generate Prediction
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Card>

      {prediction && (
        <Card
          className={`border-l-4 ${
            prediction.riskLevel === "Low"
              ? "border-l-green-500"
              : prediction.riskLevel === "Moderate"
                ? "border-l-yellow-500"
                : "border-l-red-500"
          }`}
        >
          <CardHeader>
            <CardTitle>Prediction Results</CardTitle>
            <CardDescription>Based on the provided patient data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Risk Class</p>
                <p className="text-2xl font-bold">{prediction.riskScore}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Risk Level</p>
                <p
                  className={`text-2xl font-bold ${
                    prediction.riskLevel === "Low"
                      ? "text-green-600"
                      : prediction.riskLevel === "Moderate"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {prediction.riskLevel}
                </p>
              </div>
              
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Clinical Recommendation</AlertTitle>
              <AlertDescription>
                {prediction.riskLevel === "Low"
                  ? "Patient shows positive indicators for recovery. Consider standard outpatient treatment."
                  : prediction.riskLevel === "Moderate"
                    ? "Patient may benefit from intensive outpatient program and regular monitoring."
                    : "Consider inpatient treatment program with comprehensive support services."}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
