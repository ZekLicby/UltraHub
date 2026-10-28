export interface NotificationItem {
  id: string
  title: string
  description: string
  time: string
  read: boolean
}

export const mockNotifications: NotificationItem[] = [
  { id: '1', title: 'Revisão pendente', description: 'Você tem 12 cartões de japonês para revisar hoje.', time: 'há 5 min', read: false },
  { id: '2', title: 'Nova sequência', description: 'Parabéns! 7 dias seguidos estudando.', time: 'há 1 h', read: false },
  { id: '3', title: 'Módulo atualizado', description: 'Novas questões de React foram adicionadas.', time: 'há 3 h', read: false },
  { id: '4', title: 'Meta semanal', description: 'Você completou 80% da meta desta semana.', time: 'ontem', read: true },
  { id: '5', title: 'Lembrete', description: 'Que tal uma sessão rápida de TypeScript?', time: 'ontem', read: true },
  { id: '6', title: 'Resultado do quiz', description: 'Você acertou 9 de 10 no último quiz.', time: 'há 2 dias', read: true },
  { id: '7', title: 'Bem-vindo', description: 'Seu perfil foi criado. Explore os módulos na barra lateral.', time: 'há 3 dias', read: true },
]
