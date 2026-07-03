export interface Ingrediente {
  Nome: string;
  Categoria: string;
  Preço: string;
}

export interface Marmita {
  id: number;
  Data: Date;
  Preço: string;
  Item: Ingrediente[];
}

export interface WeeklyPlan {
  Plan: Marmita[];
}

// export enum CategoriasMarmitasEnum {
//   CARBOIDRATO = -1,
//   PROTEINA = 0,
//   ACOMPANHAMENTO = 1,
// }
