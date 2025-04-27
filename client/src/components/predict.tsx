"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// productLine: str    
// priceEach: float
// msrp: int    
// month_id: int 

export default function PredictionOverview() {
  const [dsm, setDsm] = useState("")
  const [psyprob, setPsyprob] = useState("")
  const [primpay, setPrimpay] = useState("")
  const [marstat, setMarstat] = useState("")
  const [los, setLos] = useState("")
  const [age, setAge] = useState("")
  const [servsetd, setServsetd] = useState("")
  const [frstuse, setFrstuse] = useState("")
  const [noprior, setNoprior] = useState("")
  
  
  const handleSubmit = async (e) => {
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
      toast.success(res_data.label, {
        description:`"Patients risk score"`,
        style:{
          background:"green",
          color:'white'
        }
      })
      toast.success(res_data.cluster, {
        description:`"Patients cluster group"`,
        style:{
          background:"green",
          color:'white'
        }
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
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Alcohol relapse prediction</CardTitle>
          <Link 
          target="_blank"
          href='https://colab.research.google.com/drive/1oNHkhJdxpoqIB57obzTeBmQBCGqP7EI9?usp=sharing' className="flex items-center gap-2">
            <CardDescription>The ML can be found here </CardDescription>
          </Link>
        </CardHeader>
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
          <Label className="capitalize" htmlFor="email">: PSYCHIATRIC PROBLEM IN ADDITION TO ALCOHOL</Label>        
          <Select onValueChange={value => setPsyprob(value)}>
            <SelectTrigger>
              <SelectValue placeholder=": PSYCHIATRIC PROBLEM IN ADDITION TO ALCOHOL" />
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
          <Button onClick={handleSubmit}>Predict</Button>
        </CardFooter>
      </Card>

    </div>
  )
}
