"use client";

import { Input } from "@/components/ui/input";
import { useMarmitaStore } from "@/store/marmita-store";
import { Badge } from "@/components/ui/badge";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardAction,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { CircleX, Copy, Soup, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button"


export default function ListLunchGrid() {
    
    const marmitas = useMarmitaStore((state) => state.marmitas);
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const deletarMarmita = useMarmitaStore((state) => state.deletarMarmita);
    const copiarMarmita = useMarmitaStore((state) => state.copiarMarmita);
    
    return (
        <div className=" flex flex-wrap gap-4">
          {diasSemana.map((dia) => {
            const marmita = marmitas.find((m) => m.diaSemana === dia);

            return (
                <Card key={dia} className="md:w-56 w-full h-fit hover:scale-105">
                <CardHeader>
                    <CardTitle>{dia}</CardTitle>

                    {marmita && (
                    <CardAction>
                        <CircleX
                        size={14}
                        onClick={() => deletarMarmita(dia)}
                        className="text-zinc-400 cursor-pointer"
                        />
                    </CardAction>
                    )}
                </CardHeader>

                <CardContent className="space-y-2 h-38">
                    {marmita ? (
                    <>
                        <p>Marmita:</p>
                        {marmita.carne.selecionado && <div className="flex items-center gap-1"><Image src="/food/carne.svg" width={25} height={25} alt="Carne" /><Badge className="bg-red-50 text-red-700">Carne {marmita.carne.quantidade}g | {marmita.carne.calorias} kcal</Badge></div>}
                        {marmita.frango.selecionado && <div className="flex items-center gap-1"><Image src="/food/frango.svg" width={25} height={25} alt="Frango" /><Badge className="bg-red-50 text-red-700">Frango {marmita.frango.quantidade}g | {marmita.frango.calorias} kcal</Badge></div>}
                        {marmita.ovo.selecionado && <div className="flex items-center gap-1"><Image src="/food/ovo.svg" width={25} height={25} alt="Ovo" /><Badge className="bg-red-50 text-red-700">Ovo {marmita.ovo.quantidade}g | {marmita.ovo.calorias} kcal</Badge></div>}
                        {marmita.milho.selecionado && <div className="flex items-center gap-1"><Image src="/food/milho.svg" width={25} height={25} alt="Milho" /><Badge className="bg-yellow-50 text-yellow-700">Milho {marmita.milho.quantidade}g | {marmita.milho.calorias} kcal</Badge></div>}
                        {marmita.batata.selecionado && <div className="flex items-center gap-1"><Image src="/food/batata.svg" width={25} height={25} alt="Batata" /><Badge className="bg-yellow-50 text-yellow-700">Batata {marmita.batata.quantidade}g | {marmita.batata.calorias} kcal</Badge></div>}
                        {marmita.pao.selecionado && <div className="flex items-center gap-1"><Image src="/food/pao.svg" width={25} height={25} alt="Pão" /><Badge className="bg-yellow-50 text-yellow-700">Pão {marmita.pao.quantidade}g | {marmita.pao.calorias} kcal</Badge></div>}
                        {marmita.feijao.selecionado && <div className="flex items-center gap-1"><Image src="/food/feijao.svg" width={25} height={25} alt="Feijão" /><Badge className="bg-yellow-50 text-yellow-700">Feijão {marmita.feijao.quantidade}g | {marmita.feijao.calorias} kcal</Badge></div>}
                        {marmita.arroz.selecionado && <div className="flex items-center gap-1"><Image src="/food/arroz.svg" width={25} height={25} alt="Arroz" /><Badge className="bg-yellow-50 text-yellow-700">Arroz {marmita.arroz.quantidade}g | {marmita.arroz.calorias} kcal</Badge></div>}
                        {marmita.tomate.selecionado && <div className="flex items-center gap-1"><Image src="/food/tomate.svg" width={25} height={25} alt="Tomate" /><Badge className="bg-green-50 text-green-700">Tomate {marmita.tomate.quantidade}g | {marmita.tomate.calorias} kcal</Badge></div>}
                        {marmita.queijo.selecionado && <div className="flex items-center gap-1"><Image src="/food/queijo.svg" width={25} height={25} alt="Queijo" /><Badge className="bg-green-50 text-green-700">Queijo {marmita.queijo.quantidade}g | {marmita.queijo.calorias} kcal</Badge></div>}
                        {marmita.alface.selecionado && <div className="flex items-center gap-1"><Image src="/food/alface.svg" width={25} height={25} alt="Alface" /><Badge className="bg-green-50 text-green-700">Alface {marmita.alface.quantidade}g | {marmita.alface.calorias} kcal</Badge></div>}
                        {marmita.beterraba.selecionado && <div className="flex items-center gap-1"><Image src="/food/beterraba.svg" width={25} height={25} alt="Beterraba" /><Badge className="bg-green-50 text-green-700">Beterraba {marmita.beterraba.quantidade}g | {marmita.beterraba.calorias} kcal</Badge></div>} 
                    </>
                    ) : (
                   <div className="h-full flex flex-col items-center justify-center text-zinc-400 py-6 gap-2">
                        <Utensils size={16} />
                        <p className="text-sm font-medium">Nenhuma marmita definida</p>

                        <Popover>
                            <PopoverTrigger asChild>
                                <p className="cursor-pointer text-xs">Copiar de outro dia</p>
                            
                            </PopoverTrigger>

                            <PopoverContent className="w-48 p-2">
                            {marmitas.length === 0 ? (
                                <p className="text-sm text-zinc-500">
                                Nenhuma marmita disponível.
                                </p>
                            ) : (
                                marmitas.map((m) => (
                                <Button
                                    key={m.diaSemana}
                                    variant="ghost"
                                    className="w-full justify-start"
                                    onClick={() => copiarMarmita(m.diaSemana, dia)}
                                >
                                    {m.diaSemana}
                                </Button>
                                ))
                            )}
                            </PopoverContent>
                        </Popover>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex flex-col gap-2 h-22">
                    {marmita ? (
                    <>
                        <p>Total de calorias: {marmita.caloriasTotais}</p>
                        <p>R$ {marmita.precoTotal.toFixed(2)}</p>
                    </>
                    ) : (
                    <p className="text-zinc-400 text-sm">Ainda não definida</p>
                    )}
                </CardFooter>
                </Card>
            );
            })}
        </div>
    );
}