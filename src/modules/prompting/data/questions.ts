import type { PromptTypeId } from './promptTypes'

export type QuestionFormat = 'example' | 'description'

export interface PromptQuestion {
  id: string
  format: QuestionFormat
  answer: PromptTypeId
  distractors: readonly [PromptTypeId, PromptTypeId, PromptTypeId]
  code?: string
  question: string
  explanation: string
  hint: string
}

const WHICH_PROMPT = 'Qual tipo de prompt é este?'
const WHICH_FLOW = 'Qual tipo de prompt este fluxo representa?'

export const QUESTIONS: PromptQuestion[] = [
  {
    id: 'zero-shot-example',
    format: 'example',
    answer: 'zero-shot',
    distractors: ['one-shot', 'few-shot', 'role'],
    code: `Crie uma função JavaScript que valide um e-mail.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt pede a tarefa diretamente, sem nenhum exemplo de entrada e saída. Isso é Zero-shot. Com um exemplo seria One-shot, e com vários exemplos seria Few-shot.',
    hint: 'Procure no prompt por exemplos de como a resposta deve ser. Eles existem?',
  },
  {
    id: 'zero-shot-description',
    format: 'description',
    answer: 'zero-shot',
    distractors: ['one-shot', 'few-shot', 'contextual'],
    question:
      'Você pede uma tarefa direto ao modelo, sem mostrar nenhum exemplo de como a resposta deve ser. Que tipo de prompt é esse?',
    explanation:
      'Zero-shot executa a tarefa sem exemplos prévios. One-shot e Few-shot são parecidos, mas incluem um ou vários exemplos no prompt.',
    hint: 'O nome indica quantos exemplos são entregues ao modelo.',
  },
  {
    id: 'one-shot-example',
    format: 'example',
    answer: 'one-shot',
    distractors: ['zero-shot', 'few-shot', 'instruction'],
    code: `Exemplo:
Input: "carlos"
Output: "Olá, carlos!"

Agora crie uma função que receba um nome e retorne uma saudação.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt traz um único exemplo de entrada e saída como referência. Isso é One-shot. Sem exemplo seria Zero-shot, e com vários seria Few-shot.',
    hint: 'Conte quantos exemplos de entrada e saída aparecem antes do pedido.',
  },
  {
    id: 'one-shot-description',
    format: 'description',
    answer: 'one-shot',
    distractors: ['zero-shot', 'few-shot', 'iterative'],
    question:
      'Você mostra ao modelo um único exemplo de entrada e saída para que ele o siga como referência. Que tipo de prompt é esse?',
    explanation:
      'One-shot usa um exemplo como referência. Com mais de um exemplo, o modelo teria um padrão para descobrir, o que caracteriza Few-shot.',
    hint: 'A quantidade de exemplos é exatamente um.',
  },
  {
    id: 'few-shot-example',
    format: 'example',
    answer: 'few-shot',
    distractors: ['one-shot', 'zero-shot', 'chain-of-thought'],
    code: `Input: 2 → Output: 4
Input: 3 → Output: 9
Input: 4 → Output: 16

Input: 5 → Output: ?`,
    question: WHICH_PROMPT,
    explanation:
      'Vários exemplos mostram um padrão (elevar ao quadrado) e o modelo o aplica a um novo caso. Isso é Few-shot. Chain-of-Thought pediria etapas de raciocínio, e não exemplos.',
    hint: 'O modelo precisa descobrir uma regra a partir de vários exemplos.',
  },
  {
    id: 'few-shot-description',
    format: 'description',
    answer: 'few-shot',
    distractors: ['one-shot', 'zero-shot', 'iterative'],
    question:
      'Você mostra ao modelo vários exemplos de entrada e saída para que ele descubra o padrão e o aplique a um caso novo. Que tipo de prompt é esse?',
    explanation:
      'Few-shot usa vários exemplos para demonstrar um padrão. Com um exemplo só seria One-shot, e sem exemplos seria Zero-shot.',
    hint: 'Mais de um exemplo é entregue para o modelo generalizar.',
  },
  {
    id: 'chain-of-thought-example',
    format: 'example',
    answer: 'chain-of-thought',
    distractors: ['decomposition', 'step-back', 'generated-knowledge'],
    code: `Analise o problema pensando passo a passo e mostre seu raciocínio em cada etapa:
1. Identifique a causa.
2. Avalie possíveis soluções.
3. Escolha a mais adequada.
4. Apresente a conclusão.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt guia o raciocínio em etapas de análise dentro de uma mesma resposta. Isso é Chain-of-Thought. Decomposition divide a tarefa em partes menores resolvidas separadamente, Step-back parte de um conceito geral e Generated Knowledge produz informações antes de resolver.',
    hint: 'O foco está em como o modelo deve raciocinar até a resposta, e não em dividir o trabalho em entregas.',
  },
  {
    id: 'chain-of-thought-description',
    format: 'description',
    answer: 'chain-of-thought',
    distractors: ['decomposition', 'self-consistency', 'step-back'],
    question:
      'Você quer que o modelo mostre o raciocínio em etapas de análise até chegar à resposta, em vez de dar só o resultado. Que tipo de prompt é esse?',
    explanation:
      'Chain-of-Thought divide o problema em etapas de análise. Self-consistency compara vários caminhos independentes, e Decomposition separa a tarefa em partes menores.',
    hint: 'O que importa é o encadeamento do raciocínio, passo após passo.',
  },
  {
    id: 'self-consistency-example',
    format: 'example',
    answer: 'self-consistency',
    distractors: ['tree-of-thoughts', 'chain-of-thought', 'decomposition'],
    code: `                Problema
                    ↓
┌───────────┐ ┌───────────┐ ┌───────────┐
│ Caminho A │ │ Caminho B │ │ Caminho C │
│ Solução A │ │ Solução B │ │ Solução C │
└───────────┘ └───────────┘ └───────────┘
                    ↓
    Comparação e seleção da resposta`,
    question: WHICH_FLOW,
    explanation:
      'Vários caminhos independentes resolvem o mesmo problema e as soluções são comparadas no fim para escolher a resposta. Isso é Self-consistency. Tree of Thoughts também ramifica, mas explora alternativas dentro de cada abordagem antes de avaliar.',
    hint: 'Cada caminho chega a uma solução completa. O que acontece com elas no final?',
  },
  {
    id: 'self-consistency-description',
    format: 'description',
    answer: 'self-consistency',
    distractors: ['tree-of-thoughts', 'iterative', 'chain-of-thought'],
    question:
      'Você pede ao modelo que resolva o mesmo problema por diferentes caminhos e compare os resultados para escolher a resposta mais confiável. Que tipo de prompt é esse?',
    explanation:
      'Self-consistency compara diferentes caminhos de resolução. Iterative refina uma mesma resposta aos poucos, e Chain-of-Thought segue um único caminho de raciocínio.',
    hint: 'A confiança vem da comparação entre respostas independentes.',
  },
  {
    id: 'tree-of-thoughts-example',
    format: 'example',
    answer: 'tree-of-thoughts',
    distractors: ['self-consistency', 'decomposition', 'chain-of-thought'],
    code: `                     Problema
                        ↓
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Abordagem A  │ │ Abordagem B  │ │ Abordagem C  │
│      ↓       │ │      ↓       │ │      ↓       │
│ Alternativas │ │ Alternativas │ │ Alternativas │
└──────────────┘ └──────────────┘ └──────────────┘
                        ↓
               Avaliação e escolha`,
    question: WHICH_FLOW,
    explanation:
      'O problema se ramifica em abordagens, cada uma com suas alternativas, e só depois há avaliação e escolha. Isso é Tree of Thoughts. Em Self-consistency os caminhos são independentes e não se desdobram em novas alternativas.',
    hint: 'Observe que cada ramo ainda se desdobra em novas possibilidades antes da escolha.',
  },
  {
    id: 'tree-of-thoughts-description',
    format: 'description',
    answer: 'tree-of-thoughts',
    distractors: ['self-consistency', 'decomposition', 'chain-of-thought'],
    question:
      'Você pede ao modelo que explore várias ramificações de possibilidades, avaliando alternativas em cada uma, antes de escolher uma. Que tipo de prompt é esse?',
    explanation:
      'Tree of Thoughts explora ramificações de possibilidades antes de escolher. Decomposition divide a tarefa em partes, e não em alternativas para a mesma questão.',
    hint: 'Pense em uma árvore: os ramos se abrem e só depois se escolhe um.',
  },
  {
    id: 'generated-knowledge-example',
    format: 'example',
    answer: 'generated-knowledge',
    distractors: ['step-back', 'chain-of-thought', 'contextual'],
    code: `Pergunta: por que este componente React renderiza duas vezes?

Antes de responder:
1. Gere os fatos que você conhece sobre renderização no React.
2. Liste o que é relevante para esta pergunta.
3. Use esses fatos para montar a resposta final.`,
    question: WHICH_PROMPT,
    explanation:
      'O próprio modelo produz informações intermediárias (fatos) antes de resolver. Isso é Generated Knowledge. Em Contextual prompting, quem fornece o contexto é você, e Step-back parte de um princípio geral por trás do problema.',
    hint: 'A informação usada na resposta é gerada pelo modelo antes de resolver.',
  },
  {
    id: 'generated-knowledge-description',
    format: 'description',
    answer: 'generated-knowledge',
    distractors: ['step-back', 'contextual', 'rag'],
    question:
      'Você pede ao modelo que primeiro produza as informações relevantes sobre o tema e só depois use esse material para resolver o problema. Que tipo de prompt é esse?',
    explanation:
      'Generated Knowledge produz informações intermediárias antes de resolver. Em RAG as informações vêm de uma fonte externa, e em Contextual prompting você mesmo as fornece.',
    hint: 'De onde vêm as informações? Do próprio modelo, antes de resolver.',
  },
  {
    id: 'step-back-example',
    format: 'example',
    answer: 'step-back',
    distractors: ['generated-knowledge', 'chain-of-thought', 'decomposition'],
    code: `Antes de corrigir este bug de ordem de execução, entenda o princípio geral:
1. Explique como funciona o Event Loop.
2. Identifique os conceitos relacionados.
3. Só então aplique-os à análise do código.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt parte do conceito geral (Event Loop) antes de olhar o caso específico. Isso é Step-back prompting. Generated Knowledge produz fatos sobre o próprio problema, e Chain-of-Thought guia as etapas do raciocínio sobre ele.',
    hint: 'O prompt abre o assunto pelo conceito mais amplo, e só depois chega ao problema.',
  },
  {
    id: 'step-back-description',
    format: 'description',
    answer: 'step-back',
    distractors: ['generated-knowledge', 'decomposition', 'contextual'],
    question:
      'Antes de atacar o problema específico, você pede ao modelo que analise o conceito geral por trás dele. Que tipo de prompt é esse?',
    explanation:
      'Step-back analisa primeiro o conceito geral por trás do problema. Decomposition divide o problema em partes, mas não sobe para o conceito mais amplo.',
    hint: 'Primeiro se olha o quadro geral, depois o detalhe.',
  },
  {
    id: 'socratic-example',
    format: 'example',
    answer: 'socratic',
    distractors: ['negative', 'instruction', 'iterative'],
    code: `Não me dê a resposta diretamente.
Faça uma pergunta por vez para me ajudar a encontrar a solução.`,
    question: WHICH_PROMPT,
    explanation:
      'O modelo conduz com perguntas para desenvolver o seu entendimento. Isso é Socratic prompting. Há uma proibição ("não me dê a resposta"), mas o objetivo do prompt é guiar por perguntas, e não listar o que evitar como em Negative prompting.',
    hint: 'O modelo faz as perguntas, e não você.',
  },
  {
    id: 'socratic-description',
    format: 'description',
    answer: 'socratic',
    distractors: ['iterative', 'negative', 'role'],
    question:
      'Em vez de entregar a resposta, o modelo faz perguntas, uma por vez, para desenvolver o seu entendimento. Que tipo de prompt é esse?',
    explanation:
      'Socratic prompting usa perguntas para desenvolver o entendimento. Iterative também tem vários turnos, mas serve para refinar um resultado.',
    hint: 'O aprendizado acontece pelas perguntas, como no método de um filósofo grego.',
  },
  {
    id: 'role-example',
    format: 'example',
    answer: 'role',
    distractors: ['contextual', 'instruction', 'meta'],
    code: `Atue como um engenheiro de software sênior especializado em React e TypeScript.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt define a especialidade que o modelo deve assumir. Isso é Role prompting. Contextual prompting descreve o ambiente da tarefa, e não quem o modelo deve ser.',
    hint: 'O prompt define quem o modelo deve ser, e não o que fazer.',
  },
  {
    id: 'role-description',
    format: 'description',
    answer: 'role',
    distractors: ['contextual', 'instruction', 'constraint-based'],
    question:
      'Você define a especialidade ou a persona que o modelo deve assumir ao responder. Que tipo de prompt é esse?',
    explanation:
      'Role prompting define a especialidade do modelo. Instruction prompting define o que executar, e Contextual prompting define o ambiente.',
    hint: 'Pense em atribuir um papel ou cargo ao modelo.',
  },
  {
    id: 'contextual-example',
    format: 'example',
    answer: 'contextual',
    distractors: ['role', 'instruction', 'constraint-based'],
    code: `Contexto:
- React 19
- TypeScript
- Vite
- Zustand
- SCSS Modules

Analise a implementação considerando essas tecnologias.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt fornece o ambiente em que a tarefa acontece. Isso é Contextual prompting. Constraint-based impõe limites obrigatórios, e aqui as tecnologias só descrevem o cenário.',
    hint: 'A lista descreve o cenário do projeto, e não regras a seguir.',
  },
  {
    id: 'contextual-description',
    format: 'description',
    answer: 'contextual',
    distractors: ['role', 'generated-knowledge', 'rag'],
    question:
      'Você informa ao modelo o ambiente e as tecnologias do projeto para que ele responda de acordo com essa situação. Que tipo de prompt é esse?',
    explanation:
      'Contextual prompting fornece contexto sobre o ambiente. Em RAG o contexto é recuperado automaticamente de uma fonte externa, e em Generated Knowledge ele é produzido pelo modelo.',
    hint: 'Quem escreve o contexto no prompt é você.',
  },
  {
    id: 'instruction-example',
    format: 'example',
    answer: 'instruction',
    distractors: ['constraint-based', 'output-formatting', 'decomposition'],
    code: `Implemente um formulário de cadastro.

Instruções:
- Utilize React Hook Form.
- Valide os campos.
- Exiba mensagens de erro.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt define, de forma afirmativa, o que deve ser executado. Isso é Instruction prompting. Constraint-based define limites e condições, e Output formatting define a estrutura da resposta.',
    hint: 'A lista diz o que fazer, e não o que evitar nem o formato final.',
  },
  {
    id: 'instruction-description',
    format: 'description',
    answer: 'instruction',
    distractors: ['decomposition', 'constraint-based', 'contextual'],
    question:
      'Você descreve com clareza o que o modelo deve executar, listando as ações que ele precisa realizar. Que tipo de prompt é esse?',
    explanation:
      'Instruction prompting define o que deve ser executado. Decomposition quebra uma tarefa grande em partes menores, e Constraint-based impõe limites.',
    hint: 'O prompt é uma lista de coisas a fazer.',
  },
  {
    id: 'constraint-based-example',
    format: 'example',
    answer: 'constraint-based',
    distractors: ['negative', 'instruction', 'output-formatting'],
    code: `Restrições obrigatórias:
- Máximo de 50 linhas de código.
- Preservar a arquitetura atual.
- Manter compatibilidade com React 19.
- Responder em, no máximo, 3 parágrafos.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt estabelece limites e condições que a resposta precisa respeitar (tamanho, escopo, compatibilidade). Isso é Constraint-based prompting. Negative prompting é uma lista do que não fazer, e Instruction prompting diz o que fazer.',
    hint: 'Os itens impõem limites de tamanho, escopo e compatibilidade.',
  },
  {
    id: 'constraint-based-description',
    format: 'description',
    answer: 'constraint-based',
    distractors: ['negative', 'output-formatting', 'contextual'],
    question:
      'Você define limites e condições obrigatórias que a resposta deve respeitar, como tamanho, escopo ou compatibilidade. Que tipo de prompt é esse?',
    explanation:
      'Constraint-based prompting define limitações obrigatórias. Negative prompting apenas lista o que evitar, e Output formatting define a estrutura da resposta.',
    hint: 'São regras que limitam o espaço de respostas aceitáveis.',
  },
  {
    id: 'negative-example',
    format: 'example',
    answer: 'negative',
    distractors: ['constraint-based', 'instruction', 'role'],
    code: `Não utilize:
- any no TypeScript.
- Bibliotecas externas.
- Componentes desnecessários.`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt é uma lista do que não deve acontecer. Isso é Negative prompting. Constraint-based define limites e condições obrigatórias, como tamanho ou escopo.',
    hint: 'Todos os itens dizem o que deve ser evitado.',
  },
  {
    id: 'negative-description',
    format: 'description',
    answer: 'negative',
    distractors: ['constraint-based', 'instruction', 'output-formatting'],
    question: 'Você especifica ao modelo o que ele não deve fazer ou incluir na resposta. Que tipo de prompt é esse?',
    explanation:
      'Negative prompting especifica o que não deve acontecer. Instruction prompting diz o que fazer, e Constraint-based impõe limites e condições obrigatórias.',
    hint: 'O prompt é feito de proibições.',
  },
  {
    id: 'output-formatting-example',
    format: 'example',
    answer: 'output-formatting',
    distractors: ['one-shot', 'constraint-based', 'instruction'],
    code: `Retorne exclusivamente neste formato:

{
  "name": "string",
  "valid": true,
  "errors": []
}`,
    question: WHICH_PROMPT,
    explanation:
      'O prompt determina a estrutura exata da resposta. Isso é Output formatting. One-shot mostraria um exemplo de entrada e saída para o modelo imitar, e não só o formato final.',
    hint: 'O prompt não pede uma tarefa nova, define como a resposta deve vir.',
  },
  {
    id: 'output-formatting-description',
    format: 'description',
    answer: 'output-formatting',
    distractors: ['constraint-based', 'one-shot', 'instruction'],
    question:
      'Você determina a estrutura exata em que a resposta deve ser entregue, como um JSON com campos definidos. Que tipo de prompt é esse?',
    explanation:
      'Output formatting determina a estrutura da resposta. Constraint-based limita o conteúdo ou o escopo, e Instruction prompting define o que executar.',
    hint: 'O foco está na forma da resposta, e não no conteúdo.',
  },
  {
    id: 'decomposition-example',
    format: 'example',
    answer: 'decomposition',
    distractors: ['chain-of-thought', 'iterative', 'step-back'],
    code: `Tarefa: criar um sistema de autenticação.

Divida em subtarefas menores e resolva cada uma separadamente:
├── Login
├── Cadastro
├── Recuperação de senha
├── Gerenciamento de sessão
└── Logout`,
    question: WHICH_PROMPT,
    explanation:
      'Uma tarefa grande é dividida em partes menores, resolvidas uma a uma. Isso é Decomposition prompting. Chain-of-Thought guia as etapas do raciocínio, e Iterative refina um mesmo resultado em vários prompts.',
    hint: 'A tarefa grande é quebrada em partes menores e independentes.',
  },
  {
    id: 'decomposition-description',
    format: 'description',
    answer: 'decomposition',
    distractors: ['chain-of-thought', 'iterative', 'tree-of-thoughts'],
    question:
      'Uma tarefa grande é dividida em partes menores, e o modelo resolve cada parte separadamente. Que tipo de prompt é esse?',
    explanation:
      'Decomposition prompting divide uma tarefa em partes menores. Tree of Thoughts explora alternativas para a mesma questão, e não partes diferentes de uma tarefa.',
    hint: 'O trabalho é fatiado em pedaços menores.',
  },
  {
    id: 'react-example',
    format: 'example',
    answer: 'react',
    distractors: ['rag', 'iterative', 'chain-of-thought'],
    code: `Analisar necessidade
        ↓
Executar ação
        ↓
Observar resultado
        ↓
Analisar novamente
        ↓
Próxima ação

Exemplo: consultar documentação → identificar API → implementar → executar validação.`,
    question: 'Qual tipo de prompt este ciclo representa?',
    explanation:
      'O ciclo alterna análise com execução de ações, observando o resultado de cada uma. Isso é ReAct (Reason + Act). RAG só recupera informações antes de responder, sem agir em ciclos.',
    hint: 'O ciclo alterna entre pensar e agir, observando o resultado de cada ação.',
  },
  {
    id: 'react-description',
    format: 'description',
    answer: 'react',
    distractors: ['rag', 'chain-of-thought', 'iterative'],
    question:
      'O modelo alterna entre raciocinar e executar ações, observando o resultado de cada ação para decidir o próximo passo. Que tipo de prompt é esse?',
    explanation:
      'ReAct combina análise com execução de ações. Chain-of-Thought só raciocina, sem agir, e Iterative refina o resultado a partir de novos prompts seus.',
    hint: 'Raciocínio e ação se revezam em um ciclo.',
  },
  {
    id: 'iterative-example',
    format: 'example',
    answer: 'iterative',
    distractors: ['decomposition', 'chain-of-thought', 'meta'],
    code: `Prompt 1: Crie o componente.

Prompt 2: Corrija os problemas de alinhamento.

Prompt 3: Ajuste a responsividade.

Prompt 4: Revise acessibilidade.`,
    question: WHICH_PROMPT,
    explanation:
      'Cada novo prompt refina o resultado do anterior. Isso é Iterative prompting. Decomposition divide a tarefa em partes diferentes, em vez de melhorar o mesmo resultado.',
    hint: 'Cada prompt melhora o resultado do anterior.',
  },
  {
    id: 'iterative-description',
    format: 'description',
    answer: 'iterative',
    distractors: ['decomposition', 'meta', 'socratic'],
    question:
      'Você refina o resultado aos poucos, com novos prompts que corrigem e melhoram a resposta anterior. Que tipo de prompt é esse?',
    explanation:
      'Iterative prompting refina o resultado progressivamente. Meta prompting usa o modelo para melhorar os próprios prompts, e não o resultado em si.',
    hint: 'O resultado vai sendo lapidado em várias rodadas.',
  },
  {
    id: 'meta-example',
    format: 'example',
    answer: 'meta',
    distractors: ['iterative', 'instruction', 'constraint-based'],
    code: `Analise este prompt:
[MEU PROMPT]

Identifique:
- Ambiguidades.
- Informações ausentes.
- Restrições necessárias.

Depois, apresente uma versão melhorada.`,
    question: WHICH_PROMPT,
    explanation:
      'O modelo analisa e melhora um prompt, e não resolve uma tarefa final. Isso é Meta prompting. Iterative refina o resultado de uma tarefa a cada novo prompt.',
    hint: 'O objeto da análise é o próprio prompt.',
  },
  {
    id: 'meta-description',
    format: 'description',
    answer: 'meta',
    distractors: ['iterative', 'role', 'instruction'],
    question:
      'Você usa o modelo para criar ou melhorar prompts, apontando ambiguidades e informações que faltam. Que tipo de prompt é esse?',
    explanation:
      'Meta prompting utiliza o modelo para criar ou melhorar prompts. Iterative melhora o resultado de uma tarefa, e não o prompt.',
    hint: 'Aqui o modelo trabalha sobre o prompt, e não sobre o resultado final.',
  },
  {
    id: 'rag-example',
    format: 'example',
    answer: 'rag',
    distractors: ['react', 'generated-knowledge', 'contextual'],
    code: `Pergunta do usuário
        ↓
Busca na documentação
        ↓
Recuperação de informações
        ↓
Contexto enviado ao LLM
        ↓
Resposta fundamentada

Exemplo: consultar a documentação oficial do React antes de responder sobre uma API.`,
    question: 'Qual tipo de prompt este fluxo representa?',
    explanation:
      'Informações externas são buscadas e enviadas ao modelo antes da resposta. Isso é RAG (Retrieval-Augmented Generation). Em Generated Knowledge o modelo gera as informações, e em Contextual prompting você as escreve.',
    hint: 'Há uma busca em uma fonte externa antes de responder.',
  },
  {
    id: 'rag-description',
    format: 'description',
    answer: 'rag',
    distractors: ['generated-knowledge', 'contextual', 'react'],
    question:
      'Informações externas são recuperadas de uma base de documentos e enviadas ao modelo para fundamentar a resposta. Que tipo de prompt é esse?',
    explanation:
      'RAG recupera informações externas para fundamentar respostas. ReAct também pode consultar fontes, mas se define pelo ciclo de raciocínio e ação.',
    hint: 'A resposta se apoia em informações buscadas fora do modelo.',
  },
]
