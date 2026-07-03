import { ingredientes } from '@/modules/Marmitas/data/Ingredientes';
import { create } from 'zustand';

type DiaSemana = 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta';
type Categoria = 'Carboidrato' | 'Proteina' | 'Acompanhamento';

type Ingredient = {
  selecionado: boolean;
  categoria: Categoria;
  quantidade: string;
  calorias: number;
  preco: string;
};

type Marmita = {
  diaSemana: DiaSemana | '';
  carne: Ingredient;
  frango: Ingredient;
  ovo: Ingredient;
  milho: Ingredient;
  batata: Ingredient;
  pao: Ingredient;
  feijao: Ingredient;
  arroz: Ingredient;
  tomate: Ingredient;
  queijo: Ingredient;
  alface: Ingredient;
  beterraba: Ingredient;
  caloriasTotais: number;
  precoTotal: number;
};

type MarmitaStore = {
  orcamento: number;
  definirOrcamento: (valor: number) => void;

  diaSemana: DiaSemana | '';
  adicionarDiaSemana: (dia: DiaSemana) => void;

  carne: Ingredient;
  adicionarCarne: (quantidade: string) => void;
  removerCarne: () => void;

  frango: Ingredient;
  adicionarFrango: (quantidade: string) => void;
  removerFrango: () => void;

  ovo: Ingredient;
  adicionarOvo: (quantidade: string) => void;
  removerOvo: () => void;

  milho: Ingredient;
  adicionarMilho: (quantidade: string) => void;
  removerMilho: () => void;

  batata: Ingredient;
  adicionarBatata: (quantidade: string) => void;
  removerBatata: () => void;

  pao: Ingredient;
  adicionarPao: (quantidade: string) => void;
  removerPao: () => void;

  feijao: Ingredient;
  adicionarFeijao: (quantidade: string) => void;
  removerFeijao: () => void;

  arroz: Ingredient;
  adicionarArroz: (quantidade: string) => void;
  removerArroz: () => void;

  tomate: Ingredient;
  adicionarTomate: (quantidade: string) => void;
  removerTomate: () => void;

  queijo: Ingredient;
  adicionarQueijo: (quantidade: string) => void;
  removerQueijo: () => void;

  alface: Ingredient;
  adicionarAlface: (quantidade: string) => void;
  removerAlface: () => void;

  beterraba: Ingredient;
  adicionarBeterraba: (quantidade: string) => void;
  removerBeterraba: () => void;

  marmitas: Marmita[];
  adicionarMarmita: () => void;
  deletarMarmita: (dia: DiaSemana) => void;

  resetarMarmita: () => void;
  getTotalGastoSemana: () => void;
  getTotalCaloriasSemana: () => void;
  copiarMarmita: (origem: DiaSemana, destino: DiaSemana) => void;
};

