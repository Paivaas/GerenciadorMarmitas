"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { DropdownMenu,  DropdownMenuContent,  DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import  { useState } from 'react';
import { X } from 'lucide-react';

import { useMarmitaStore } from "@/store/marmita-store";

export default function AddLunchCard() {

   const diaSemana = useMarmitaStore((state) => state.diaSemana)
    const adicionarDiaSemana = useMarmitaStore((state) => state.adicionarDiaSemana)
    
    // Proteinas
    const carne = useMarmitaStore((state) => state.carne)
    const [valorCarne, setValorCarne] = useState("");
    const adicionarCarne = useMarmitaStore((state) => state.adicionarCarne)
    const removerCarne = useMarmitaStore((state) => state.removerCarne)

    const frango = useMarmitaStore((state) => state.frango)
    const [valorFrango, setValorFrango] = useState("");
    const adicionarFrango = useMarmitaStore((state) => state.adicionarFrango)
    const removerFrango = useMarmitaStore((state) => state.removerFrango)
    
    const ovo = useMarmitaStore((state) => state.ovo)
    const [valorOvo, setValorOvo] = useState("");
    const adicionarOvo = useMarmitaStore((state) => state.adicionarOvo)
    const removerOvo = useMarmitaStore((state) => state.removerOvo)

    // Carboidratos
  
    const milho = useMarmitaStore((state) => state.milho)
    const [valorMilho, setValorMilho] = useState("");
    const adicionarMilho = useMarmitaStore((state) => state.adicionarMilho)
    const removerMilho = useMarmitaStore((state) => state.removerMilho)

    const batata = useMarmitaStore((state) => state.batata)
    const [valorBatata, setValorBatata] = useState("");
    const adicionarBatata = useMarmitaStore((state) => state.adicionarBatata)
    const removerBatata = useMarmitaStore((state) => state.removerBatata)

    const pao = useMarmitaStore((state) => state.pao)
    const [valorPao, setValorPao] = useState("")
    const adicionarPao = useMarmitaStore((state) => state.adicionarPao)
    const removerPao = useMarmitaStore((state) => state.removerPao)

    // const batataDoce = useMarmitaStore((state) => state.batatadoce)
    // const quantidadeBatataDoce = useMarmitaStore((state) => state.quantidadeBatatadoce)
    // const [valorBatataDoce, setValorBatataDoce] = useState("")
    // const adicionarBatataDoce = useMarmitaStore((state) => state.adicionarBatatdoce)

    const feijao = useMarmitaStore((state) => state.feijao)
    const [valorFeijao, setValorFeijao] = useState("")
    const adicionarFeijao = useMarmitaStore((state) => state.adicionarFeijao)
    const removerFeijao = useMarmitaStore((state) => state.removerFeijao)

    const arroz = useMarmitaStore((state) => state.arroz)
    const [valorArroz, setValorArroz] = useState("")
    const adicionarArroz = useMarmitaStore((state) => state.adicionarArroz)
    const removerArroz = useMarmitaStore((state) => state.removerArroz)

    //Acompanhamentos
    const tomate = useMarmitaStore((state) => state.tomate)
    const [valorTomate, setValorTomate] = useState("")
    const adicionarTomate = useMarmitaStore((state) => state.adicionarTomate)
    const removerTomate = useMarmitaStore((state) => state.removerTomate)

    const alface = useMarmitaStore((state) => state.alface)
    const [valorAlface, setValorAlface] = useState("")
    const adicionarAlface = useMarmitaStore((state) => state.adicionarAlface)
    const removerAlface = useMarmitaStore((state) => state.removerAlface)

    const queijo = useMarmitaStore((state) => state.queijo)
    const [valorQueijo, setValorQueijo] = useState("")
    const adicionarQueijo = useMarmitaStore((state) => state.adicionarQueijo)
    const removerQueijo = useMarmitaStore((state) => state.removerQueijo)

    const beterraba = useMarmitaStore((state) => state.beterraba)
    const [valorBeterraba, setValorBeterraba] = useState("")
    const adicionarBeterraba = useMarmitaStore((state) => state.adicionarBeterraba)
    const removerBeterraba = useMarmitaStore((state) => state.removerBeterraba)

    // Funções principais
    const resetarMarmita = useMarmitaStore((state) => state.resetarMarmita)
    const adicionarMarmita = useMarmitaStore((state) => state.adicionarMarmita )

    // desabilitar botao 
    const marmitas = useMarmitaStore((state) => state.marmitas);
    const diaOcupado = (dia) => { return marmitas.some((marmita) => marmita.diaSemana === dia);
  
};
  const totalAcompanhamentos = [tomate.selecionado, alface.selecionado, queijo.selecionado, beterraba.selecionado].filter(Boolean).length;
  return (
    <section className="space-y-4 pt-4">
      <Card className="p-6 md:w-150 w-full">
        <h1 className="text-3xl">Montar Marmita</h1>

        <ToggleGroup type="single" value={diaSemana} onValueChange={(value) => {
              if (value) adicionarDiaSemana(value);
            }}>
            <ToggleGroupItem value="Segunda" disabled={diaOcupado("Segunda")}>Seg</ToggleGroupItem>
            <ToggleGroupItem value="Terça" disabled={diaOcupado("Terça")}>Ter</ToggleGroupItem>
            <ToggleGroupItem value="Quarta" disabled={diaOcupado("Quarta")}>Qua</ToggleGroupItem>
            <ToggleGroupItem value="Quinta" disabled={diaOcupado("Quinta")}>Qui</ToggleGroupItem>
            <ToggleGroupItem value="Sexta" disabled={diaOcupado("Sexta")}>Sex</ToggleGroupItem>
        </ToggleGroup>
        
        <div className="space-x-2 space-y-3">
          <h1>Proteínas</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={frango.selecionado || ovo.selecionado} variant="outline" className="h-fit">
                <Image src="/food/carne.svg" width={35} height={35} alt="Carne" />
                <p>Carne</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${carne.preco} </Badge>
              <Input
                    placeholder="Quantidade (g)" value={valorCarne} onChange={(e) => setValorCarne(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { adicionarCarne(valorCarne); setValorCarne('')}  }}
                />
            </DropdownMenuContent>
          </DropdownMenu>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button  disabled={carne.selecionado || ovo.selecionado} variant="outline" className="h-fit">
                <Image src="/food/frango.svg" width={35} height={35} alt="Carne" />
                <p>Frango</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${frango.preco} </Badge>
              <Input
                    placeholder="Quantidade (g)" value={valorFrango} onChange={(e) => setValorFrango(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { adicionarFrango(valorFrango); setValorFrango(""); }  }}
                />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button  disabled={carne.selecionado || frango.selecionado} variant="outline" className="h-fit">
                <Image src="/food/ovo.svg" width={35} height={35} alt="Carne" />
                <p>Ovo</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${ovo.preco} </Badge>
              <Input
                    placeholder="Quantidade (g)" value={valorOvo} onChange={(e) => setValorOvo(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { adicionarOvo(valorOvo); setValorOvo(""); }  }}
                />
            </DropdownMenuContent>
          </DropdownMenu>

        
        </div>

        <div className="space-x-2 space-y-3">
          <h1>Carboidratos</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={batata.selecionado || pao.selecionado  || feijao.selecionado || arroz.selecionado} variant="outline" className="h-fit">
                <Image src="/food/milho.svg" width={35} height={35} alt="Carne" />
                <p>Milho</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${milho.preco} </Badge>
              <Input
                    placeholder="Quantidade (g)" value={valorMilho} onChange={(e) => setValorMilho(e.target.value)} 
                    onKeyDown={(e) => { if (e.key === "Enter") { adicionarMilho(valorMilho ); setValorMilho(""); }  }}
                />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={milho.selecionado || pao.selecionado  || feijao.selecionado || arroz.selecionado} variant="outline" className="h-fit">
                <Image src="/food/batata.svg" width={35} height={35} alt="Carne" />
                <p>Batata</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${batata.preco} </Badge>
              <Input
                      placeholder="Quantidade (g)" value={valorBatata} onChange={(e) => setValorBatata(e.target.value)} 
                    onKeyDown={(e) => { if (e.key === "Enter") { adicionarBatata(valorBatata); setValorBatata(""); }  }}
                />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={milho.selecionado || batata.selecionado  || feijao.selecionado || arroz.selecionado} variant="outline" className="h-fit">
                <Image src="/food/pao.svg" width={35} height={35} alt="Carne" />
                <p>Pão</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${pao.preco} </Badge>
             <Input placeholder="Quantidade (g)" value={valorPao} onChange={(e) => setValorPao(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarPao(valorPao); setValorPao(""); } }} />

            </DropdownMenuContent>
          </DropdownMenu>

           {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={milho || batata || pao || feijao || arroz} variant="outline" className="h-fit">
                <Image src="/food/batatadoce.svg" width={35} height={35} alt="Carne" />
                <p>Batata doce</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> R$ 2,00 g </Badge>
              <Input placeholder="Quantidade (g)" value={valorBatataDoce} onChange={(e) => setValorBatataDoce(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarBatataDoce(valorBatataDoce); setValorBatataDoce(""); } }} />

            </DropdownMenuContent>
          </DropdownMenu> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={milho.selecionado || batata.selecionado || pao.selecionado  || arroz.selecionado} variant="outline" className="h-fit">
                <Image src="/food/feijao.svg" width={35} height={35} alt="Carne" />
                <p>Feijão</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${feijao.preco} </Badge>
              <Input placeholder="Quantidade (g)" value={valorFeijao} onChange={(e) => setValorFeijao(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarFeijao(valorFeijao); setValorFeijao(""); } }} />

            </DropdownMenuContent>
          </DropdownMenu>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={milho.selecionado || batata.selecionado || pao.selecionado  || feijao.selecionado} variant="outline" className="h-fit">
                <Image src="/food/arroz.svg" width={35} height={35} alt="Carne" />
                <p>Arroz</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${arroz.preco} </Badge>
              <Input placeholder="Quantidade (g)" value={valorArroz} onChange={(e) => setValorArroz(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarArroz(valorArroz); setValorArroz(""); } }} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-x-2 space-y-3">
          <h1>Acompanhamentos</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button  disabled={totalAcompanhamentos >= 2 && !tomate.selecionado} variant="outline" className="h-fit">
                <Image src="/food/tomate.svg" width={35} height={35} alt="Carne" />
                <p>Tomate</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${tomate.preco} </Badge>
              <Input placeholder="Quantidade (g)" value={valorTomate} onChange={(e) => setValorTomate(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarTomate(valorTomate); setValorTomate(""); } }} />

            </DropdownMenuContent>
          </DropdownMenu>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={totalAcompanhamentos >= 2 && !alface.selecionado} variant="outline" className="h-fit">
                <Image src="/food/alface.svg" width={35} height={35} alt="Carne" />
                <p>Alface</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${alface.preco} </Badge>
              
              <Input placeholder="Quantidade (g)" value={valorAlface} onChange={(e) => setValorAlface(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarAlface(valorAlface); setValorAlface(""); } }} /> 
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button  disabled={totalAcompanhamentos >= 2 && !queijo.selecionado } variant="outline" className="h-fit">
                <Image src="/food/queijo.svg" width={35} height={35} alt="Carne" />
                <p>Queijo</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${queijo.preco} </Badge>
             <Input placeholder="Quantidade (g)" value={valorQueijo} onChange={(e) => setValorQueijo(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarQueijo(valorQueijo); setValorQueijo(""); } }} />

            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={totalAcompanhamentos >= 2 && !beterraba.selecionado} variant="outline" className="h-fit">
                <Image src="/food/beterraba.svg" width={35} height={35} alt="Carne" />
                <p>Beterraba</p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <Badge className="bg-zinc-50 text-zinc-700 dark:zinc-red-950"> ${beterraba.preco} </Badge>
              <Input placeholder="Quantidade (g)" value={valorBeterraba} onChange={(e) => setValorBeterraba(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { adicionarBeterraba(valorBeterraba); setValorBeterraba(""); } }} />
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

        <div className="flex gap-2 flex-wrap">
          {carne.selecionado && ( <Badge className="bg-red-50 text-red-700" > Carne {carne.quantidade}g   <button className="cursor-pointer" onClick={removerCarne} ><X size={12}/></button>   </Badge> )}
          {frango.selecionado && ( <Badge className="bg-red-50 text-red-700" > Frango {frango.quantidade}g  <button className="cursor-pointer" onClick={removerFrango} ><X size={12}/></button> </Badge> )}
          {ovo.selecionado && ( <Badge className="bg-red-50 text-red-700" > Ovo {ovo.quantidade}g <button className="cursor-pointer" onClick={removerOvo} ><X size={12}/></button> </Badge> )}
          {milho.selecionado && ( <Badge className="bg-yellow-50 text-yellow-700" > Milho {milho.quantidade}g <button className="cursor-pointer" onClick={removerMilho} ><X size={12}/></button> </Badge> )}
          {batata.selecionado && ( <Badge className="bg-yellow-50 text-yellow-700" > Batata {batata.quantidade}g <button className="cursor-pointer" onClick={removerBatata} ><X size={12}/></button> </Badge> )}
          {pao.selecionado && ( <Badge className="bg-yellow-50 text-yellow-700" > Pão {pao.quantidade}g <button className="cursor-pointer" onClick={removerPao} ><X size={12}/></button> </Badge> )}
          {/* {batataDoce && ( <Badge className="bg-yellow-50 text-yellow-700" > Batata Doce {quantidadeBatataDoce}g  </Badge> )} */}
          {feijao.selecionado && ( <Badge className="bg-yellow-50 text-yellow-700" > Feijão {feijao.quantidade}g <button className="cursor-pointer" onClick={removerFeijao} ><X size={12}/></button> </Badge> )}
          {arroz.selecionado && ( <Badge className="bg-yellow-50 text-yellow-700" > Arroz {arroz.quantidade}g <button className="cursor-pointer" onClick={removerArroz} ><X size={12}/></button> </Badge> )}
          {tomate.selecionado && ( <Badge className="bg-green-50 text-green-700" > Tomate {tomate.quantidade}g <button className="cursor-pointer" onClick={removerTomate} ><X size={12}/></button> </Badge> )}
          {queijo.selecionado && ( <Badge className="bg-green-50 text-green-700" > Queijo {queijo.quantidade}g <button className="cursor-pointer" onClick={removerQueijo} ><X size={12}/></button> </Badge> )}
          {alface.selecionado && ( <Badge className="bg-green-50 text-green-700" > Alface {alface.quantidade}g <button className="cursor-pointer" onClick={removerAlface} ><X size={12}/></button> </Badge> )}
          {beterraba.selecionado && ( <Badge className="bg-green-50 text-green-700" > Beterraba {beterraba.quantidade}g <button className="cursor-pointer" onClick={removerBeterraba} ><X size={12}/></button> </Badge> )}
          
        </div>

        <div className="flex gap-2 pt-4">
          <Button onClick={adicionarMarmita}>Criar marmita</Button>
          <Button onClick={resetarMarmita} variant="outline" > Remover tudo </Button>
        </div>
      </Card>

    </section>
  );
}