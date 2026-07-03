"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function FormularioData() {

  const [data, setData] = useState(undefined)

  return (
    <div className="w-[300px]">

      <Popover>

        <PopoverTrigger asChild>
          <Button variant="outline">
            {data
              ? format(data, "dd/MM/yyyy")
              : "Escolha o dia da marmita"
            }
          </Button>
        </PopoverTrigger>


        <PopoverContent>

          <Calendar
            mode="single"
            selected={data}
            onSelect={setData}

            disabled={(date) =>
              date.getDay() === 0 ||
              date.getDay() === 6
            }

            locale={ptBR}
          />

        </PopoverContent>

      </Popover>

    </div>
  )
}