export const useMarmitaStore = create<MarmitaStore>((set, get) => ({
  orcamento: 0,
  marmitas: [],

  definirOrcamento: (valor) => set(() => ({ orcamento: valor })),

  diaSemana: '',
  adicionarDiaSemana: (dia) => set({ diaSemana: dia }),

  carne: {
    calorias: 0,
    preco: '',
    categoria: 'Proteina',
    quantidade: '',
    selecionado: false,
  },
  adicionarCarne: (quantidade) => {
    set({
      carne: {
        calorias: Number(quantidade) * ingredientes.carne.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.carne.precoPorGrama).toFixed(2),
        categoria: 'Proteina',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerCarne: () => {
    set({
      carne: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  frango: {
    calorias: 0,
    preco: '',
    categoria: 'Proteina',
    quantidade: '',
    selecionado: false,
  },
  adicionarFrango: (quantidade) => {
    set({
      frango: {
        calorias: Number(quantidade) * ingredientes.frango.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.frango.precoPorGrama).toFixed(2),
        categoria: 'Proteina',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerFrango() {
    set({
      frango: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  ovo: {
    calorias: 0,
    preco: '',
    categoria: 'Proteina',
    quantidade: '',
    selecionado: false,
  },
  adicionarOvo: (quantidade) => {
    set({
      ovo: {
        calorias: Number(quantidade) * ingredientes.ovo.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.ovo.precoPorGrama).toFixed(2),
        categoria: 'Proteina',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerOvo: () => {
    set({
      ovo: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  milho: {
    calorias: 0,
    preco: '',
    categoria: 'Carboidrato',
    quantidade: '',
    selecionado: false,
  },
  adicionarMilho: (quantidade) => {
    set({
      milho: {
        calorias: Number(quantidade) * ingredientes.milho.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.milho.precoPorGrama).toFixed(2),
        categoria: 'Carboidrato',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerMilho: () => {
    set({
      milho: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  batata: {
    calorias: 0,
    preco: '',
    categoria: 'Carboidrato',
    quantidade: '',
    selecionado: false,
  },
  adicionarBatata(quantidade) {
    set({
      batata: {
        calorias: Number(quantidade) * ingredientes.batata.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.batata.precoPorGrama).toFixed(2),
        categoria: 'Carboidrato',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerBatata: () => {
    set({
      batata: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  pao: {
    calorias: 0,
    preco: '',
    categoria: 'Carboidrato',
    quantidade: '',
    selecionado: false,
  },
  adicionarPao(quantidade) {
    set({
      pao: {
        calorias: Number(quantidade) * ingredientes.pao.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.pao.precoPorGrama).toFixed(2),
        categoria: 'Carboidrato',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerPao: () => {
    set({
      pao: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  feijao: {
    calorias: 0,
    preco: '',
    categoria: 'Carboidrato',
    quantidade: '',
    selecionado: false,
  },
  adicionarFeijao(quantidade) {
    set({
      feijao: {
        calorias: Number(quantidade) * ingredientes.feijao.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.feijao.precoPorGrama).toFixed(2),
        categoria: 'Carboidrato',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerFeijao: () => {
    set({
      feijao: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  arroz: {
    calorias: 0,
    preco: '',
    categoria: 'Carboidrato',
    quantidade: '',
    selecionado: false,
  },
  adicionarArroz(quantidade) {
    set({
      arroz: {
        calorias: Number(quantidade) * ingredientes.arroz.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.arroz.precoPorGrama).toFixed(2),
        categoria: 'Carboidrato',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerArroz: () => {
    set({
      arroz: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  tomate: {
    calorias: 0,
    preco: '',
    categoria: 'Acompanhamento',
    quantidade: '',
    selecionado: false,
  },
  adicionarTomate(quantidade) {
    set({
      tomate: {
        calorias: Number(quantidade) * ingredientes.tomate.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.tomate.precoPorGrama).toFixed(2),
        categoria: 'Acompanhamento',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerTomate: () => {
    set({
      tomate: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  queijo: {
    calorias: 0,
    preco: '',
    categoria: 'Acompanhamento',
    quantidade: '',
    selecionado: false,
  },
  adicionarQueijo(quantidade) {
    set({
      queijo: {
        calorias: Number(quantidade) * ingredientes.queijo.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.queijo.precoPorGrama).toFixed(2),
        categoria: 'Acompanhamento',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerQueijo: () => {
    set({
      queijo: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  alface: {
    calorias: 0,
    preco: '',
    categoria: 'Acompanhamento',
    quantidade: '',
    selecionado: false,
  },
  adicionarAlface(quantidade) {
    set({
      alface: {
        calorias: Number(quantidade) * ingredientes.alface.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.alface.precoPorGrama).toFixed(2),
        categoria: 'Acompanhamento',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerAlface: () => {
    set({
      alface: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  beterraba: {
    calorias: 0,
    preco: '',
    categoria: 'Acompanhamento',
    quantidade: '',
    selecionado: false,
  },
  adicionarBeterraba(quantidade) {
    set({
      beterraba: {
        calorias: Number(quantidade) * ingredientes.beterraba.caloriasPorGrama,
        preco: (Number(quantidade) * ingredientes.beterraba.precoPorGrama).toFixed(2),
        categoria: 'Acompanhamento',
        quantidade: quantidade,
        selecionado: true,
      },
    });
  },
  removerBeterraba: () => {
    set({
      beterraba: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  getTotalGastoSemana: () => {
    const { marmitas } = get();
    return marmitas.reduce((soma, marmitas) => soma + marmitas.precoTotal, 0).toFixed(2);
  },

  getTotalCaloriasSemana: () => {
    const { marmitas } = get();
    return marmitas.reduce((soma, marmitas) => soma + marmitas.caloriasTotais, 0);
  },

  adicionarMarmita: () => {
    const {
      diaSemana,
      carne,
      frango,
      ovo,
      milho,
      batata,
      pao,
      arroz,
      feijao,
      marmitas,
      tomate,
      queijo,
      alface,
      beterraba,
    } = get();
    if (!diaSemana) {
      return alert('selecione um dia da semana');
    }
    const validacao = marmitas.some((marmita) => marmita.diaSemana === diaSemana);
    if (validacao) {
      return;
    }

    const precoTotal =
      Number(carne.preco) +
      Number(frango.preco) +
      Number(ovo.preco) +
      Number(milho.preco) +
      Number(batata.preco) +
      Number(pao.preco) +
      Number(arroz.preco) +
      Number(feijao.preco) +
      Number(tomate.preco) +
      Number(queijo.preco) +
      Number(alface.preco) +
      Number(beterraba.preco);

    const state = get();

    const totalAtual = state.marmitas.reduce((acc, m) => acc + m.precoTotal, 0);

    const orcamento = state.orcamento;

    if (orcamento > 0 && totalAtual + precoTotal > orcamento) {
      return alert('Orçamento estourado!');
    }

    alert(`Marmita de ${diaSemana} criada`);

    const caloriasTotais =
      carne.calorias +
      frango.calorias +
      ovo.calorias +
      milho.calorias +
      batata.calorias +
      pao.calorias +
      arroz.calorias +
      feijao.calorias +
      tomate.calorias +
      queijo.calorias +
      alface.calorias +
      beterraba.calorias;

    set((state) => ({
      marmitas: [
        ...state.marmitas,
        {
          ingredientes: [],
          caloriasTotais,
          precoTotal,
          diaSemana,
          carne,
          frango,
          ovo,
          milho,
          batata,
          pao,
          arroz,
          feijao,
          tomate,
          alface,
          beterraba,
          queijo,
        },
      ],
    }));
  },

  deletarMarmita(dia) {
    set((state) => ({
      marmitas: state.marmitas.filter((m) => m.diaSemana !== dia),
    }));
  },

  resetarMarmita: () => {
    set({
      diaSemana: '',

      carne: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },

      frango: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },

      ovo: {
        calorias: 0,
        preco: '',
        categoria: 'Proteina',
        quantidade: '',
        selecionado: false,
      },

      milho: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },

      batata: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },

      pao: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },

      feijao: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },

      arroz: {
        calorias: 0,
        preco: '',
        categoria: 'Carboidrato',
        quantidade: '',
        selecionado: false,
      },

      tomate: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },

      queijo: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },

      alface: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },

      beterraba: {
        calorias: 0,
        preco: '',
        categoria: 'Acompanhamento',
        quantidade: '',
        selecionado: false,
      },
    });
  },

  copiarMarmita: (origem, destino) => {
    const { marmitas } = get();

    const marmitaOrigem = marmitas.find((m) => m.diaSemana === origem);

    if (!marmitaOrigem) return;

    set({
      marmitas: [
        ...marmitas.filter((m) => m.diaSemana !== destino),
        {
          ...marmitaOrigem,
          diaSemana: destino,
        },
      ],
    });
  },
}));
