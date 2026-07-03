'use client'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import  { useState } from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input";
import ListLunchGrid from "@/modules/Marmitas/presentation/components/ListLunchGrid"
import { useMarmitaStore } from "@/store/marmita-store";
import { TypingAnimation } from "@/components/ui/typing-animation"

export default function WeeklyPlanTab() {
    const orcamentoStore = useMarmitaStore((state) => state.orcamento)
    const [orcamento, setOrcamento] = useState("")
    const definirOrcamento = useMarmitaStore((state) => state.definirOrcamento)


    const totalGasto = useMarmitaStore((state) => state.getTotalGastoSemana());
    const totalCalorias = useMarmitaStore((state) => state.getTotalCaloriasSemana());

  return (

    <section className=' flex flex-col gap-8 pt-4'>
  
        <h1 className='text-3xl'>Dieta da semana</h1>
       <div className='flex flex-wrap gap-2 items-center'>
         <Input className='w-42' placeholder="Orçamento da semana" value={orcamento} onChange={(e) => setOrcamento(e.target.value)}  onKeyDown={(e) => { if (e.key === "Enter") { definirOrcamento(orcamento); setOrcamento(""); }  }} />
          <p>  {orcamentoStore > 0 ? <Badge className="bg-yellow-50 text-yellow-700 h-8" > <Image src="/money-coin.svg" width={20} height={20} alt="Coin" />  <TypingAnimation delay='200' typeSpeed='500'>R$: ${orcamentoStore}</TypingAnimation> </Badge> : " "}</p>
          <p>  {totalGasto > 0 ? <Badge className="bg-green-50 text-green-700 h-8" > <Image src="/money-cash.svg" width={20} height={20} alt="Cash" /> Total gasto: R${totalGasto} </Badge> : " "}</p>
          <p>  {totalGasto > 0 ? <Badge className="bg-orange-50 text-orange-700 h-8" > <Image src="/lightning.svg" width={20} height={20} alt="Ray" /> Total de calorias: {totalCalorias} </Badge> : " "}</p>
       </div>
      <ListLunchGrid />

        


    </section>
  );
}
