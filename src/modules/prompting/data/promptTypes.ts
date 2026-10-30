export type PromptTypeId =
  | 'zero-shot'
  | 'one-shot'
  | 'few-shot'
  | 'chain-of-thought'
  | 'self-consistency'
  | 'tree-of-thoughts'
  | 'generated-knowledge'
  | 'step-back'
  | 'socratic'
  | 'role'
  | 'contextual'
  | 'instruction'
  | 'constraint-based'
  | 'negative'
  | 'output-formatting'
  | 'decomposition'
  | 'react'
  | 'iterative'
  | 'meta'
  | 'rag'

export interface PromptType {
  id: PromptTypeId
  name: string
  description: string
}

export const PROMPT_TYPES: PromptType[] = [
  { id: 'zero-shot', name: 'Zero-shot', description: 'Executa sem exemplos prévios.' },
  { id: 'one-shot', name: 'One-shot', description: 'Utiliza um exemplo como referência.' },
  { id: 'few-shot', name: 'Few-shot', description: 'Utiliza vários exemplos para demonstrar um padrão.' },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought (CoT)',
    description: 'Divide um problema em etapas de análise.',
  },
  { id: 'self-consistency', name: 'Self-consistency', description: 'Compara diferentes caminhos de resolução.' },
  {
    id: 'tree-of-thoughts',
    name: 'Tree of Thoughts (ToT)',
    description: 'Explora ramificações de possibilidades antes de escolher uma.',
  },
  {
    id: 'generated-knowledge',
    name: 'Generated Knowledge',
    description: 'Produz informações intermediárias antes de resolver.',
  },
  {
    id: 'step-back',
    name: 'Step-back prompting',
    description: 'Analisa primeiro o conceito geral por trás do problema.',
  },
  { id: 'socratic', name: 'Socratic prompting', description: 'Utiliza perguntas para desenvolver o entendimento.' },
  { id: 'role', name: 'Role prompting', description: 'Define a especialidade do modelo.' },
  { id: 'contextual', name: 'Contextual prompting', description: 'Fornece contexto sobre o ambiente.' },
  { id: 'instruction', name: 'Instruction prompting', description: 'Define o que deve ser executado.' },
  { id: 'constraint-based', name: 'Constraint-based prompting', description: 'Define limitações obrigatórias.' },
  { id: 'negative', name: 'Negative prompting', description: 'Especifica o que não deve acontecer.' },
  { id: 'output-formatting', name: 'Output formatting', description: 'Determina a estrutura da resposta.' },
  {
    id: 'decomposition',
    name: 'Decomposition prompting',
    description: 'Divide uma tarefa em partes menores.',
  },
  {
    id: 'react',
    name: 'ReAct (Reason + Act)',
    description: 'Combina análise com execução de ações.',
  },
  { id: 'iterative', name: 'Iterative prompting', description: 'Refina o resultado progressivamente.' },
  { id: 'meta', name: 'Meta prompting', description: 'Utiliza o modelo para criar ou melhorar prompts.' },
  {
    id: 'rag',
    name: 'Retrieval-Augmented Generation (RAG)',
    description: 'Recupera informações externas para fundamentar respostas.',
  },
]

export const getPromptType = (id: PromptTypeId): PromptType =>
  PROMPT_TYPES.find((type) => type.id === id) ?? PROMPT_TYPES[0]
