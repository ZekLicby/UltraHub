export interface Heuristic {
  icon: string
  name: string
  description: string
}

export type HeuristicId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const HEURISTICS: Record<HeuristicId, Heuristic> = {
  1:  { icon: "🔄", name: "Visibilidade do status do sistema",
        description: "O sistema deve sempre manter o usuário informado sobre o que está acontecendo, com feedback adequado e em tempo razoável." },
  2:  { icon: "🗣️", name: "Correspondência entre o sistema e o mundo real",
        description: "O sistema deve falar a língua do usuário, com palavras, frases e conceitos familiares, e não termos técnicos internos." },
  3:  { icon: "🚪", name: "Controle e liberdade do usuário",
        description: "Usuários erram e precisam de uma 'saída de emergência' clara para sair de um estado indesejado, sem processos longos." },
  4:  { icon: "🧱", name: "Consistência e padrões",
        description: "O usuário não deve precisar se perguntar se palavras, ícones ou ações diferentes significam a mesma coisa." },
  5:  { icon: "🛡️", name: "Prevenção de erros",
        description: "Melhor que uma boa mensagem de erro é um design que evita que o problema aconteça." },
  6:  { icon: "👁️", name: "Reconhecimento em vez de memorização",
        description: "Minimize a carga de memória do usuário deixando objetos, ações e opções visíveis, em vez de exigir que ele lembre." },
  7:  { icon: "⚡", name: "Flexibilidade e eficiência de uso",
        description: "Aceleradores invisíveis para o iniciante podem tornar a interação mais rápida para o usuário experiente." },
  8:  { icon: "🧹", name: "Estética e design minimalista",
        description: "As telas não devem conter informação irrelevante ou raramente necessária, que compita com o que importa." },
  9:  { icon: "🩹", name: "Ajudar o usuário a reconhecer, diagnosticar e se recuperar de erros",
        description: "Mensagens de erro devem ser claras, indicar exatamente o problema e sugerir uma solução construtiva." },
  10: { icon: "📚", name: "Ajuda e documentação",
        description: "Mesmo que o ideal seja um sistema usável sem manual, quando necessário a ajuda deve ser fácil de buscar e objetiva." },
}

export const HEURISTIC_IDS = Object.keys(HEURISTICS).map(Number) as HeuristicId[]
