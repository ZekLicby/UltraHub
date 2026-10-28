export type QuestionCategory = 'typescript' | 'node' | 'oop'

export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export interface Question {
  id: string
  category: QuestionCategory
  topics: string[]
  difficulty: QuestionDifficulty
  type: 'multiple-choice' | 'code-completion'
  code?: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  hint: string
}

export const QUESTIONS: Question[] = [
  {
    id: "ts-001",
    category: "typescript",
    topics: ["types", "unknown"],
    difficulty: "medium",
    type: "multiple-choice",
    question:
      "Uma variável do tipo `unknown` recebeu um valor vindo de uma API externa. O que é necessário antes de usá-la como `string`?",
    options: [
      "Fazer uma verificação de tipo (type guard) ou uma conversão explícita antes de usá-la",
      "Nada precisa ser feito: o TypeScript permite chamar métodos de `string` diretamente em qualquer valor `unknown`, sem nenhuma verificação prévia",
      "Basta reatribuir o valor a uma variável do tipo `any`, já que `any` e `unknown` aceitam exatamente as mesmas operações em tempo de compilação",
      "É necessário declarar a variável novamente com `let`, o que faz o TypeScript descartar `unknown` e inferir `string` automaticamente a partir do valor atual"
    ],
    correctAnswer: 0,
    explanation:
      "`unknown` representa um valor de tipo desconhecido e exige verificação (type guard) ou asserção antes de ser usado como um tipo específico, diferente de `any`.",
    hint: "Pense no motivo de `unknown` ser considerado mais seguro que `any`."
  },
  {
    id: "ts-002",
    category: "typescript",
    topics: ["classes", "access-modifiers"],
    difficulty: "medium",
    type: "code-completion",
    code: `class User {\n  ______ name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}`,
    question:
      "Qual modificador de acesso completa corretamente o código, restringindo o acesso a `name` somente dentro da própria classe?",
    options: ["private", "static", "abstract", "protected"],
    correctAnswer: 0,
    explanation:
      "`private` restringe o acesso ao membro exclusivamente ao escopo da própria classe onde foi declarado.",
    hint: "Pense em qual modificador impede até mesmo que subclasses acessem o membro diretamente."
  },
  {
    id: "ts-003",
    category: "typescript",
    topics: ["basic-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é o tipo correto para representar um número em TypeScript?",
    options: ["number", "Number", "int", "float"],
    correctAnswer: 0,
    explanation:
      "TypeScript utiliza `number` (em minúsculas) para representar valores numéricos, sem distinção entre inteiros e decimais.",
    hint: "Os tipos primitivos em TypeScript são escritos em minúsculas."
  },
  {
    id: "ts-004",
    category: "typescript",
    topics: ["type-inference"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "No trecho `let total = 10;`, qual tipo o TypeScript infere automaticamente para `total`?",
    options: ["number", "string", "any", "unknown"],
    correctAnswer: 0,
    explanation:
      "Como `total` é inicializado com um valor numérico, o TypeScript infere o tipo `number` automaticamente, sem precisar de anotação explícita.",
    hint: "Observe o valor atribuído na inicialização da variável."
  },
  {
    id: "ts-005",
    category: "typescript",
    topics: ["interface"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é o principal objetivo de uma `interface` em TypeScript?",
    options: [
      "Definir o formato (contrato) que um objeto deve seguir",
      "Gerar código JavaScript adicional em tempo de execução para validar automaticamente cada propriedade do objeto",
      "Persistir os dados do objeto em disco sempre que uma nova instância que a implementa é criada",
      "Substituir completamente a necessidade de classes, já que toda a lógica de negócio deve ficar dentro da interface"
    ],
    correctAnswer: 0,
    explanation:
      "Uma `interface` descreve a estrutura esperada de um objeto (quais propriedades e tipos ele deve ter), sem gerar código em tempo de execução.",
    hint: "Interfaces existem apenas durante a checagem de tipos, não no JavaScript gerado."
  },
  {
    id: "ts-006",
    category: "typescript",
    topics: ["type", "interface"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual das alternativas descreve corretamente uma diferença entre `type` e `interface`?",
    options: [
      "`interface` suporta declaration merging (múltiplas declarações se combinam); `type` não suporta",
      "`type` suporta declaration merging (múltiplas declarações com o mesmo nome se combinam automaticamente); `interface` não suporta esse recurso",
      "`type` só pode representar tipos primitivos como `string` e `number`; `interface` é a única forma de representar objetos complexos",
      "`interface` não pode ser estendida nem combinada com outras interfaces; apenas `type` permite compor tipos através de intersections"
    ],
    correctAnswer: 0,
    explanation:
      "Declarar a mesma `interface` mais de uma vez combina as declarações automaticamente (declaration merging); com `type` isso geraria um erro de identificador duplicado.",
    hint: "Pense no que acontece ao declarar o mesmo nome duas vezes."
  },
  {
    id: "ts-007",
    category: "typescript",
    topics: ["union-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que representa o tipo `string | number`?",
    options: [
      "Um valor que pode ser string ou number",
      "Um valor que é obrigatoriamente string e number ao mesmo tempo",
      "Um array de strings e numbers",
      "Um erro de sintaxe"
    ],
    correctAnswer: 0,
    explanation: "O operador `|` define um Union Type: o valor pode assumir qualquer um dos tipos listados.",
    hint: "O símbolo `|` costuma representar 'ou' em várias linguagens."
  },
  {
    id: "ts-008",
    category: "typescript",
    topics: ["intersection-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que acontece ao combinar dois tipos com `A & B` (Intersection Type)?",
    options: [
      "O resultado precisa satisfazer as propriedades de A e de B simultaneamente",
      "O resultado satisfaz apenas as propriedades que existem em comum entre A e B, descartando as demais automaticamente",
      "O resultado satisfaz A ou B, dependendo de qual dos dois tipos for atribuído primeiro à variável",
      "Todas as propriedades de A e B se tornam opcionais automaticamente ao serem combinadas com o operador `&`"
    ],
    correctAnswer: 0,
    explanation:
      "Um Intersection Type combina múltiplos tipos em um só, exigindo que o valor atenda a todas as propriedades definidas em cada tipo combinado.",
    hint: "O símbolo `&` costuma representar 'e' — combinação, não escolha."
  },
  {
    id: "ts-009",
    category: "typescript",
    topics: ["generics"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é a principal vantagem de usar Generics em uma função?",
    options: [
      "Reutilizar a mesma lógica com segurança de tipos para diferentes tipos de entrada",
      "Tornar a função mais lenta em tempo de execução, trocando desempenho por uma checagem de tipos mais rigorosa",
      "Eliminar completamente a necessidade de anotar tipos, já que Generics substituem toda a tipagem estática da função",
      "Permitir que a função aceite qualquer valor sem nenhuma checagem, funcionando de forma equivalente ao uso de `any`"
    ],
    correctAnswer: 0,
    explanation:
      "Generics permitem escrever funções e estruturas reutilizáveis que mantêm a segurança de tipos, sem repetir código para cada tipo específico.",
    hint: "Pense em uma função que funciona igualmente bem para `number[]` e `string[]`."
  },
  {
    id: "ts-010",
    category: "typescript",
    topics: ["generics"],
    difficulty: "hard",
    type: "code-completion",
    code: `function longest<T ______ { length: number }>(a: T, b: T): T {\n  return a.length >= b.length ? a : b;\n}`,
    question:
      "Qual trecho completa corretamente a restrição de tipo (constraint) do Generic `T`, garantindo que ele possua uma propriedade `length`?",
    options: ["extends", "implements", "instanceof", "typeof"],
    correctAnswer: 0,
    explanation:
      "A palavra-chave `extends` em um Generic define uma constraint, restringindo `T` a tipos que possuam a estrutura indicada.",
    hint: "É a mesma palavra-chave usada para herança entre classes e interfaces."
  },
  {
    id: "ts-011",
    category: "typescript",
    topics: ["enum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é o propósito de um `enum` em TypeScript?",
    options: [
      "Agrupar um conjunto nomeado de valores constantes relacionados",
      "Substituir o uso de arrays sempre que for necessário armazenar múltiplos valores relacionados entre si",
      "Definir tipos genéricos reutilizáveis que podem ser parametrizados por diferentes tipos de entrada",
      "Criar funções assíncronas que retornam automaticamente uma Promise resolvida com o primeiro valor definido"
    ],
    correctAnswer: 0,
    explanation:
      "Um `enum` cria um conjunto de constantes nomeadas relacionadas, tornando o código mais legível do que usar valores soltos.",
    hint: "Pense em dias da semana ou status de um pedido como exemplo."
  },
  {
    id: "ts-012",
    category: "typescript",
    topics: ["type-narrowing"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `function printLength(value: string | number) {\n  if (typeof value === "string") {\n    console.log(value.length);\n  }\n}`,
    question: "Qual técnica está sendo usada no código acima para garantir que `value` seja tratado como `string` dentro do `if`?",
    options: [
      "Type narrowing (estreitamento de tipo) via `typeof`",
      "Type casting forçado",
      "Generics",
      "Declaration merging"
    ],
    correctAnswer: 0,
    explanation:
      "A checagem com `typeof` permite que o TypeScript 'estreite' o tipo dentro do bloco, reconhecendo `value` como `string` apenas ali.",
    hint: "O nome da técnica remete a 'estreitar' as possibilidades de um Union Type."
  },
  {
    id: "ts-013",
    category: "typescript",
    topics: ["never"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Em qual situação o tipo `never` é utilizado corretamente?",
    options: [
      "Em uma função que sempre lança uma exceção ou nunca retorna",
      "Em uma variável que pode receber qualquer valor possível, incluindo `null`, `undefined` e tipos primitivos",
      "Em uma função que retorna `undefined` explicitamente ao final de sua execução, sem lançar nenhuma exceção",
      "Em um array vazio, já que o TypeScript não consegue inferir o tipo dos elementos que ele deveria conter"
    ],
    correctAnswer: 0,
    explanation:
      "`never` representa um valor que nunca ocorre, como o retorno de uma função que sempre lança exceção ou entra em loop infinito.",
    hint: "Pense no que significa uma função que nunca chega a 'terminar normalmente'."
  },
  {
    id: "ts-014",
    category: "typescript",
    topics: ["utility-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o utility type `Partial<T>` faz com um tipo `T`?",
    options: [
      "Torna todas as propriedades de T opcionais",
      "Torna todas as propriedades de T somente leitura",
      "Remove propriedades específicas de T",
      "Seleciona apenas algumas propriedades de T"
    ],
    correctAnswer: 0,
    explanation:
      "`Partial<T>` gera um novo tipo com todas as propriedades de `T` marcadas como opcionais, útil para atualizações parciais de objetos.",
    hint: "O nome 'Partial' remete a algo incompleto ou parcial."
  },
  {
    id: "ts-015",
    category: "typescript",
    topics: ["utility-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual a diferença entre `Pick<T, K>` e `Omit<T, K>`?",
    options: [
      "`Pick` seleciona apenas as propriedades indicadas; `Omit` remove as propriedades indicadas",
      "Ambos fazem exatamente a mesma coisa, sendo apenas nomes alternativos para o mesmo utility type introduzido por compatibilidade",
      "`Pick` remove as propriedades indicadas do tipo original; `Omit` seleciona apenas as propriedades indicadas, ignorando as demais",
      "`Pick` funciona apenas em conjunto com classes abstratas; `Omit` é exclusivo para tipos definidos com `interface`"
    ],
    correctAnswer: 0,
    explanation:
      "`Pick<T, K>` cria um tipo apenas com as propriedades listadas em K; `Omit<T, K>` cria um tipo com todas as propriedades de T, exceto as listadas em K.",
    hint: "Os nomes em inglês já indicam a ação: 'escolher' e 'omitir'."
  },
  {
    id: "ts-016",
    category: "typescript",
    topics: ["classes"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual palavra-chave é usada para declarar uma classe em TypeScript?",
    options: ["class", "struct", "object", "interface"],
    correctAnswer: 0,
    explanation: "A palavra-chave `class` é usada para declarar classes, assim como em JavaScript ES6+.",
    hint: "É a mesma palavra-chave utilizada em diversas linguagens orientadas a objetos."
  },
  {
    id: "ts-017",
    category: "typescript",
    topics: ["access-modifiers"],
    difficulty: "medium",
    type: "code-completion",
    code: `class Account {\n  ______ balance: number;\n\n  constructor(balance: number) {\n    this.balance = balance;\n  }\n\n  protected getBalance(): number {\n    return this.balance;\n  }\n}\n\nclass SavingsAccount extends Account {\n  showBalance() {\n    console.log(this.getBalance());\n  }\n}`,
    question:
      "Qual modificador completa `______` para que `balance` seja acessível pela própria classe e por subclasses como `SavingsAccount`, mas não fora delas?",
    options: ["protected", "private", "public", "readonly"],
    correctAnswer: 0,
    explanation:
      "`protected` permite acesso ao membro pela própria classe e por classes que a estendem, mas bloqueia o acesso externo.",
    hint: "Pense em qual modificador é 'mais aberto' que `private`, mas ainda assim restrito a fora da hierarquia de classes."
  },
  {
    id: "ts-018",
    category: "typescript",
    topics: ["readonly"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que o modificador `readonly` impede em uma propriedade?",
    options: [
      "Que o valor seja reatribuído após a inicialização",
      "Que a propriedade seja lida fora do construtor da classe, restringindo o acesso apenas aos métodos internos",
      "Que a propriedade receba um tipo explícito, obrigando o TypeScript a inferir automaticamente o seu tipo",
      "Que a propriedade seja herdada por subclasses, impedindo que elas a redeclarem com um novo valor"
    ],
    correctAnswer: 0,
    explanation:
      "`readonly` permite que a propriedade seja lida normalmente, mas impede que ela seja reatribuída após sua inicialização.",
    hint: "O nome já indica: 'somente leitura'."
  },
  {
    id: "ts-019",
    category: "typescript",
    topics: ["abstract-classes"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é o propósito de uma classe abstrata em TypeScript?",
    options: [
      "Servir de base para outras classes, podendo definir métodos que devem ser implementados pelas subclasses, sem poder ser instanciada diretamente",
      "Ser instanciada normalmente com `new`, exatamente como qualquer outra classe, sem nenhuma restrição adicional imposta pelo compilador",
      "Substituir completamente o uso de interfaces, já que classes abstratas sempre têm prioridade na checagem de tipos estruturais",
      "Impedir que a classe tenha um construtor próprio, obrigando toda inicialização a ocorrer exclusivamente nas subclasses concretas"
    ],
    correctAnswer: 0,
    explanation:
      "Uma classe abstrata não pode ser instanciada diretamente; ela serve como base, podendo declarar métodos abstratos que as subclasses são obrigadas a implementar.",
    hint: "Pense em um 'molde' que precisa ser especializado antes de ser usado."
  },
  {
    id: "ts-020",
    category: "typescript",
    topics: ["function-typing"],
    difficulty: "hard",
    type: "code-completion",
    code: `function combine<T, U>(a: T, b: U): ______ {\n  return { ...a, ...b };\n}`,
    question:
      "Qual tipo de retorno completa corretamente a função, representando um objeto que combina as propriedades de `T` e `U`?",
    options: ["T & U", "T | U", "T[U]", "Partial<T>"],
    correctAnswer: 0,
    explanation:
      "Como o objeto retornado precisa conter as propriedades de ambos os tipos ao mesmo tempo, o tipo correto é a intersecção `T & U`.",
    hint: "Pense em qual operador exige que os dois tipos estejam presentes simultaneamente."
  },
  {
    id: "ts-021",
    category: "typescript",
    topics: ["keyof"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `interface Person {\n  name: string;\n  age: number;\n}\n\ntype PersonKeys = keyof Person;`,
    question: "O que o tipo `PersonKeys` representa no código acima?",
    options: [
      "A união dos nomes das propriedades de Person, ou seja, `\"name\" | \"age\"`",
      "Um array contendo os valores atuais de cada propriedade de Person, ou seja, algo equivalente a `(string | number)[]`",
      "Uma cópia idêntica da interface Person, incluindo os tipos de cada propriedade, sem nenhuma transformação aplicada",
      "Um erro de compilação, já que `keyof` só pode ser aplicado a classes concretas, nunca a interfaces ou type aliases"
    ],
    correctAnswer: 0,
    explanation:
      "O operador `keyof` produz uma união de literais de string com os nomes das propriedades do tipo, resultando em `\"name\" | \"age\"`.",
    hint: "Pense em `keyof` como uma forma de obter as 'chaves' de um tipo como um Union Type."
  },
  {
    id: "ts-022",
    category: "typescript",
    topics: ["typeof-type-query"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const config = {\n  host: "localhost",\n  port: 3000\n};\n\ntype Config = typeof config;`,
    question: "O que o `typeof` faz nesse contexto, dentro de uma posição de tipo?",
    options: [
      "Extrai o tipo estático do valor `config`, gerando `{ host: string; port: number }`",
      "Executa a função `config` em tempo de execução e armazena o valor retornado dentro da variável de tipo `Config`",
      "Converte o objeto `config` em uma representação de string JSON, útil para serialização e logging",
      "Remove completamente a tipagem de `config`, tornando `Config` equivalente ao tipo `any`"
    ],
    correctAnswer: 0,
    explanation:
      "Usado em uma posição de tipo, `typeof` extrai o tipo inferido de uma variável ou valor existente, permitindo reutilizá-lo como tipo.",
    hint: "Diferente do `typeof` de JavaScript (que roda em runtime), aqui ele atua em tempo de compilação."
  },
  {
    id: "ts-023",
    category: "typescript",
    topics: ["indexed-access-types"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Person {\n  name: string;\n  address: {\n    city: string;\n  };\n}\n\ntype City = Person["address"]["city"];`,
    question: "Qual é o tipo de `City` no código acima?",
    options: ["string", "Person", "{ city: string }", "never"],
    correctAnswer: 0,
    explanation:
      "Indexed Access Types permitem acessar o tipo de uma propriedade aninhada usando a mesma sintaxe de acesso a propriedades, resultando em `string`.",
    hint: "Siga o caminho das propriedades como faria em tempo de execução, mas em nível de tipos."
  },
  {
    id: "ts-024",
    category: "typescript",
    topics: ["mapped-types"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type Flags<T> = {\n  [K in keyof T]: boolean;\n};\n\ninterface Feature {\n  darkMode: string;\n  betaAccess: number;\n}\n\ntype FeatureFlags = Flags<Feature>;`,
    question: "O que `FeatureFlags` representa após aplicar o Mapped Type `Flags<Feature>`?",
    options: [
      "Um tipo com as mesmas chaves de Feature, mas com todos os valores do tipo `boolean`",
      "Um tipo idêntico a Feature, já que Mapped Types apenas copiam a estrutura original sem alterar nenhum tipo de valor",
      "Um array contendo um `boolean` para cada propriedade declarada originalmente na interface Feature",
      "Um erro de compilação, pois Mapped Types não têm permissão para alterar o tipo das propriedades de um tipo existente"
    ],
    correctAnswer: 0,
    explanation:
      "Um Mapped Type itera sobre as chaves de T (`keyof T`) e redefine o tipo de cada valor — aqui, todas as propriedades passam a ser `boolean`, mantendo os nomes originais.",
    hint: "Observe que o Mapped Type mantém as chaves de Feature, mas substitui o tipo do valor."
  },
  {
    id: "ts-025",
    category: "typescript",
    topics: ["conditional-types"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type IsString<T> = T extends string ? true : false;\n\ntype A = IsString<"hello">;\ntype B = IsString<42>;`,
    question: "Quais são os valores dos tipos `A` e `B`?",
    options: [
      "A é `true` e B é `false`",
      "A é `false` e B é `true`",
      "Ambos são `true`",
      "Ambos são `false`"
    ],
    correctAnswer: 0,
    explanation:
      "Conditional Types avaliam a condição `T extends string` em tempo de compilação: `\"hello\"` satisfaz `string` (A = true), enquanto `42` não satisfaz (B = false).",
    hint: "Teste a condição para cada tipo concreto, como se fosse um `if` para tipos."
  },
  {
    id: "ts-026",
    category: "typescript",
    topics: ["infer"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type ElementType<T> = T extends (infer U)[] ? U : never;\n\ntype Item = ElementType<string[]>;`,
    question: "O que a palavra-chave `infer` faz no código acima, e qual é o tipo de `Item`?",
    options: [
      "`infer` captura o tipo do elemento dentro do array para reutilizá-lo; `Item` é `string`",
      "`infer` converte automaticamente o array em uma tupla de tamanho fixo; `Item` é inferido como `string[]`",
      "`infer` é apenas uma palavra reservada para documentação e não tem nenhum efeito real sobre a inferência de tipos",
      "`infer` sempre resulta no tipo `any`, independentemente do tipo concreto usado para instanciar o Conditional Type"
    ],
    correctAnswer: 0,
    explanation:
      "`infer U` declara uma variável de tipo dentro de um Conditional Type, capturando o tipo do elemento do array. Como `T` é `string[]`, `U` é inferido como `string`.",
    hint: "Pense em `infer` como uma forma de 'capturar' uma parte do tipo que está sendo comparado."
  },
  {
    id: "ts-027",
    category: "typescript",
    topics: ["template-literal-types"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type EventName = "click" | "hover";\ntype HandlerName = \`on\${Capitalize<EventName>}\`;`,
    question: "Quais são os valores possíveis do tipo `HandlerName`?",
    options: [
      "\"onClick\" | \"onHover\"",
      "\"onclick\" | \"onhover\"",
      "\"on-click\" | \"on-hover\"",
      "string"
    ],
    correctAnswer: 0,
    explanation:
      "Template Literal Types combinam strings literais com Union Types; `Capitalize` transforma a primeira letra em maiúscula, gerando `\"onClick\" | \"onHover\"`.",
    hint: "Aplique a transformação `Capitalize` a cada membro do union antes de concatenar com o prefixo."
  },
  {
    id: "ts-028",
    category: "typescript",
    topics: ["tuple-types"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `let coordinate: [number, number];\n\ncoordinate = [10, 20];`,
    question: "O que uma tupla como `[number, number]` garante em relação a um array comum (`number[]`)?",
    options: [
      "Um tamanho fixo e o tipo específico de cada posição do array",
      "Que o array pode ter qualquer tamanho, mas apenas números",
      "Que os valores nunca podem ser alterados",
      "Que o array será convertido em objeto"
    ],
    correctAnswer: 0,
    explanation:
      "Tuplas definem tanto a quantidade de elementos quanto o tipo de cada posição individualmente, diferente de `number[]`, que aceita qualquer quantidade de números.",
    hint: "Repare que a tupla especifica dois números, nessa ordem, e não uma lista de tamanho arbitrário."
  },
  {
    id: "ts-029",
    category: "typescript",
    topics: ["tuple-types", "optional-elements"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type Range = [start: number, end?: number];\n\nconst a: Range = [0];\nconst b: Range = [0, 10];`,
    question: "O que o `?` após `end` permite na definição da tupla `Range`?",
    options: [
      "Que o segundo elemento seja omitido, tornando a tupla válida com um ou dois elementos",
      "Que o segundo elemento aceite qualquer tipo, inclusive tipos incompatíveis com `number`, sem gerar erro de compilação",
      "Que a tupla deixe de ter um tamanho fixo, comportando-se exatamente como um array comum de tamanho variável",
      "Um erro de sintaxe, já que tuplas no TypeScript não suportam elementos opcionais em nenhuma posição"
    ],
    correctAnswer: 0,
    explanation:
      "Assim como propriedades opcionais em interfaces, `?` em um elemento de tupla o torna opcional, permitindo tuplas com ou sem esse elemento.",
    hint: "Compare com o uso do `?` em propriedades opcionais de um objeto."
  },
  {
    id: "ts-030",
    category: "typescript",
    topics: ["function-overloads"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `function parse(value: string): string[];\nfunction parse(value: number): number[];\nfunction parse(value: any): any {\n  return [value];\n}`,
    question: "O que as duas primeiras assinaturas de `parse` representam?",
    options: [
      "Assinaturas de sobrecarga (overloads), que descrevem os tipos de entrada/saída aceitos, sem conter implementação",
      "Duas funções completamente independentes, cada uma executada em sequência sempre que `parse` é chamada no código",
      "Um erro de compilação, já que o TypeScript não permite declarar a mesma função mais de uma vez no mesmo arquivo",
      "Uma forma de sobrescrever a função `parse` dentro de uma subclasse, alterando seu comportamento em tempo de execução"
    ],
    correctAnswer: 0,
    explanation:
      "Overloads permitem declarar múltiplas assinaturas de tipo para a mesma função; apenas a última declaração (com `any`) contém a implementação real, usada internamente para tratar todos os casos.",
    hint: "Note que apenas a última declaração de `parse` tem um corpo de função."
  },
  {
    id: "ts-031",
    category: "typescript",
    topics: ["this-parameter"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Button {\n  label: string;\n  onClick(this: Button): void;\n}\n\nconst button: Button = {\n  label: "Salvar",\n  onClick() {\n    console.log(this.label);\n  }\n};`,
    question: "Qual é o propósito do parâmetro `this: Button` na assinatura de `onClick`?",
    options: [
      "Tipar explicitamente o valor de `this` dentro do método, garantindo que ele seja tratado como `Button`",
      "Criar uma nova instância independente de Button toda vez que o método `onClick` é invocado pelo código cliente",
      "Tornar `this` um parâmetro comum, que precisa ser passado explicitamente como argumento em toda chamada da função",
      "Impedir completamente que o método acesse a palavra-chave `this` durante sua execução em tempo de execução"
    ],
    correctAnswer: 0,
    explanation:
      "O parâmetro `this` (removido na compilação) é usado apenas para tipagem, informando ao TypeScript qual deve ser o tipo de `this` dentro da função, ajudando a evitar erros de contexto.",
    hint: "Esse parâmetro especial não aparece na lista de argumentos reais da função quando chamada."
  },
  {
    id: "ts-032",
    category: "typescript",
    topics: ["discriminated-unions"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `interface Circle {\n  kind: "circle";\n  radius: number;\n}\n\ninterface Square {\n  kind: "square";\n  side: number;\n}\n\ntype Shape = Circle | Square;\n\nfunction area(shape: Shape) {\n  if (shape.kind === "circle") {\n    return Math.PI * shape.radius ** 2;\n  }\n  return shape.side ** 2;\n}`,
    question: "Qual conceito permite que o TypeScript identifique corretamente as propriedades de `shape` dentro de cada bloco do `if`?",
    options: [
      "Union discriminada (discriminated union), usando a propriedade comum `kind` como discriminante",
      "Generics",
      "Decorators",
      "Módulos ambientes"
    ],
    correctAnswer: 0,
    explanation:
      "Como `kind` é uma propriedade literal comum a ambos os tipos, o TypeScript consegue 'discriminar' qual variante do union está sendo tratada em cada ramo, estreitando o tipo automaticamente.",
    hint: "Repare que ambas as interfaces compartilham uma propriedade com valores literais distintos."
  },
  {
    id: "ts-033",
    category: "typescript",
    topics: ["never", "exhaustiveness-checking"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type Shape = Circle | Square | Triangle;\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle": return Math.PI * shape.radius ** 2;\n    case "square": return shape.side ** 2;\n    default:\n      const _exhaustive: never = shape;\n      throw new Error("Formato não tratado");\n  }\n}`,
    question: "Qual é o propósito de atribuir `shape` a uma variável do tipo `never` no `default`?",
    options: [
      "Garantir, em tempo de compilação, que todos os casos do union foram tratados (checagem de exaustividade)",
      "Fazer com que a função sempre retorne `undefined` no caso padrão, evitando lançar exceções desnecessárias em tempo de execução",
      "Melhorar a performance da função, já que variáveis do tipo `never` são otimizadas de forma especial pelo motor JavaScript",
      "Impedir que a função `area` seja chamada com um valor do tipo `Triangle`, mesmo que ele exista na união de tipos"
    ],
    correctAnswer: 0,
    explanation:
      "Se um novo caso (como `Triangle`) não for tratado em nenhum `case`, `shape` ainda terá um tipo diferente de `never` no `default`, gerando um erro de compilação — essa técnica é chamada de checagem de exaustividade.",
    hint: "Pense no que acontece se um novo tipo for adicionado ao union e esquecido no switch."
  },
  {
    id: "ts-034",
    category: "typescript",
    topics: ["utility-types", "record"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `type Role = "admin" | "editor" | "viewer";\n\nconst permissions: Record<Role, string[]> = {\n  admin: ["read", "write", "delete"],\n  editor: ["read", "write"],\n  viewer: ["read"]\n};`,
    question: "O que o utility type `Record<Role, string[]>` exige nesse contexto?",
    options: [
      "Um objeto que tenha exatamente as chaves de Role, cada uma associada a um array de strings",
      "Um array de objetos, onde cada elemento representa uma das permissões possíveis associadas ao tipo Role",
      "Uma classe abstrata que Role deve implementar, fornecendo sua própria versão do array de permissões",
      "Um objeto que precisa conter apenas uma das chaves de Role, deixando as demais completamente ausentes"
    ],
    correctAnswer: 0,
    explanation:
      "`Record<K, V>` constrói um tipo objeto cujas chaves são os membros de `K` e cujos valores têm o tipo `V` — aqui, todas as `Role` devem estar presentes, cada uma com um `string[]`.",
    hint: "Pense em `Record` como uma forma de dizer 'um objeto com estas chaves específicas, todas do mesmo tipo de valor'."
  },
  {
    id: "ts-035",
    category: "typescript",
    topics: ["utility-types", "readonly"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `interface Point {\n  x: number;\n  y: number;\n}\n\nconst p: Readonly<Point> = { x: 1, y: 2 };\np.x = 10; // erro`,
    question: "Por que a linha `p.x = 10` gera um erro de compilação?",
    options: [
      "Porque `Readonly<Point>` torna todas as propriedades somente leitura, impedindo reatribuição",
      "Porque a propriedade `x` não foi declarada dentro da interface `Point`, apesar de aparecer na inicialização do objeto",
      "Porque a variável `p` não foi inicializada corretamente antes da tentativa de leitura de sua propriedade `x`",
      "Porque `Point` foi declarada como uma interface abstrata, que não permite a criação de instâncias concretas"
    ],
    correctAnswer: 0,
    explanation:
      "`Readonly<T>` gera um novo tipo com todas as propriedades de `T` marcadas como `readonly`, impedindo que sejam reatribuídas após a inicialização.",
    hint: "Compare com o modificador `readonly` aplicado individualmente a uma propriedade."
  },
  {
    id: "ts-036",
    category: "typescript",
    topics: ["utility-types", "return-type"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `function createUser(name: string) {\n  return { id: 1, name };\n}\n\ntype User = ReturnType<typeof createUser>;`,
    question: "O que o tipo `User` representa no código acima?",
    options: [
      "O tipo do valor retornado pela função `createUser`, ou seja, `{ id: number; name: string }`",
      "O tipo dos parâmetros aceitos pela função `createUser`, ou seja, uma tupla equivalente a `[string]`",
      "A própria função `createUser`, incluindo sua assinatura completa de parâmetros e tipo de retorno",
      "Um erro de compilação, já que `ReturnType` só pode ser aplicado a métodos declarados dentro de classes"
    ],
    correctAnswer: 0,
    explanation:
      "`ReturnType<T>` extrai o tipo de retorno de um tipo de função `T`. Combinado com `typeof createUser`, obtém-se o tipo do objeto retornado pela função.",
    hint: "Repare que primeiro é preciso usar `typeof` para obter o tipo da função, antes de aplicar `ReturnType`."
  },
  {
    id: "ts-037",
    category: "typescript",
    topics: ["utility-types", "parameters"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `function createUser(name: string, age: number) {\n  return { name, age };\n}\n\ntype CreateUserArgs = Parameters<typeof createUser>;`,
    question: "O que o tipo `CreateUserArgs` representa?",
    options: [
      "Uma tupla com os tipos dos parâmetros da função, ou seja, `[string, number]`",
      "O tipo de retorno da função `createUser`, ou seja, um objeto equivalente a `{ name: string; age: number }`",
      "O número total de parâmetros que a função aceita, representado como um valor literal do tipo `number`",
      "Um array vazio, já que `Parameters` só funciona corretamente em funções que não recebem nenhum argumento"
    ],
    correctAnswer: 0,
    explanation:
      "`Parameters<T>` extrai os tipos dos parâmetros de um tipo de função como uma tupla — aqui, `[string, number]`.",
    hint: "Pense em `Parameters` como o 'oposto' de `ReturnType`: em vez da saída, ele descreve as entradas."
  },
  {
    id: "ts-038",
    category: "typescript",
    topics: ["const-assertions"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const point = { x: 1, y: 2 } as const;\n\npoint.x = 5; // erro`,
    question: "Qual efeito `as const` tem sobre o objeto `point`?",
    options: [
      "Torna todas as propriedades `readonly` e infere os tipos como literais mais específicos, em vez de `number` genérico",
      "Converte o objeto inteiro em uma representação de string, útil para exibir seu conteúdo em um console.log",
      "Remove completamente a tipagem do objeto `point`, tornando cada uma de suas propriedades equivalente a `any`",
      "Transforma o objeto literal em uma instância de classe, adicionando automaticamente métodos utilitários a ele"
    ],
    correctAnswer: 0,
    explanation:
      "`as const` cria uma asserção de tipo literal, tornando as propriedades somente leitura e inferindo tipos literais (`1`, `2`) em vez dos tipos mais amplos (`number`).",
    hint: "Pense em como isso diferencia um objeto mutável de uma configuração imutável."
  },
  {
    id: "ts-039",
    category: "typescript",
    topics: ["non-null-assertion"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `function getElementText(id: string): string {\n  const element = document.getElementById(id);\n  return element!.textContent ?? "";\n}`,
    question: "O que o operador `!` faz logo após `element` nesse código?",
    options: [
      "Informa ao TypeScript que o desenvolvedor garante que `element` não é `null` ou `undefined`, suprimindo o erro de tipo",
      "Nega o valor booleano de `element`, convertendo-o em `false` sempre que ele já for um valor verdadeiro (truthy)",
      "Converte `element` para o tipo `boolean`, permitindo que ele seja usado diretamente em expressões condicionais",
      "Executa uma verificação em tempo de execução que lança uma exceção imediatamente caso `element` seja `null`"
    ],
    correctAnswer: 0,
    explanation:
      "O non-null assertion operator (`!`) apenas informa ao compilador para tratar o valor como não-nulo; ele não realiza nenhuma verificação em tempo de execução, podendo causar erros se a suposição estiver errada.",
    hint: "Esse operador afeta apenas a checagem de tipos, não o comportamento em tempo de execução."
  },
  {
    id: "ts-040",
    category: "typescript",
    topics: ["optional-chaining"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `const user = {\n  profile: null\n};\n\nconst city = user.profile?.address?.city;`,
    question: "O que acontece com `city` se `user.profile` for `null`?",
    options: [
      "`city` recebe `undefined`, sem lançar erro, pois a cadeia de acesso é interrompida com segurança",
      "O código lança uma exceção `TypeError`, interrompendo a execução do restante do programa imediatamente",
      "`city` recebe automaticamente uma string vazia, já que o optional chaining sempre substitui valores nulos por `\"\"`",
      "O programa entra em um loop infinito, pois o optional chaining tenta reavaliar a cadeia repetidamente até obter um valor"
    ],
    correctAnswer: 0,
    explanation:
      "O optional chaining (`?.`) interrompe o acesso à propriedade e retorna `undefined` caso algum elo da cadeia seja `null` ou `undefined`, evitando erros de acesso a propriedades de valores nulos.",
    hint: "Pense em `?.` como uma forma de dizer 'acesse essa propriedade apenas se o valor anterior existir'."
  },
  {
    id: "ts-041",
    category: "typescript",
    topics: ["nullish-coalescing"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `const quantity = 0;\nconst display = quantity ?? "Nenhum item";`,
    question: "Qual será o valor de `display`?",
    options: [
      "0, pois `??` só substitui o valor quando ele é `null` ou `undefined`, e não quando é `0`",
      "\"Nenhum item\", pois o operador `??` trata qualquer valor falsy, incluindo `0`, exatamente como o operador `||`",
      "undefined, pois o operador `??` sempre descarta o valor original da variável antes de avaliar o valor da direita",
      "Um erro de tipo, já que o operador `??` não pode ser utilizado com variáveis inicializadas com valores numéricos"
    ],
    correctAnswer: 0,
    explanation:
      "O operador `??` (nullish coalescing) retorna o valor da direita apenas se o da esquerda for `null` ou `undefined` — diferente do `||`, que também trocaria valores falsy como `0` ou `\"\"`.",
    hint: "Compare com o comportamento do operador `||`, que trataria `0` como falsy."
  },
  {
    id: "ts-042",
    category: "typescript",
    topics: ["satisfies"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `type Colors = "red" | "green" | "blue";\n\nconst palette = {\n  primary: "red",\n  secondary: "blue"\n} satisfies Record<string, Colors>;\n\npalette.primary.toUpperCase();`,
    question: "Qual é a vantagem de usar `satisfies` em vez de anotar `palette: Record<string, Colors>` diretamente?",
    options: [
      "`satisfies` valida o formato do objeto sem alargar seu tipo, preservando os tipos literais específicos de cada propriedade (como `\"red\"`) para uso posterior",
      "`satisfies` remove completamente a checagem de tipos do objeto, comportando-se de forma equivalente a uma anotação `any`",
      "`satisfies` transforma automaticamente todas as propriedades do objeto em somente leitura, como se `Readonly<T>` tivesse sido aplicado",
      "Não há nenhuma diferença prática entre `satisfies` e anotar o tipo diretamente; ambos alargam os valores para `Colors` da mesma forma"
    ],
    correctAnswer: 0,
    explanation:
      "`satisfies` verifica se o valor é compatível com o tipo indicado, mas mantém o tipo inferido mais específico (os literais originais), diferente de uma anotação de tipo que alargaria os valores para `Colors` genericamente.",
    hint: "Pense em como o TypeScript ainda 'lembra' os valores literais originais mesmo após a validação."
  },
  {
    id: "ts-043",
    category: "typescript",
    topics: ["type-guards", "custom-type-guard"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Fish {\n  swim(): void;\n}\n\ninterface Bird {\n  fly(): void;\n}\n\nfunction isFish(animal: Fish | Bird): animal is Fish {\n  return (animal as Fish).swim !== undefined;\n}`,
    question: "O que o tipo de retorno `animal is Fish` indica sobre a função `isFish`?",
    options: [
      "É uma função de type guard personalizada: quando retorna `true`, o TypeScript estreita o tipo de `animal` para `Fish` no escopo correspondente",
      "É apenas uma anotação de retorno que garante que a função sempre devolva um valor concreto do tipo Fish em tempo de execução",
      "É uma sintaxe que converte automaticamente qualquer valor do tipo Bird para o tipo Fish, sem verificação adicional",
      "É apenas um comentário estilístico, sem nenhum efeito real sobre a checagem de tipos realizada pelo compilador"
    ],
    correctAnswer: 0,
    explanation:
      "Uma função com predicado de tipo (`param is Type`) informa ao TypeScript como estreitar o tipo da variável avaliada, permitindo checagens de tipo customizadas reutilizáveis.",
    hint: "Diferente de `typeof` ou `instanceof`, esse padrão permite lógica arbitrária para decidir o tipo."
  },
  {
    id: "ts-044",
    category: "typescript",
    topics: ["index-signatures"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `interface StringDictionary {\n  [key: string]: string;\n}\n\nconst translations: StringDictionary = {\n  hello: "olá",\n  bye: "tchau"\n};`,
    question: "O que a index signature `[key: string]: string` permite em `StringDictionary`?",
    options: [
      "Acessar o objeto com qualquer chave do tipo string, sempre retornando um valor do tipo string",
      "Limitar o objeto a exatamente duas propriedades, impedindo que `translations` receba qualquer chave adicional",
      "Impedir a adição de novas propriedades ao objeto depois da sua inicialização, tornando-o efetivamente somente leitura",
      "Transformar o objeto `translations` em um array, onde cada índice numérico corresponde a uma tradução específica"
    ],
    correctAnswer: 0,
    explanation:
      "Uma index signature descreve o tipo de valores acessíveis através de chaves dinâmicas (não conhecidas antecipadamente), permitindo que o objeto tenha qualquer número de propriedades string com valores do tipo indicado.",
    hint: "Pense em um objeto usado como uma espécie de dicionário/mapa, com chaves não fixas."
  },
  {
    id: "ts-045",
    category: "typescript",
    topics: ["generics", "multiple-type-params"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `function zip<T, U>(a: T[], b: U[]): [T, U][] {\n  return a.map((item, index) => [item, b[index]]);\n}\n\nconst result = zip([1, 2], ["a", "b"]);`,
    question: "Qual é o tipo inferido de `result`?",
    options: ["[number, string][]", "[string, number][]", "number[]", "any[]"],
    correctAnswer: 0,
    explanation:
      "A função usa dois Generics (`T` e `U`) inferidos a partir dos argumentos: `T` é `number` (de `[1, 2]`) e `U` é `string` (de `[\"a\", \"b\"]`), gerando um array de tuplas `[number, string][]`.",
    hint: "Observe o tipo de cada array passado como argumento para inferir T e U."
  },
  {
    id: "ts-046",
    category: "typescript",
    topics: ["generics", "default-type-param"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `interface ApiResponse<T = unknown> {\n  data: T;\n  status: number;\n}\n\nconst response: ApiResponse = { data: "ok", status: 200 };`,
    question: "O que `T = unknown` representa na declaração da interface `ApiResponse<T = unknown>`?",
    options: [
      "Um valor padrão para o Generic T, usado quando nenhum tipo é explicitamente informado",
      "Um erro de sintaxe, já que Generics não têm permissão para receber valores padrão em nenhuma versão do TypeScript",
      "Uma constraint que obriga o Generic T a ser sempre `unknown`, independentemente do tipo informado na utilização",
      "Uma forma de tornar a interface `ApiResponse` abstrata, impedindo que ela seja usada para tipar objetos concretos"
    ],
    correctAnswer: 0,
    explanation:
      "Assim como parâmetros de função podem ter valores padrão, um Generic pode ter um tipo padrão, usado quando o tipo não é especificado explicitamente na utilização.",
    hint: "Pense em como isso é similar a um parâmetro de função com valor padrão."
  },
  {
    id: "ts-047",
    category: "typescript",
    topics: ["abstract-classes"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `abstract class Shape {\n  abstract area(): number;\n\n  describe(): string {\n    return "Área: " + this.area();\n  }\n}\n\nclass Square extends Shape {\n  constructor(private side: number) {\n    super();\n  }\n\n  area(): number {\n    return this.side ** 2;\n  }\n}`,
    question: "O que aconteceria se `Square` não implementasse o método `area()`?",
    options: [
      "O TypeScript geraria um erro de compilação, pois métodos abstratos são obrigatórios em subclasses concretas",
      "O código funcionaria normalmente, retornando `undefined` ao chamar `area()`",
      "A classe `Shape` deixaria de existir",
      "O método `describe()` deixaria de funcionar apenas em tempo de execução, sem erro de compilação"
    ],
    correctAnswer: 0,
    explanation:
      "Métodos declarados como `abstract` devem obrigatoriamente ser implementados por qualquer subclasse concreta; caso contrário, o TypeScript aponta um erro de compilação.",
    hint: "Lembre-se de que uma classe abstrata pode declarar métodos sem implementação, delegando-a às subclasses."
  },
  {
    id: "ts-048",
    category: "typescript",
    topics: ["utility-types", "required"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o utility type `Required<T>` faz com um tipo `T`?",
    options: [
      "Torna todas as propriedades opcionais de T obrigatórias",
      "Torna todas as propriedades de T opcionais, incluindo aquelas que já eram originalmente obrigatórias no tipo",
      "Remove do tipo resultante todas as propriedades que eram originalmente opcionais, mantendo apenas as obrigatórias",
      "Transforma o tipo T em uma classe abstrata, exigindo que qualquer subclasse implemente suas propriedades"
    ],
    correctAnswer: 0,
    explanation:
      "`Required<T>` gera um novo tipo em que todas as propriedades, mesmo as originalmente opcionais, tornam-se obrigatórias.",
    hint: "É o oposto direto de `Partial<T>`."
  },
  {
    id: "ts-049",
    category: "typescript",
    topics: ["utility-types", "extract"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o utility type `Extract<T, U>` faz?",
    options: [
      "Extrai de T apenas os tipos que também são atribuíveis a U",
      "Remove de T todos os tipos que também são atribuíveis a U, mantendo apenas os que são exclusivos de T",
      "Combina T e U em um único tipo obrigatório, exigindo que o valor satisfaça as propriedades de ambos simultaneamente",
      "Transforma T em um array cujos elementos são do tipo U, ignorando completamente a definição original de T"
    ],
    correctAnswer: 0,
    explanation:
      "`Extract<T, U>` filtra um Union Type `T`, mantendo apenas os membros que também são compatíveis com `U` — o oposto de `Exclude<T, U>`.",
    hint: "Pense nele como um filtro que mantém apenas a interseção entre os membros do union e U."
  },
  {
    id: "ts-050",
    category: "typescript",
    topics: ["structural-typing"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que caracteriza o sistema de tipos do TypeScript como 'estrutural' (structural typing), em vez de 'nominal'?",
    options: [
      "A compatibilidade entre tipos é determinada pela estrutura (quais propriedades e métodos existem), não pelo nome do tipo declarado",
      "Cada tipo precisa ter um nome único e explícito, e dois tipos com nomes diferentes nunca são considerados compatíveis",
      "Dois objetos só são considerados compatíveis se forem criados a partir de exatamente a mesma classe declarada",
      "TypeScript não permite comparar diretamente tipos diferentes, exigindo sempre uma conversão explícita entre eles"
    ],
    correctAnswer: 0,
    explanation:
      "Em um sistema estrutural, um objeto é compatível com um tipo se possuir a mesma 'forma' (propriedades e métodos exigidos), independentemente do nome do tipo ou de onde foi declarado — diferente de linguagens com tipagem nominal, como Java.",
    hint: "Pense em 'se anda como um pato e grasna como um pato, é tratado como um pato' (duck typing)."
  },
  {
    id: "ts-051",
    category: "typescript",
    topics: ["assertion-functions"],
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Qual é o propósito de uma assertion function (declarada com `asserts` no tipo de retorno), como `function assertIsString(val: unknown): asserts val is string`?",
    options: [
      "Lançar uma exceção se a condição não for satisfeita, e estreitar o tipo da variável no restante do escopo caso a função retorne normalmente",
      "Sempre retornar `true` ou `false`, funcionando exatamente como uma função de type guard comum baseada em `is`",
      "Converter automaticamente o valor recebido para o tipo `string`, independentemente do tipo original da variável",
      "Impedir que a função seja chamada mais de uma vez dentro do mesmo escopo, lançando erro nas chamadas subsequentes"
    ],
    correctAnswer: 0,
    explanation:
      "Assertion functions não retornam um booleano; elas lançam uma exceção quando a asserção falha. Se a função retornar normalmente, o TypeScript estreita o tipo da variável para o restante do escopo, assumindo que a condição é verdadeira.",
    hint: "Repare que essas funções não retornam um valor booleano comum, e sim usam a cláusula `asserts`."
  },
  {
    id: "ts-052",
    category: "typescript",
    topics: ["implements-vs-extends"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é a diferença entre `extends` e `implements` ao declarar uma classe em TypeScript?",
    options: [
      "`extends` herda a implementação de uma classe base; `implements` apenas garante que a classe cumpra o contrato de uma interface, sem herdar código",
      "`implements` herda a implementação completa de uma classe base; `extends` apenas garante que um contrato seja cumprido, sem herdar código",
      "Ambos herdam implementação e cumprem contratos da mesma forma, sendo apenas sinônimos sintáticos um do outro",
      "`extends` só pode ser usado ao herdar de interfaces; `implements` só pode ser usado ao herdar de outras classes concretas"
    ],
    correctAnswer: 0,
    explanation:
      "`extends` estabelece herança entre classes (reutilizando implementação); `implements` apenas obriga a classe a fornecer os membros definidos por uma interface, sem herdar nenhum código.",
    hint: "Pense em qual das duas palavras-chave realmente compartilha código entre classes."
  },
  {
    id: "ts-053",
    category: "typescript",
    topics: ["private-fields"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é uma diferença entre o campo privado nativo do JavaScript (`#nome`) e o modificador `private` do TypeScript?",
    options: [
      "O campo `#nome` é uma restrição real em tempo de execução (verificada pelo motor JS); `private` do TypeScript é apenas uma checagem em tempo de compilação, removida no JavaScript gerado",
      "O modificador `private` do TypeScript é mais restritivo, pois impede o acesso mesmo em tempo de execução, diferente do campo `#nome`",
      "Não existe nenhuma diferença de comportamento entre eles; ambos geram exatamente o mesmo JavaScript após a compilação",
      "O campo `#nome` só pode ser utilizado dentro de interfaces, enquanto `private` é exclusivo de classes concretas"
    ],
    correctAnswer: 0,
    explanation:
      "Campos com `#` são de fato inacessíveis em tempo de execução, mesmo via reflexão; o `private` do TypeScript só impede o acesso durante a checagem de tipos, mas a restrição desaparece no JavaScript compilado.",
    hint: "Pense no que acontece com cada abordagem depois que o código TypeScript é compilado para JavaScript puro."
  },
  {
    id: "ts-054",
    category: "typescript",
    topics: ["namespaces"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é o propósito de um `namespace` em TypeScript?",
    options: [
      "Agrupar e organizar código relacionado sob um identificador único, evitando colisão de nomes — hoje amplamente substituído por módulos ES",
      "Substituir completamente o sistema de módulos ES, sendo a forma recomendada de organizar código em projetos modernos",
      "Executar código de forma assíncrona, funcionando como uma alternativa mais simples às Promises e ao `async/await`",
      "Definir tipos genéricos reutilizáveis que podem ser parametrizados livremente por qualquer tipo concreto do projeto"
    ],
    correctAnswer: 0,
    explanation:
      "Namespaces eram usados para organizar código e evitar colisões de nomes antes da adoção ampla dos módulos ES; hoje, o uso de `import`/`export` é a abordagem recomendada na maioria dos projetos.",
    hint: "Pense em uma forma mais antiga de organizar código, anterior à popularização dos módulos ES no ecossistema JavaScript."
  },
  {
    id: "ts-055",
    category: "typescript",
    topics: ["declaration-files"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Para que servem os arquivos de declaração de tipos (`.d.ts`)?",
    options: [
      "Descrever os tipos de uma biblioteca JavaScript, permitindo que o TypeScript faça checagem de tipos mesmo sem o código-fonte original ser TypeScript",
      "Armazenar a lógica de negócio completa da aplicação, servindo como substituto direto dos arquivos `.ts` comuns",
      "Executar testes automatizados sobre o código-fonte, verificando se os tipos declarados correspondem ao comportamento real",
      "Substituir o arquivo `package.json`, centralizando tanto os metadados do projeto quanto as declarações de tipos"
    ],
    correctAnswer: 0,
    explanation:
      "Arquivos `.d.ts` contêm apenas declarações de tipos, sem implementação, permitindo que bibliotecas escritas em JavaScript puro sejam usadas com checagem de tipos em projetos TypeScript.",
    hint: "Pense em como bibliotecas JavaScript populares (como o jQuery) ganham suporte a tipos no TypeScript."
  },
  {
    id: "ts-056",
    category: "typescript",
    topics: ["strict-null-checks"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que a flag `strictNullChecks` do compilador TypeScript faz quando habilitada?",
    options: [
      "Impede que `null` e `undefined` sejam atribuídos a variáveis de outros tipos, a menos que isso seja explicitamente permitido pelo tipo",
      "Remove `null` e `undefined` da linguagem por completo, fazendo com que o motor JavaScript rejeite esses valores em tempo de execução",
      "Faz com que toda variável passe a aceitar `null` automaticamente, mesmo sem que isso seja declarado explicitamente no tipo",
      "Desativa completamente a inferência de tipos do compilador, exigindo anotação explícita em todas as variáveis do projeto"
    ],
    correctAnswer: 0,
    explanation:
      "Com `strictNullChecks` ativado, `null` e `undefined` só são atribuíveis a tipos que os incluam explicitamente (como `string | null`), ajudando a prevenir erros comuns de referência nula.",
    hint: "Pense em como isso ajuda a evitar o clássico erro 'Cannot read property of undefined'."
  },
  {
    id: "ts-057",
    category: "typescript",
    topics: ["ambient-declarations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que uma declaração ambiente feita com a palavra-chave `declare` (por exemplo, `declare const window: Window`) representa?",
    options: [
      "Uma forma de informar ao TypeScript que algo existe em tempo de execução (definido em outro lugar), sem gerar código JavaScript para essa declaração",
      "Uma variável que será criada automaticamente pelo TypeScript dentro do arquivo `.js` gerado após a compilação",
      "Uma função que só pode ser chamada de forma assíncrona, sendo equivalente a declará-la com a palavra-chave `async`",
      "Uma forma de tornar uma variável privada, restringindo seu acesso apenas ao escopo do módulo onde foi declarada"
    ],
    correctAnswer: 0,
    explanation:
      "`declare` informa ao compilador que determinado valor existe em algum lugar (como um script global ou biblioteca externa), permitindo checagem de tipos sem que o TypeScript gere código para essa declaração.",
    hint: "Pense em como o TypeScript sabe sobre `window` e `document` no navegador sem que você os defina."
  },
  {
    id: "ts-058",
    category: "typescript",
    topics: ["function-overloads", "overload-resolution"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Ao chamar uma função com múltiplas assinaturas de overload, como o TypeScript decide qual assinatura usar?",
    options: [
      "Ele verifica as assinaturas na ordem declarada e usa a primeira que for compatível com os argumentos passados",
      "Ele sempre usa a última assinatura declarada, já que ela normalmente contém a implementação real da função",
      "Ele combina automaticamente todas as assinaturas em uma única assinatura genérica, aceitando qualquer combinação de argumentos",
      "Ele escolhe aleatoriamente entre as assinaturas compatíveis, o que pode gerar comportamento diferente a cada execução"
    ],
    correctAnswer: 0,
    explanation:
      "O TypeScript avalia as assinaturas de overload na ordem em que foram declaradas e seleciona a primeira que corresponde aos tipos dos argumentos fornecidos na chamada.",
    hint: "A ordem das declarações de overload importa para a resolução da chamada."
  },
  {
    id: "ts-059",
    category: "typescript",
    topics: ["variance"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que significa dizer que os arrays em TypeScript são covariantes em relação ao tipo de seus elementos?",
    options: [
      "Um `Dog[]` é considerado compatível com `Animal[]` se Dog for um subtipo de Animal, embora isso possa não ser totalmente seguro em tempo de execução",
      "Arrays nunca podem ser comparados entre tipos diferentes, mesmo quando um deles é um subtipo direto do outro",
      "Arrays sempre exigem exatamente o mesmo tipo declarado na anotação original, sem nenhuma exceção permitida pelo compilador",
      "A covariância de arrays impede completamente que erros ocorram em tempo de execução ao misturar subtipos e supertipos"
    ],
    correctAnswer: 0,
    explanation:
      "TypeScript permite covariância em arrays e outras estruturas por praticidade, tratando `Dog[]` como atribuível a `Animal[]` quando `Dog extends Animal`, embora isso possa introduzir riscos em certos cenários de mutação.",
    hint: "Pense na relação de subtipo entre `Dog` e `Animal` sendo 'propagada' para os arrays desses tipos."
  },
  {
    id: "ts-060",
    category: "typescript",
    topics: ["type-erasure", "compiler"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que significa dizer que os tipos do TypeScript sofrem 'apagamento de tipos' (type erasure) durante a compilação?",
    options: [
      "As anotações de tipo são removidas ao gerar o JavaScript final, pois tipos existem apenas para checagem em tempo de compilação",
      "As variáveis perdem seus valores atuais após a compilação, sendo reinicializadas com seus valores padrão no arquivo `.js`",
      "Os tipos são convertidos em comentários dentro do JavaScript gerado, permitindo que ferramentas externas ainda os leiam",
      "O compilador TypeScript remove automaticamente qualquer função que não seja chamada em nenhum lugar do código"
    ],
    correctAnswer: 0,
    explanation:
      "O compilador do TypeScript (`tsc`) usa os tipos apenas para checagem estática; ao gerar o JavaScript de saída, todas as anotações de tipo são removidas, já que JavaScript não possui tipos em tempo de execução.",
    hint: "Pense no que sobra no arquivo `.js` gerado a partir de um arquivo `.ts`."
  },

  {
    id: "node-001",
    category: "node",
    topics: ["runtime"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é o Node.js?",
    options: [
      "Um runtime JavaScript, baseado no motor V8, que permite executar JavaScript fora do navegador",
      "Uma linguagem de programação própria, derivada do JavaScript, mas com uma sintaxe e um compilador completamente diferentes",
      "Um framework para construir interfaces visuais, semelhante a bibliotecas como React ou Angular, mas voltado ao servidor",
      "Um banco de dados NoSQL otimizado para armazenar documentos JavaScript diretamente em formato binário"
    ],
    correctAnswer: 0,
    explanation:
      "Node.js é um runtime que executa JavaScript no servidor (ou em outros ambientes fora do navegador), utilizando o motor V8 do Google Chrome.",
    hint: "Pense no que torna possível rodar JavaScript sem um navegador."
  },
  {
    id: "node-002",
    category: "node",
    topics: ["call-stack"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é a Call Stack (pilha de chamadas) no Node.js?",
    options: [
      "A estrutura que controla a ordem de execução das funções chamadas, empilhando e desempilhando cada chamada",
      "Uma lista de todos os arquivos do projeto, organizada na ordem em que são carregados pelo `require`",
      "O local da memória onde variáveis globais são armazenadas permanentemente durante toda a execução do processo",
      "Um tipo de banco de dados embutido, usado internamente pelo Node.js para armazenar estados temporários"
    ],
    correctAnswer: 0,
    explanation:
      "A Call Stack é uma estrutura LIFO (último a entrar, primeiro a sair) que controla a execução das funções: cada chamada é empilhada e removida quando termina.",
    hint: "Pense em uma pilha de pratos: o último colocado é o primeiro retirado."
  },
  {
    id: "node-003",
    category: "node",
    topics: ["event-loop"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é o papel do Event Loop no Node.js?",
    options: [
      "Gerenciar a execução de operações assíncronas, permitindo que o Node.js não bloqueie enquanto aguarda tarefas como I/O",
      "Executar todo o código de forma síncrona, uma linha por vez, garantindo que nenhuma tarefa assíncrona seja processada em paralelo",
      "Substituir completamente a Call Stack, assumindo sozinho o controle de todas as chamadas de função do programa",
      "Armazenar as variáveis de ambiente do processo, disponibilizando-as para os módulos carregados durante a execução"
    ],
    correctAnswer: 0,
    explanation:
      "O Event Loop verifica constantemente se a Call Stack está livre para processar callbacks de operações assíncronas (I/O, timers, promises), permitindo concorrência sem múltiplas threads.",
    hint: "Pense em como o Node.js consegue lidar com várias operações de I/O sem travar."
  },
  {
    id: "node-004",
    category: "node",
    topics: ["async"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é a principal diferença entre uma operação síncrona e uma operação assíncrona no Node.js?",
    options: [
      "A operação assíncrona não bloqueia a execução do restante do código enquanto aguarda seu resultado",
      "A operação assíncrona sempre é mais lenta que a síncrona, já que depende exclusivamente do Event Loop para ser concluída",
      "A operação síncrona não pode gerar erros, enquanto qualquer operação assíncrona sempre lança uma exceção não tratada",
      "Não existe diferença prática entre elas, já que o motor V8 executa ambas exatamente na mesma ordem e no mesmo tempo"
    ],
    correctAnswer: 0,
    explanation:
      "Operações assíncronas permitem que o restante do código continue executando enquanto se aguarda o resultado (ex: leitura de arquivo, requisição de rede), evitando bloqueios.",
    hint: "Pense em ler um arquivo grande sem travar o restante da aplicação."
  },
  {
    id: "node-005",
    category: "node",
    topics: ["promises"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que uma Promise representa em JavaScript/Node.js?",
    options: [
      "Um valor que pode estar disponível agora, no futuro, ou nunca (em caso de erro)",
      "Uma função que sempre executa de forma síncrona, bloqueando o restante do código até que seu resultado esteja pronto",
      "Um tipo de variável imutável, cujo valor não pode ser alterado depois de criada, semelhante a uma constante",
      "Um módulo nativo do Node.js, responsável por gerenciar a comunicação entre processos filhos e o processo principal"
    ],
    correctAnswer: 0,
    explanation: "Uma Promise representa o resultado eventual (sucesso ou falha) de uma operação assíncrona.",
    hint: "Pense no significado da palavra 'promessa' aplicado a um resultado futuro."
  },
  {
    id: "node-006",
    category: "node",
    topics: ["async-await"],
    difficulty: "medium",
    type: "code-completion",
    code: `async function fetchUser(id) {\n  const response = await fetch(\`/users/\${id}\`);\n  const user = ______ response.json();\n  return user;\n}`,
    question: "Qual palavra-chave completa corretamente `______`, considerando que `response.json()` também retorna uma Promise?",
    options: ["await", "async", "yield", "return"],
    correctAnswer: 0,
    explanation:
      "`await` pausa a execução da função assíncrona até que a Promise retornada por `response.json()` seja resolvida.",
    hint: "É a mesma palavra-chave usada logo antes de `fetch(...)`."
  },
  {
    id: "node-007",
    category: "node",
    topics: ["modules"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Para que servem os módulos (modules) no Node.js?",
    options: [
      "Organizar o código em arquivos separados e reutilizáveis, que podem exportar e importar funcionalidades entre si",
      "Executar um trecho de código apenas uma única vez durante toda a vida da aplicação, sem possibilidade de reutilização",
      "Substituir totalmente o uso de funções, forçando toda a lógica do programa a ser escrita exclusivamente em classes",
      "Armazenar dados permanentemente em disco, funcionando como uma camada simplificada de persistência de arquivos"
    ],
    correctAnswer: 0,
    explanation:
      "Módulos permitem dividir o código em arquivos organizados, cada um podendo exportar funcionalidades que outros arquivos importam quando necessário.",
    hint: "Pense em como grandes aplicações evitam colocar todo o código em um único arquivo."
  },
  {
    id: "node-008",
    category: "node",
    topics: ["commonjs"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "No padrão CommonJS, como um módulo exporta uma funcionalidade?",
    options: [
      "Usando `module.exports`",
      "Usando `export default` obrigatoriamente",
      "Usando `import`",
      "Módulos CommonJS não podem exportar nada"
    ],
    correctAnswer: 0,
    explanation:
      "No CommonJS (padrão tradicional do Node.js), um módulo expõe suas funcionalidades através de `module.exports`, e outro arquivo as importa com `require()`.",
    hint: "Pense na dupla de funções usada tradicionalmente no Node.js antes do suporte a ESM."
  },
  {
    id: "node-009",
    category: "node",
    topics: ["esm", "commonjs"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é uma diferença relevante entre ESM (`import`/`export`) e CommonJS (`require`/`module.exports`) no Node.js?",
    options: [
      "ESM é carregado de forma estática e suporta top-level await; CommonJS é carregado de forma síncrona e dinâmica via `require`",
      "CommonJS é considerado mais moderno que ESM, sendo a abordagem recomendada para novos projetos Node.js a partir das versões recentes",
      "ESM não pode ser utilizado em nenhuma versão do Node.js, estando disponível apenas em bundlers como Webpack ou Vite",
      "Não há nenhuma diferença de comportamento entre eles; ambos resolvem módulos de forma idêntica em tempo de execução"
    ],
    correctAnswer: 0,
    explanation:
      "ESM utiliza análise estática de importações (permitindo recursos como top-level await), enquanto CommonJS resolve módulos dinamicamente em tempo de execução via `require`.",
    hint: "Pense em qual dos dois sistemas permite usar `await` fora de uma função `async`."
  },
  {
    id: "node-010",
    category: "node",
    topics: ["package-json"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é a função do arquivo `package.json` em um projeto Node.js?",
    options: [
      "Descrever metadados do projeto, como dependências, scripts e versão",
      "Armazenar o código-fonte principal da aplicação, substituindo a necessidade de arquivos `.js` separados",
      "Guardar variáveis de ambiente sensíveis, como senhas de banco de dados e chaves de API do projeto",
      "Substituir o uso de módulos, centralizando toda a lógica de importação e exportação em um único arquivo"
    ],
    correctAnswer: 0,
    explanation:
      "O `package.json` centraliza informações do projeto: nome, versão, dependências, scripts de execução, entre outros metadados.",
    hint: "É o primeiro arquivo que ferramentas como o npm consultam ao instalar dependências."
  },
  {
    id: "node-011",
    category: "node",
    topics: ["npm"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é o npm?",
    options: [
      "O gerenciador de pacotes padrão do Node.js, usado para instalar e gerenciar dependências",
      "Um framework para criação de interfaces gráficas, utilizado em conjunto com o Node.js para aplicações desktop",
      "Uma linguagem de programação alternativa ao JavaScript, criada especificamente para escrever scripts de instalação",
      "Um tipo de banco de dados embutido no Node.js, usado para armazenar informações sobre pacotes instalados"
    ],
    correctAnswer: 0,
    explanation:
      "O npm (Node Package Manager) é o gerenciador de pacotes padrão do ecossistema Node.js, usado para instalar, atualizar e gerenciar dependências.",
    hint: "É a ferramenta usada em comandos como 'install' de bibliotecas externas."
  },
  {
    id: "node-012",
    category: "node",
    topics: ["process"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o objeto global `process` disponibiliza em uma aplicação Node.js?",
    options: [
      "Informações e controle sobre o processo em execução, como argumentos, variáveis de ambiente e código de saída",
      "Uma conexão automática com o banco de dados configurado no projeto, disponível globalmente em qualquer módulo",
      "O conteúdo de arquivos HTML renderizados pelo servidor, disponível para manipulação direta pelo código Node.js",
      "Uma lista de todos os módulos instalados no projeto, incluindo suas respectivas versões e dependências transitivas"
    ],
    correctAnswer: 0,
    explanation:
      "`process` é um objeto global que fornece informações sobre o processo Node.js em execução, incluindo `process.env`, `process.argv` e `process.exit()`.",
    hint: "Pense em informações sobre o próprio programa em execução, não sobre os dados que ele manipula."
  },
  {
    id: "node-013",
    category: "node",
    topics: ["environment-variables"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Como variáveis de ambiente são tipicamente acessadas em uma aplicação Node.js?",
    options: [
      "Através de `process.env`",
      "Através de `require(\"env\")`",
      "Através de `module.env`",
      "Elas não podem ser acessadas em tempo de execução"
    ],
    correctAnswer: 0,
    explanation:
      "Variáveis de ambiente ficam disponíveis através do objeto `process.env`, permitindo configurar a aplicação sem alterar o código-fonte.",
    hint: "É o mesmo objeto global usado para obter informações sobre o processo em execução."
  },
  {
    id: "node-014",
    category: "node",
    topics: ["file-system"],
    difficulty: "medium",
    type: "code-completion",
    code: `const fs = require("fs");\n\nfs.readFile("dados.txt", "utf-8", (error, content) => {\n  if (______) {\n    console.error("Erro ao ler o arquivo:", error);\n    return;\n  }\n  console.log(content);\n});`,
    question: "Qual condição completa corretamente `______`, verificando se ocorreu um erro na leitura do arquivo?",
    options: ["error", "content", "!content", "fs.error"],
    correctAnswer: 0,
    explanation:
      "No padrão de callback do Node.js (error-first callback), o primeiro parâmetro (`error`) é verificado para saber se a operação falhou.",
    hint: "O padrão de callbacks do Node.js coloca o erro sempre como o primeiro parâmetro."
  },
  {
    id: "node-015",
    category: "node",
    topics: ["streams"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é a principal vantagem de usar Streams ao processar arquivos muito grandes?",
    options: [
      "Permitir processar os dados em pequenos pedaços (chunks), sem carregar o arquivo inteiro na memória",
      "Carregar o arquivo inteiro na memória de uma só vez, o que acelera o processamento em qualquer cenário de uso",
      "Eliminar completamente a necessidade de tratamento de erros durante a leitura ou escrita de arquivos grandes",
      "Funcionar exclusivamente com arquivos de texto simples, sem suporte a dados binários como imagens ou vídeos"
    ],
    correctAnswer: 0,
    explanation:
      "Streams processam dados em pequenos pedaços (chunks) de forma contínua, evitando carregar o conteúdo inteiro na memória — essencial para arquivos grandes.",
    hint: "Pense em como seria ineficiente carregar um arquivo de vários gigabytes de uma só vez."
  },
  {
    id: "node-016",
    category: "node",
    topics: ["buffers"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que é um Buffer no Node.js?",
    options: [
      "Uma estrutura para representar dados binários brutos de tamanho fixo na memória",
      "Um tipo especial de Promise, criado automaticamente sempre que uma operação assíncrona de I/O é iniciada",
      "Um arquivo de configuração do projeto, usado para definir variáveis compartilhadas entre diferentes módulos",
      "Um módulo exclusivo para lidar com requisições HTTP, substituindo a necessidade do módulo nativo `http`"
    ],
    correctAnswer: 0,
    explanation:
      "Um Buffer representa uma sequência de bytes (dados binários) de tamanho fixo, usado, por exemplo, ao lidar com arquivos, streams ou dados de rede.",
    hint: "Pense em dados que ainda não foram convertidos para texto, como o conteúdo bruto de uma imagem."
  },
  {
    id: "node-017",
    category: "node",
    topics: ["http"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual módulo nativo do Node.js é utilizado para criar um servidor HTTP básico?",
    options: ["http", "fs", "path", "events"],
    correctAnswer: 0,
    explanation:
      "O módulo nativo `http` fornece a função `createServer`, usada para criar servidores HTTP sem depender de frameworks externos.",
    hint: "O nome do módulo corresponde diretamente ao protocolo que ele implementa."
  },
  {
    id: "node-018",
    category: "node",
    topics: ["error-handling"],
    difficulty: "medium",
    type: "code-completion",
    code: `async function loadData() {\n  ______ {\n    const data = await fetchFromApi();\n    return data;\n  } catch (error) {\n    console.error("Falha ao carregar dados:", error);\n  }\n}`,
    question: "Qual palavra-chave completa `______`, permitindo capturar erros lançados dentro do bloco assíncrono?",
    options: ["try", "catch", "async", "throw"],
    correctAnswer: 0,
    explanation: "O bloco `try` envolve o código que pode lançar uma exceção; se isso ocorrer, o controle passa para o bloco `catch`.",
    hint: "É a primeira metade de uma estrutura de tratamento de erros usada em pares."
  },
  {
    id: "node-019",
    category: "node",
    topics: ["architecture", "typescript", "oop"],
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Uma API Node.js escrita em TypeScript concentra toda a lógica de negócio, acesso ao banco de dados e validação de entrada dentro dos handlers de rota. Qual mudança arquitetural melhora a manutenibilidade dessa aplicação?",
    options: [
      "Separar as responsabilidades em camadas (ex: controllers, services e repositories), cada uma com uma responsabilidade única",
      "Unificar ainda mais o código em um único arquivo, reduzindo a quantidade de arquivos e facilitando a leitura sequencial",
      "Remover toda a validação de entrada dos handlers, confiando inteiramente nos dados enviados pelo cliente da API",
      "Substituir o TypeScript por JavaScript puro, eliminando a sobrecarga da checagem de tipos durante o desenvolvimento"
    ],
    correctAnswer: 0,
    explanation:
      "Separar responsabilidades em camadas (controller, service, repository) reduz o acoplamento, facilita testes e segue o Princípio da Responsabilidade Única.",
    hint: "Pense em como o Princípio da Responsabilidade Única se aplica à organização de uma API."
  },
  {
    id: "node-020",
    category: "node",
    topics: ["event-loop"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `console.log("1");\n\nsetTimeout(() => console.log("2"), 0);\n\nPromise.resolve().then(() => console.log("3"));\n\nconsole.log("4");`,
    question: "Qual é a ordem correta de saída no console ao executar o código acima?",
    options: ["1, 4, 3, 2", "1, 2, 3, 4", "1, 4, 2, 3", "1, 3, 4, 2"],
    correctAnswer: 0,
    explanation:
      "O código síncrono executa primeiro (1 e 4). Em seguida, a microtask da Promise (3) é processada antes da macrotask do `setTimeout` (2), pois microtasks têm prioridade no Event Loop.",
    hint: "Promises são processadas como microtasks, que têm prioridade sobre timers (macrotasks)."
  },
  {
    id: "node-021",
    category: "node",
    topics: ["events", "eventemitter"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const EventEmitter = require("events");\n\nconst emitter = new EventEmitter();\n\nemitter.on("greet", (name) => {\n  console.log("Olá, " + name + "!");\n});\n\nemitter.emit("greet", "Maria");`,
    question: "O que a classe `EventEmitter` permite implementar no código acima?",
    options: [
      "Um padrão de observador (publish/subscribe), onde ouvintes reagem a eventos emitidos",
      "Uma conexão direta e persistente com o banco de dados configurado, reaproveitada por todos os módulos do projeto",
      "Uma requisição HTTP disparada automaticamente sempre que o método `emit` é chamado dentro do código",
      "Um sistema de arquivos virtual, usado para simular leitura e escrita de arquivos durante testes automatizados"
    ],
    correctAnswer: 0,
    explanation:
      "`EventEmitter` é a base de grande parte da API assíncrona do Node.js, implementando o padrão Observer: métodos `on` registram ouvintes, e `emit` dispara o evento, executando todos os ouvintes registrados.",
    hint: "Pense no padrão de projeto Observer aplicado a eventos nomeados."
  },
  {
    id: "node-022",
    category: "node",
    topics: ["path"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const path = require("path");\n\nconsole.log(path.join("/users", "docs", "../photos"));\nconsole.log(path.resolve("users", "docs"));`,
    question: "Qual é a principal diferença entre `path.join` e `path.resolve`?",
    options: [
      "`path.join` apenas concatena e normaliza os segmentos; `path.resolve` retorna um caminho absoluto, considerando o diretório de trabalho atual quando necessário",
      "Ambos fazem exatamente a mesma coisa, sendo apenas nomes alternativos para a mesma função interna do módulo `path`",
      "`path.resolve` só funciona corretamente em sistemas Windows, exigindo um módulo adicional para funcionar no Linux",
      "`path.join` sempre retorna um caminho absoluto, independentemente de os segmentos informados serem relativos ou não"
    ],
    correctAnswer: 0,
    explanation:
      "`path.join` concatena e normaliza segmentos de caminho (resolvendo `..` e `.`), mantendo o resultado relativo se os argumentos forem relativos. `path.resolve` processa os segmentos da direita para a esquerda até formar um caminho absoluto, usando `process.cwd()` como base se necessário.",
    hint: "Pense em qual das duas funções garante um caminho absoluto, mesmo com entradas relativas."
  },
  {
    id: "node-023",
    category: "node",
    topics: ["url"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const { URL } = require("url");\n\nconst myUrl = new URL("https://site.com/busca?termo=nodejs&pagina=2");\n\nconsole.log(myUrl.searchParams.get("termo"));`,
    question: "O que será impresso no console pelo código acima?",
    options: ["nodejs", "https://site.com/busca", "pagina=2", "undefined"],
    correctAnswer: 0,
    explanation:
      "`URL` interpreta a string como uma URL estruturada, e `searchParams.get(\"termo\")` retorna o valor do parâmetro de busca `termo`, que é `\"nodejs\"`.",
    hint: "Observe o parâmetro de query especificado na chamada de `get`."
  },
  {
    id: "node-024",
    category: "node",
    topics: ["crypto"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const crypto = require("crypto");\n\nconst hash = crypto.createHash("sha256").update("minha-senha").digest("hex");\n\nconsole.log(hash.length);`,
    question: "Por que utilizar `crypto.createHash` é mais seguro do que armazenar senhas em texto puro?",
    options: [
      "O hash transforma a senha em uma sequência irreversível (não pode ser revertida diretamente para o valor original), reduzindo o risco em caso de vazamento",
      "O hash criptografa a senha de forma reversível, utilizando uma chave secreta que pode decodificá-la quando necessário",
      "O hash apenas comprime a senha para ocupar menos espaço em disco, sem nenhum benefício adicional de segurança",
      "O hash impede completamente qualquer tipo de ataque de força bruta, tornando desnecessário o uso de salt"
    ],
    correctAnswer: 0,
    explanation:
      "Funções de hash como SHA-256 são unidirecionais: não é possível obter a senha original a partir do hash diretamente, o que reduz o impacto em caso de vazamento do banco de dados (embora, na prática, senhas devam usar hashes com salt, como bcrypt, e não SHA puro).",
    hint: "Pense na diferença entre criptografia (reversível) e hashing (unidirecional)."
  },
  {
    id: "node-025",
    category: "node",
    topics: ["os"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `const os = require("os");\n\nconsole.log(os.platform());\nconsole.log(os.cpus().length);`,
    question: "O que o módulo nativo `os` fornece no exemplo acima?",
    options: [
      "Informações sobre o sistema operacional em que o processo Node.js está sendo executado",
      "Informações detalhadas sobre o sistema de arquivos do projeto, incluindo permissões de leitura e escrita",
      "Uma conexão automática com o banco de dados configurado nas variáveis de ambiente do sistema operacional",
      "O conteúdo completo das variáveis de ambiente definidas no arquivo `.env` do projeto atual"
    ],
    correctAnswer: 0,
    explanation:
      "O módulo `os` fornece informações relacionadas ao sistema operacional, como a plataforma (`platform()`) e o número de CPUs disponíveis (`cpus().length`).",
    hint: "O nome do módulo já indica que ele lida com informações do 'sistema operacional'."
  },
  {
    id: "node-026",
    category: "node",
    topics: ["http", "https"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const https = require("https");\n\nhttps.get("https://api.exemplo.com/dados", (res) => {\n  console.log(res.statusCode);\n});`,
    question: "Por que esse código usa o módulo `https` em vez do módulo `http`?",
    options: [
      "Porque a URL utiliza o protocolo HTTPS, que exige um módulo com suporte a TLS/SSL para conexões criptografadas",
      "Porque o módulo `https` é sempre mais rápido que o `http`, independentemente do protocolo utilizado na URL de destino",
      "Porque o módulo `http` foi descontinuado nas versões recentes do Node.js e substituído completamente pelo `https`",
      "Não há nenhuma diferença real entre os dois módulos; ambos implementam exatamente o mesmo protocolo internamente"
    ],
    correctAnswer: 0,
    explanation:
      "O módulo `https` implementa o protocolo HTTP sobre uma camada de criptografia TLS/SSL, sendo necessário para se conectar a URLs que começam com `https://`.",
    hint: "Observe o protocolo indicado na própria URL passada para a função."
  },
  {
    id: "node-027",
    category: "node",
    topics: ["express", "middleware"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const express = require("express");\nconst app = express();\n\napp.use((req, res, next) => {\n  console.log(req.method + " " + req.url);\n  next();\n});\n\napp.get("/", (req, res) => {\n  res.send("Página inicial");\n});`,
    question: "Qual é o papel da chamada `next()` dentro do middleware registrado com `app.use`?",
    options: [
      "Passar o controle para o próximo middleware ou rota na cadeia de processamento da requisição",
      "Encerrar a requisição imediatamente sem enviar nenhuma resposta, liberando a conexão para o próximo cliente",
      "Reiniciar o servidor Express, recarregando todos os middlewares registrados desde o início da aplicação",
      "Enviar a resposta ao cliente automaticamente, dispensando a necessidade de chamar `res.send` posteriormente"
    ],
    correctAnswer: 0,
    explanation:
      "Em middlewares Express, `next()` transfere o controle da requisição para o próximo middleware ou handler de rota registrado; sem chamá-lo, a requisição ficaria travada nesse middleware.",
    hint: "Pense em uma cadeia de funções onde cada uma decide se e quando passa adiante."
  },
  {
    id: "node-028",
    category: "node",
    topics: ["express", "rest"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `app.get("/users/:id", (req, res) => {\n  const userId = req.params.id;\n  res.json({ id: userId, name: "Ana" });\n});`,
    question: "Como o valor de `userId` é obtido a partir de uma requisição para `/users/42`?",
    options: [
      "Através de `req.params.id`, que captura o segmento dinâmico `:id` definido na rota",
      "Através de `req.query.id`, já que qualquer segmento dinâmico da rota é automaticamente convertido em query string",
      "Através de `req.body.id`, pois o Express sempre inclui os parâmetros de rota dentro do corpo da requisição",
      "O valor precisa ser extraído manualmente com expressões regulares aplicadas sobre `req.url`, já que o Express não faz isso automaticamente"
    ],
    correctAnswer: 0,
    explanation:
      "Segmentos de rota prefixados com `:` (como `:id`) são parâmetros dinâmicos, acessíveis através de `req.params` no Express.",
    hint: "Repare no `:id` dentro da definição da rota `/users/:id`."
  },
  {
    id: "node-029",
    category: "node",
    topics: ["streams", "readable"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const fs = require("fs");\n\nconst readStream = fs.createReadStream("arquivo-grande.txt", { encoding: "utf-8" });\n\nreadStream.on("data", (chunk) => {\n  console.log("Recebido pedaço de " + chunk.length + " caracteres");\n});\n\nreadStream.on("end", () => {\n  console.log("Leitura concluída");\n});`,
    question: "Qual evento é emitido repetidamente conforme os dados do arquivo são lidos em pedaços?",
    options: ["data", "end", "close", "error"],
    correctAnswer: 0,
    explanation:
      "O evento `\"data\"` é emitido cada vez que um novo chunk de dados está disponível para leitura em uma Readable Stream; `\"end\"` é emitido apenas uma vez, ao final da leitura.",
    hint: "Pense em qual evento corresponde a cada pedaço (chunk), e qual corresponde à finalização única do processo."
  },
  {
    id: "node-030",
    category: "node",
    topics: ["streams", "writable"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const fs = require("fs");\n\nconst writeStream = fs.createWriteStream("saida.txt");\n\nwriteStream.write("Primeira linha\\n");\nwriteStream.write("Segunda linha\\n");\nwriteStream.end();`,
    question: "O que o método `end()` faz em uma Writable Stream, além de opcionalmente escrever um último pedaço de dado?",
    options: [
      "Sinaliza que nenhum outro dado será escrito, permitindo que a stream finalize o processo de escrita e libere recursos",
      "Apaga todo o conteúdo que já havia sido escrito anteriormente na stream, reiniciando o arquivo de saída do zero",
      "Interrompe imediatamente a escrita sem finalizar nenhuma pendência, descartando os dados que ainda estavam no buffer",
      "Converte a Writable Stream em uma Readable Stream, permitindo ler de volta os dados que acabaram de ser escritos"
    ],
    correctAnswer: 0,
    explanation:
      "`end()` indica que a escrita foi concluída; a stream então finaliza pendências, emite o evento `\"finish\"` e libera o recurso associado (como o descritor do arquivo).",
    hint: "Pense em como a stream sabe que não há mais dados a esperar."
  },
  {
    id: "node-031",
    category: "node",
    topics: ["streams", "pipe"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const fs = require("fs");\n\nconst readStream = fs.createReadStream("entrada.txt");\nconst writeStream = fs.createWriteStream("saida.txt");\n\nreadStream.pipe(writeStream);`,
    question: "O que o método `pipe()` faz ao conectar uma Readable Stream a uma Writable Stream?",
    options: [
      "Transfere automaticamente os dados lidos para a stream de escrita, já gerenciando o controle de fluxo (backpressure)",
      "Copia o arquivo inteiro para a memória do processo antes de iniciar a escrita no destino, garantindo maior confiabilidade",
      "Cria uma cópia do arquivo apenas em modo leitura, sem nenhuma escrita real ocorrendo no arquivo de destino",
      "Impede que qualquer erro ocorra durante a transferência de dados, tratando automaticamente exceções nas duas streams"
    ],
    correctAnswer: 0,
    explanation:
      "`pipe()` conecta a saída de uma Readable Stream diretamente à entrada de uma Writable Stream, gerenciando automaticamente o ritmo de leitura/escrita (backpressure) sem exigir controle manual de eventos `\"data\"`.",
    hint: "Pense nisso como 'encanar' a saída de uma stream diretamente para a entrada de outra."
  },
  {
    id: "node-032",
    category: "node",
    topics: ["streams", "backpressure"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const canContinue = writeStream.write(largeChunk);\n\nif (!canContinue) {\n  readStream.pause();\n  writeStream.once("drain", () => {\n    readStream.resume();\n  });\n}`,
    question: "O que esse código está tratando ao verificar o retorno de `write()` e reagir ao evento `\"drain\"`?",
    options: [
      "Backpressure: pausar a leitura quando a escrita não consegue acompanhar o ritmo, evitando acúmulo excessivo de dados em memória",
      "Um erro de conexão de rede, que precisa ser tratado reiniciando manualmente tanto a stream de leitura quanto a de escrita",
      "A finalização normal da stream, que ocorre sempre que o método `write` é chamado pela última vez no código",
      "Uma tentativa automática de reconexão ao arquivo de origem, caso ele tenha sido movido durante a leitura"
    ],
    correctAnswer: 0,
    explanation:
      "Quando `write()` retorna `false`, o buffer interno da Writable Stream está cheio; pausar a leitura e aguardar o evento `\"drain\"` (que indica que o buffer foi esvaziado) evita consumo excessivo de memória — esse mecanismo é chamado de backpressure.",
    hint: "Pense no que acontece se a origem dos dados for muito mais rápida que o destino."
  },
  {
    id: "node-033",
    category: "node",
    topics: ["fs-promises", "async-await"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const fs = require("fs/promises");\n\nasync function readConfig() {\n  const content = await fs.readFile("config.json", "utf-8");\n  return JSON.parse(content);\n}`,
    question: "Qual é a vantagem de usar `fs/promises` em vez da API tradicional de callbacks do módulo `fs`?",
    options: [
      "Permite usar `async/await`, tornando o código assíncrono mais legível e evitando o aninhamento excessivo de callbacks",
      "É a única forma de ler arquivos no Node.js, já que a API tradicional baseada em callbacks foi removida das versões recentes",
      "Torna a leitura do arquivo síncrona, bloqueando o Event Loop até que todo o conteúdo tenha sido carregado",
      "Elimina completamente a necessidade de tratar erros, já que `fs/promises` nunca rejeita a Promise retornada"
    ],
    correctAnswer: 0,
    explanation:
      "A API `fs/promises` retorna Promises em vez de aceitar callbacks, permitindo o uso de `async/await` para um código mais legível, mantendo o comportamento assíncrono e não bloqueante.",
    hint: "Pense em como `async/await` simplifica a leitura de código comparado a callbacks aninhados."
  },
  {
    id: "node-034",
    category: "node",
    topics: ["async-iterators", "streams"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `async function processLines(readable) {\n  for await (const chunk of readable) {\n    console.log(chunk.toString());\n  }\n}`,
    question: "O que a sintaxe `for await...of` permite fazer no código acima?",
    options: [
      "Iterar de forma assíncrona sobre os pedaços (chunks) emitidos por uma stream, aguardando cada um antes de continuar",
      "Executar o loop de forma síncrona, ignorando completamente a natureza assíncrona da stream que está sendo consumida",
      "Transformar a stream inteira em um array na memória antes de iniciar a iteração sobre os elementos",
      "Substituir completamente o uso de eventos como `\"data\"` e `\"end\"`, tornando-os inválidos ao trabalhar com streams"
    ],
    correctAnswer: 0,
    explanation:
      "`for await...of` permite consumir iteráveis assíncronos (como streams, que implementam `Symbol.asyncIterator`) de forma sequencial, aguardando cada valor antes de processar o próximo.",
    hint: "Repare que a palavra-chave `await` aparece dentro do próprio laço `for`."
  },
  {
    id: "node-035",
    category: "node",
    topics: ["generators"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `function* idGenerator() {\n  let id = 1;\n  while (true) {\n    yield id;\n    id++;\n  }\n}\n\nconst gen = idGenerator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);`,
    question: "O que será impresso pelas duas chamadas a `gen.next().value`?",
    options: ["1 e 2", "1 e 1", "undefined e undefined", "0 e 1"],
    correctAnswer: 0,
    explanation:
      "Cada chamada a `next()` executa a função geradora até o próximo `yield`, pausando sua execução e retornando o valor gerado. A primeira chamada retorna 1; a segunda continua de onde parou e retorna 2.",
    hint: "Lembre-se de que uma função geradora 'pausa' sua execução em cada `yield`, mantendo seu estado entre chamadas."
  },
  {
    id: "node-036",
    category: "node",
    topics: ["event-loop", "process-nexttick", "setimmediate"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `console.log("início");\n\nsetImmediate(() => console.log("setImmediate"));\n\nprocess.nextTick(() => console.log("nextTick"));\n\nconsole.log("fim");`,
    question: "Qual é a ordem correta de execução no console?",
    options: [
      "início, fim, nextTick, setImmediate",
      "início, fim, setImmediate, nextTick",
      "início, nextTick, fim, setImmediate",
      "início, fim, setImmediate, início"
    ],
    correctAnswer: 0,
    explanation:
      "O código síncrono executa primeiro (início, fim). `process.nextTick` tem prioridade máxima entre as tarefas assíncronas, sendo executado antes de qualquer fase do Event Loop, incluindo `setImmediate`.",
    hint: "`process.nextTick` sempre é processado antes de qualquer callback agendado por `setImmediate` ou timers."
  },
  {
    id: "node-037",
    category: "node",
    topics: ["buffer"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const buffer = Buffer.from("Olá", "utf-8");\n\nconsole.log(buffer);\nconsole.log(buffer.toString("utf-8"));`,
    question: "O que `Buffer.from(\"Olá\", \"utf-8\")` cria?",
    options: [
      "Uma representação binária (sequência de bytes) da string \"Olá\", codificada em UTF-8",
      "Uma nova string idêntica a \"Olá\", apenas armazenada em uma variável com um tipo diferente chamado Buffer",
      "Um array de números aleatórios, gerado independentemente do conteúdo textual passado como argumento",
      "Um erro em tempo de execução, já que o método `Buffer.from` não aceita caracteres acentuados como entrada"
    ],
    correctAnswer: 0,
    explanation:
      "`Buffer.from` converte dados (como uma string) em uma sequência de bytes, usando a codificação especificada. `toString(\"utf-8\")` faz o processo inverso, reconstruindo a string original a partir dos bytes.",
    hint: "Pense em Buffer como a representação 'crua', em bytes, de uma informação."
  },
  {
    id: "node-038",
    category: "node",
    topics: ["zlib", "streams"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const zlib = require("zlib");\nconst fs = require("fs");\n\nfs.createReadStream("arquivo.txt")\n  .pipe(zlib.createGzip())\n  .pipe(fs.createWriteStream("arquivo.txt.gz"));`,
    question: "O que o módulo `zlib` está sendo usado para fazer nesse código?",
    options: [
      "Comprimir o conteúdo do arquivo usando o algoritmo Gzip, enquanto os dados fluem através das streams",
      "Criptografar o conteúdo do arquivo com uma chave secreta, protegendo-o contra acesso não autorizado durante a transferência",
      "Converter o conteúdo do arquivo de texto puro para o formato JSON, preparando-o para ser enviado por uma API",
      "Ler o arquivo inteiro de forma síncrona, carregando todo o seu conteúdo na memória antes de qualquer processamento"
    ],
    correctAnswer: 0,
    explanation:
      "`zlib.createGzip()` retorna uma stream de transformação (Transform Stream) que comprime os dados que passam por ela, permitindo compactar arquivos grandes de forma eficiente em memória, através de `pipe`.",
    hint: "Pense no que o formato de arquivo `.gz` normalmente representa."
  },
  {
    id: "node-039",
    category: "node",
    topics: ["net", "tcp"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const net = require("net");\n\nconst server = net.createServer((socket) => {\n  socket.write("Conectado ao servidor TCP");\n  socket.on("data", (data) => {\n    console.log("Recebido: " + data);\n  });\n});\n\nserver.listen(4000);`,
    question: "Em qual nível de abstração o módulo `net` opera, comparado ao módulo `http`?",
    options: [
      "Um nível mais baixo: `net` trabalha diretamente com conexões TCP, enquanto `http` já implementa o protocolo HTTP sobre TCP",
      "Um nível mais alto que `http`, já que `net` abstrai completamente os detalhes de rede e cabeçalhos do protocolo",
      "O mesmo nível de abstração; `net` e `http` podem ser usados de forma intercambiável em qualquer situação",
      "O módulo `net` funciona apenas para conexões UDP, sendo incompatível com o protocolo TCP utilizado pelo `http`"
    ],
    correctAnswer: 0,
    explanation:
      "O módulo `net` fornece uma API para criar servidores e clientes TCP em um nível mais baixo, enquanto `http` é construído sobre TCP, já implementando o protocolo HTTP (parsing de requisições, cabeçalhos, etc.).",
    hint: "Pense em qual módulo exige lidar diretamente com sockets, sem o protocolo HTTP já implementado."
  },
  {
    id: "node-040",
    category: "node",
    topics: ["dns"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `const dns = require("dns");\n\ndns.lookup("exemplo.com", (err, address) => {\n  if (err) throw err;\n  console.log("Endereço IP: " + address);\n});`,
    question: "O que a função `dns.lookup` realiza no código acima?",
    options: [
      "Resolve o nome de domínio \"exemplo.com\" para um endereço IP correspondente",
      "Envia uma requisição HTTP completa para o domínio informado, retornando o corpo da resposta recebida",
      "Verifica se o domínio informado está corretamente registrado junto a uma autoridade certificadora",
      "Cria um novo registro de domínio na infraestrutura de DNS configurada para o servidor local"
    ],
    correctAnswer: 0,
    explanation:
      "`dns.lookup` realiza a resolução de nomes, convertendo um hostname (como \"exemplo.com\") em um endereço IP utilizável para estabelecer conexões de rede.",
    hint: "Pense no papel do DNS na internet: traduzir nomes em endereços IP."
  },
  {
    id: "node-041",
    category: "node",
    topics: ["dirname", "filename"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `console.log(__dirname);\nconsole.log(__filename);`,
    question: "O que as variáveis `__dirname` e `__filename` representam em um módulo CommonJS do Node.js?",
    options: [
      "O caminho absoluto do diretório e do arquivo do módulo atual, respectivamente",
      "O nome da função que está sendo executada no momento, incluindo o número da linha onde ela foi chamada",
      "O diretório onde o próprio executável do Node.js foi instalado no sistema operacional do usuário",
      "Variáveis de ambiente definidas manualmente pelo usuário antes de iniciar a execução do script"
    ],
    correctAnswer: 0,
    explanation:
      "`__dirname` contém o caminho absoluto do diretório onde o arquivo atual está localizado, e `__filename` contém o caminho absoluto completo do próprio arquivo — ambos disponíveis automaticamente em módulos CommonJS.",
    hint: "Pense em informações sobre a localização do próprio arquivo em execução."
  },
  {
    id: "node-042",
    category: "node",
    topics: ["process-argv"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `// Executado com: node script.js --porta 3000\nconsole.log(process.argv);`,
    question: "O que o array `process.argv` contém ao executar `node script.js --porta 3000`?",
    options: [
      "O caminho do executável Node.js, o caminho do script, seguidos dos argumentos passados na linha de comando",
      "Apenas os argumentos `--porta` e `3000`, já que o Node.js remove automaticamente os dois primeiros elementos do array",
      "As variáveis de ambiente do sistema operacional, convertidas automaticamente em um array de strings pelo Node.js",
      "O conteúdo textual completo do arquivo `script.js`, dividido em um array onde cada elemento é uma linha do código"
    ],
    correctAnswer: 0,
    explanation:
      "`process.argv` é um array em que os dois primeiros elementos são o caminho do executável Node.js e o caminho do script executado; os elementos seguintes são os argumentos passados na linha de comando.",
    hint: "Lembre-se de que os dois primeiros itens do array não são argumentos definidos pelo usuário."
  },
  {
    id: "node-043",
    category: "node",
    topics: ["process-exit"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `if (!configValida) {\n  console.error("Configuração inválida");\n  process.exit(1);\n}`,
    question: "O que o código de saída `1` passado para `process.exit(1)` normalmente indica?",
    options: [
      "Que o processo foi encerrado devido a um erro ou condição anormal",
      "Que o processo foi encerrado com sucesso, seguindo a convenção padrão adotada pela maioria dos sistemas operacionais",
      "Que o processo será reiniciado automaticamente pelo Node.js assim que o código de saída for recebido pelo sistema",
      "Que o processo entrará em um modo de espera, aguardando uma nova instrução antes de encerrar definitivamente"
    ],
    correctAnswer: 0,
    explanation:
      "Por convenção, um código de saída `0` indica sucesso, enquanto qualquer valor diferente de zero (como `1`) indica que o processo terminou devido a algum erro ou condição excepcional.",
    hint: "Pense na convenção usada pela maioria dos sistemas operacionais para indicar sucesso ou falha de um processo."
  },
  {
    id: "node-044",
    category: "node",
    topics: ["unhandled-rejection", "promises"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `process.on("unhandledRejection", (reason) => {\n  console.error("Promise rejeitada sem tratamento:", reason);\n});\n\nPromise.reject(new Error("Falha inesperada"));`,
    question: "Quando o evento `\"unhandledRejection\"` do objeto `process` é disparado?",
    options: [
      "Quando uma Promise é rejeitada e nenhum `.catch()` (ou `try/catch` com await) trata o erro",
      "Sempre que uma nova Promise é criada no código, independentemente de ela ser resolvida ou rejeitada posteriormente",
      "Quando uma Promise é resolvida com sucesso, permitindo registrar o valor retornado antes de continuar a execução",
      "Apenas quando um servidor HTTP construído com o módulo `http` responde explicitamente com o código de status 500"
    ],
    correctAnswer: 0,
    explanation:
      "O evento `\"unhandledRejection\"` é emitido quando uma Promise rejeitada não possui nenhum handler de erro associado, permitindo capturar e registrar esses casos, que de outra forma poderiam passar despercebidos.",
    hint: "Pense no que acontece quando você esquece de adicionar um `.catch()` a uma Promise."
  },
  {
    id: "node-045",
    category: "node",
    topics: ["uncaught-exception"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `process.on("uncaughtException", (error) => {\n  console.error("Erro não tratado:", error);\n  process.exit(1);\n});`,
    question: "Por que geralmente é recomendado encerrar o processo (`process.exit`) após capturar um `\"uncaughtException\"`?",
    options: [
      "Porque, após uma exceção não tratada, o estado da aplicação pode estar inconsistente, tornando arriscado continuar a execução normalmente",
      "Porque o Node.js exige, por especificação da linguagem, o encerramento do processo após qualquer evento emitido pelo `process`",
      "Porque o evento `uncaughtException` só é disparado quando a aplicação está sem memória disponível para continuar",
      "Porque continuar a execução normalmente sempre corrige o erro automaticamente na próxima iteração do Event Loop"
    ],
    correctAnswer: 0,
    explanation:
      "Uma exceção não tratada pode deixar a aplicação em um estado imprevisível (recursos parcialmente liberados, variáveis inconsistentes); por isso, a prática recomendada é registrar o erro e encerrar o processo de forma controlada, geralmente reiniciado por um gerenciador de processos.",
    hint: "Pense no risco de continuar executando código após um erro que não deveria ter ocorrido."
  },
  {
    id: "node-046",
    category: "node",
    topics: ["modules", "circular-dependency"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `// a.js\nconst b = require("./b");\nmodule.exports = { name: "a", b };\n\n// b.js\nconst a = require("./a");\nmodule.exports = { name: "b", a };`,
    question: "O que tende a acontecer ao criar uma dependência circular entre os módulos `a.js` e `b.js` como no exemplo?",
    options: [
      "Um dos módulos recebe uma versão incompleta (parcial) do outro, pois o `module.exports` ainda não foi totalmente preenchido no momento do `require` circular",
      "O Node.js impede completamente a execução do programa, lançando um erro fatal assim que a dependência circular é detectada",
      "Os dois módulos são automaticamente combinados em um único módulo, unificando suas exportações em tempo de execução",
      "Não há nenhum problema nesse cenário; o comportamento é sempre previsível e ambos os módulos ficam completos"
    ],
    correctAnswer: 0,
    explanation:
      "Quando há dependência circular, o Node.js retorna o `module.exports` do módulo ainda em processo de carregamento, que pode estar incompleto no momento em que o outro módulo faz o `require`, levando a valores `undefined` ou parciais.",
    hint: "Pense na ordem em que cada arquivo é executado e o que já foi definido em `module.exports` até aquele ponto."
  },
  {
    id: "node-047",
    category: "node",
    topics: ["express", "error-handling"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ message: "Erro interno" });\n});`,
    question: "O que identifica essa função como um middleware de tratamento de erros no Express?",
    options: [
      "O fato de receber quatro parâmetros, com `err` como o primeiro deles",
      "O uso da palavra `error` no nome de uma das variáveis declaradas dentro da função de middleware registrada",
      "O uso do método `app.use` em vez de `app.get`, já que apenas `app.use` pode capturar erros lançados pela aplicação",
      "A chamada explícita a `res.status(500)`, que é o único indicativo reconhecido pelo Express como tratamento de erro"
    ],
    correctAnswer: 0,
    explanation:
      "No Express, middlewares de tratamento de erros são identificados especificamente por terem quatro parâmetros (`err, req, res, next`); o framework os invoca automaticamente quando um erro é passado para `next(err)` ou lançado em um middleware anterior.",
    hint: "Repare na assinatura da função — quantos parâmetros ela recebe, e qual é o primeiro deles."
  },
  {
    id: "node-048",
    category: "node",
    topics: ["cluster"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é o propósito do módulo `cluster` no Node.js?",
    options: [
      "Permitir criar múltiplos processos filhos (workers) que compartilham a mesma porta, aproveitando múltiplos núcleos de CPU",
      "Gerenciar bancos de dados distribuídos, replicando automaticamente os dados entre diferentes servidores físicos",
      "Substituir o Event Loop por múltiplas threads dentro do mesmo processo, eliminando a necessidade de callbacks assíncronos",
      "Comprimir arquivos automaticamente antes de enviá-los pela rede, reduzindo o consumo de banda da aplicação"
    ],
    correctAnswer: 0,
    explanation:
      "Como o Node.js é single-threaded por padrão, o módulo `cluster` permite criar processos filhos (workers) que compartilham a mesma porta de servidor, distribuindo a carga entre múltiplos núcleos de CPU.",
    hint: "Pense em como uma aplicação Node.js, sendo single-threaded, pode aproveitar múltiplos núcleos de CPU disponíveis na máquina."
  },
  {
    id: "node-049",
    category: "node",
    topics: ["worker-threads"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Para que serve o módulo `worker_threads` no Node.js?",
    options: [
      "Executar tarefas de CPU intensiva em threads separadas, sem bloquear o Event Loop principal",
      "Criar conexões persistentes com bancos de dados, reaproveitadas automaticamente por todos os módulos da aplicação",
      "Gerenciar variáveis de ambiente compartilhadas entre diferentes processos filhos criados pelo módulo `cluster`",
      "Substituir completamente o uso de Promises, tornando toda a API assíncrona do Node.js baseada em threads"
    ],
    correctAnswer: 0,
    explanation:
      "`worker_threads` permite executar código JavaScript em threads paralelas dentro do mesmo processo, sendo útil para tarefas de CPU intensiva (como processamento de imagens) que, de outra forma, bloqueariam o Event Loop principal.",
    hint: "Diferente do `cluster` (múltiplos processos), esse módulo trabalha com múltiplas threads dentro do mesmo processo."
  },
  {
    id: "node-050",
    category: "node",
    topics: ["child-process"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Para que serve o módulo `child_process` no Node.js?",
    options: [
      "Executar comandos ou programas externos ao Node.js como processos separados, podendo se comunicar com eles",
      "Criar múltiplas cópias do mesmo módulo já importado, isolando o estado interno de cada uma dessas cópias",
      "Gerenciar automaticamente a memória do programa, liberando objetos que não são mais referenciados pelo código",
      "Substituir o Event Loop por um sistema de filas baseado em processos, eliminando a necessidade de callbacks"
    ],
    correctAnswer: 0,
    explanation:
      "`child_process` permite executar comandos do sistema operacional ou outros programas como processos filhos, possibilitando comunicação via streams (stdin, stdout, stderr) entre o processo Node.js e o processo externo.",
    hint: "Pense em executar comandos de terminal (como `ls` ou `git`) diretamente a partir de um script Node.js."
  },
  {
    id: "node-051",
    category: "node",
    topics: ["semver"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "No versionamento semântico (semver, formato `MAJOR.MINOR.PATCH`), quando o número `MAJOR` deve ser incrementado?",
    options: [
      "Quando há mudanças incompatíveis (breaking changes) na API pública",
      "Sempre que qualquer linha de código do projeto é alterada, independentemente de afetar ou não a API pública",
      "Apenas quando um bug é corrigido sem alterar o comportamento esperado pelas versões anteriores da biblioteca",
      "Nunca; o número MAJOR é fixado na primeira publicação do pacote e não deve ser alterado nas versões seguintes"
    ],
    correctAnswer: 0,
    explanation:
      "No padrão semver, `MAJOR` indica mudanças que quebram compatibilidade com versões anteriores; `MINOR` indica novas funcionalidades compatíveis; `PATCH` indica correções de bugs compatíveis.",
    hint: "Pense em qual tipo de mudança obrigaria os usuários da biblioteca a atualizar seu próprio código."
  },
  {
    id: "node-052",
    category: "node",
    topics: ["package-json", "dependencies"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é a diferença entre `dependencies` e `devDependencies` no `package.json`?",
    options: [
      "`dependencies` são necessárias em produção; `devDependencies` são usadas apenas durante o desenvolvimento (como ferramentas de teste e build)",
      "`devDependencies` são necessárias em produção; `dependencies` são usadas apenas durante o desenvolvimento da aplicação",
      "Não existe diferença prática entre elas; o npm instala ambas exatamente da mesma forma em qualquer ambiente",
      "`dependencies` só podem ser instaladas globalmente no sistema, enquanto `devDependencies` ficam restritas ao projeto"
    ],
    correctAnswer: 0,
    explanation:
      "`dependencies` lista pacotes necessários para a aplicação funcionar em produção; `devDependencies` lista ferramentas usadas apenas durante o desenvolvimento, como bibliotecas de teste, bundlers e linters.",
    hint: "Pense em quais pacotes realmente precisam estar presentes quando a aplicação está rodando para os usuários finais."
  },
  {
    id: "node-053",
    category: "node",
    topics: ["package-lock"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é o propósito do arquivo `package-lock.json`?",
    options: [
      "Registrar as versões exatas de todas as dependências instaladas, garantindo instalações consistentes entre diferentes ambientes",
      "Armazenar o código-fonte completo de todas as dependências instaladas, dispensando a necessidade da pasta `node_modules`",
      "Substituir completamente o `package.json`, centralizando tanto os metadados do projeto quanto as versões instaladas",
      "Impedir que novas dependências sejam instaladas no projeto depois que o arquivo é gerado pela primeira vez"
    ],
    correctAnswer: 0,
    explanation:
      "`package-lock.json` fixa as versões exatas (incluindo dependências transitivas) instaladas em determinado momento, garantindo que diferentes máquinas ou ambientes instalem exatamente as mesmas versões.",
    hint: "Pense no problema de duas pessoas instalarem versões ligeiramente diferentes da mesma dependência."
  },
  {
    id: "node-054",
    category: "node",
    topics: ["nodemon", "tooling"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Qual é a utilidade da ferramenta `nodemon` durante o desenvolvimento de uma aplicação Node.js?",
    options: [
      "Reiniciar automaticamente a aplicação sempre que um arquivo do projeto é alterado",
      "Aumentar a performance da aplicação em produção, otimizando automaticamente o código antes de cada execução",
      "Substituir o npm como gerenciador de pacotes, oferecendo comandos próprios para instalar dependências",
      "Compilar código TypeScript para JavaScript automaticamente, dispensando o uso do compilador `tsc`"
    ],
    correctAnswer: 0,
    explanation:
      "`nodemon` monitora os arquivos do projeto e reinicia automaticamente o processo Node.js sempre que detecta uma alteração, evitando reinícios manuais durante o desenvolvimento.",
    hint: "Pense em uma ferramenta que evita a necessidade de parar e iniciar o servidor manualmente após cada alteração de código."
  },
  {
    id: "node-055",
    category: "node",
    topics: ["repl"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que significa executar o comando `node` sem nenhum argumento no terminal?",
    options: [
      "Inicia o REPL (Read-Eval-Print Loop), um ambiente interativo para executar comandos JavaScript um a um",
      "Executa automaticamente o script definido no campo `main` do arquivo `package.json` do projeto atual",
      "Reinstala a runtime do Node.js no sistema operacional, substituindo a versão atualmente configurada",
      "Gera um erro imediato, já que o comando `node` sempre exige que um arquivo seja informado como argumento"
    ],
    correctAnswer: 0,
    explanation:
      "Executar `node` sem argumentos abre o REPL, um ambiente interativo que lê, avalia e imprime o resultado de cada expressão JavaScript digitada, útil para testes rápidos.",
    hint: "Pense em um ambiente similar ao console de desenvolvedor de um navegador, mas para o Node.js."
  },
  {
    id: "node-056",
    category: "node",
    topics: ["npm"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é a diferença entre instalar um pacote npm globalmente (`npm install -g`) e localmente (`npm install`)?",
    options: [
      "A instalação global disponibiliza o pacote como comando de linha em qualquer diretório do sistema; a local instala o pacote apenas dentro do projeto atual, em `node_modules`",
      "A instalação local é sempre mais rápida que a global, mas o pacote instalado só pode ser executado uma única vez",
      "A instalação global impede que o pacote seja utilizado dentro de qualquer script Node.js do sistema operacional",
      "Não existe diferença de comportamento entre as duas formas; o npm sempre grava os arquivos no mesmo diretório"
    ],
    correctAnswer: 0,
    explanation:
      "Pacotes instalados globalmente ficam disponíveis como comandos de terminal em qualquer lugar do sistema; pacotes instalados localmente ficam restritos ao `node_modules` do projeto, sendo a abordagem recomendada para dependências de projeto.",
    hint: "Pense em onde cada tipo de instalação coloca os arquivos do pacote."
  },
  {
    id: "node-057",
    category: "node",
    topics: ["cors", "security"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que é CORS (Cross-Origin Resource Sharing) no contexto de uma API Node.js?",
    options: [
      "Um mecanismo baseado em cabeçalhos HTTP que controla quais origens (domínios) têm permissão para acessar recursos de uma API a partir do navegador",
      "Um protocolo de criptografia de dados, utilizado para proteger o conteúdo das requisições enviadas entre domínios diferentes",
      "Um tipo de banco de dados NoSQL utilizado para armazenar registros de acesso de diferentes origens em uma API",
      "Uma ferramenta de compressão de arquivos, aplicada automaticamente às respostas enviadas para outros domínios"
    ],
    correctAnswer: 0,
    explanation:
      "CORS é um mecanismo de segurança implementado pelos navegadores que restringe requisições entre origens diferentes; o servidor precisa enviar cabeçalhos específicos (como `Access-Control-Allow-Origin`) para permitir explicitamente o acesso de outras origens.",
    hint: "Pense no problema de um front-end hospedado em um domínio tentando acessar uma API hospedada em outro domínio."
  },
  {
    id: "node-058",
    category: "node",
    topics: ["graceful-shutdown", "signals"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que caracteriza um 'graceful shutdown' (encerramento gracioso) ao lidar com sinais como `SIGTERM` em uma aplicação Node.js?",
    options: [
      "Finalizar conexões abertas, salvar estado pendente e liberar recursos antes de encerrar o processo, em vez de interrompê-lo abruptamente",
      "Ignorar completamente o sinal de encerramento recebido, mantendo o processo em execução indefinidamente até ser forçado",
      "Reiniciar automaticamente o servidor em um loop infinito, tentando se recuperar do sinal recebido a cada tentativa",
      "Encerrar o processo imediatamente ao receber o sinal, sem nenhum tratamento adicional das conexões em andamento"
    ],
    correctAnswer: 0,
    explanation:
      "Um encerramento gracioso escuta sinais como `SIGTERM`/`SIGINT` para finalizar requisições em andamento, fechar conexões de banco de dados e liberar recursos antes de encerrar o processo, evitando perda de dados ou conexões corrompidas.",
    hint: "Pense na diferença entre desligar um servidor educadamente e simplesmente 'matar' o processo no meio de uma operação."
  },
  {
    id: "node-059",
    category: "node",
    topics: ["monorepo"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que caracteriza um monorepo em um projeto Node.js?",
    options: [
      "Um único repositório de código que contém múltiplos pacotes ou projetos relacionados, gerenciados em conjunto",
      "Um repositório que armazena apenas um único arquivo de configuração, compartilhado entre diferentes projetos externos",
      "Um tipo de banco de dados utilizado especificamente para armazenar o histórico de commits de um projeto Node.js",
      "Um repositório que não pode ser versionado com Git, exigindo uma ferramenta de controle de versão proprietária"
    ],
    correctAnswer: 0,
    explanation:
      "Um monorepo organiza múltiplos pacotes ou aplicações relacionadas dentro de um único repositório, facilitando o compartilhamento de código e a coordenação de mudanças entre eles, geralmente com ferramentas como npm workspaces, Turborepo ou Nx.",
    hint: "Pense no oposto de ter um repositório Git separado para cada pequeno pacote relacionado."
  },
  {
    id: "node-060",
    category: "node",
    topics: ["rate-limiting", "security"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é o propósito de aplicar rate limiting (limitação de taxa) em uma API Node.js?",
    options: [
      "Restringir o número de requisições que um cliente pode fazer em um determinado período, protegendo a API contra abuso ou sobrecarga",
      "Aumentar a velocidade de resposta da API para todos os usuários, priorizando automaticamente as requisições mais recentes",
      "Impedir completamente o acesso de qualquer cliente à API, exigindo autenticação manual a cada nova requisição",
      "Comprimir as respostas enviadas pela API, reduzindo o tamanho dos dados transferidos entre servidor e cliente"
    ],
    correctAnswer: 0,
    explanation:
      "Rate limiting controla quantas requisições um cliente (geralmente identificado por IP ou token) pode fazer em um intervalo de tempo, protegendo a aplicação contra abuso, ataques de força bruta ou sobrecarga do servidor.",
    hint: "Pense em como evitar que um único cliente sobrecarregue a API com requisições excessivas em pouco tempo."
  },

  {
    id: "oop-001",
    category: "oop",
    topics: ["classes"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é uma classe em Orientação a Objetos?",
    options: [
      "Um molde (blueprint) que define propriedades e comportamentos para a criação de objetos",
      "Um valor numérico especial, reservado internamente pela linguagem para identificar instâncias criadas com `new`",
      "Uma função que só pode ser chamada uma única vez durante toda a execução do programa, sem possibilidade de reuso",
      "Um arquivo de configuração usado para definir quais bibliotecas externas o projeto orientado a objetos deve carregar"
    ],
    correctAnswer: 0,
    explanation:
      "Uma classe define a estrutura (propriedades) e o comportamento (métodos) que os objetos criados a partir dela terão.",
    hint: "Pense em uma classe como a 'planta' usada para construir objetos."
  },
  {
    id: "oop-002",
    category: "oop",
    topics: ["objects"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é um objeto em Orientação a Objetos?",
    options: [
      "Uma instância concreta criada a partir de uma classe, com seus próprios dados",
      "O nome de uma função declarada dentro de uma classe, usado para identificá-la durante a execução do programa",
      "Um tipo primitivo, como `number` ou `string`, que pode ser diretamente instanciado com a palavra-chave `new`",
      "Um arquivo pertencente ao sistema de módulos, responsável por exportar e importar classes entre diferentes arquivos"
    ],
    correctAnswer: 0,
    explanation:
      "Um objeto é uma instância concreta de uma classe, possuindo seus próprios valores para as propriedades definidas por ela.",
    hint: "Se a classe é a planta, o objeto é a casa construída a partir dela."
  },
  {
    id: "oop-003",
    category: "oop",
    topics: ["encapsulation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é encapsulamento em Orientação a Objetos?",
    options: [
      "Controlar o acesso ao estado interno de um objeto, expondo apenas o que é necessário",
      "Permitir acesso irrestrito a todas as propriedades de um objeto, eliminando a necessidade de modificadores de acesso",
      "Criar múltiplas classes com exatamente o mesmo nome, cada uma representando uma versão diferente do mesmo objeto",
      "Transformar todos os métodos de uma classe em estáticos, para que possam ser chamados sem criar uma instância"
    ],
    correctAnswer: 0,
    explanation:
      "Encapsulamento consiste em restringir o acesso direto ao estado interno de um objeto, expondo apenas uma interface controlada de interação.",
    hint: "Pense em proteger dados internos, expondo apenas o necessário para o mundo externo."
  },
  {
    id: "oop-004",
    category: "oop",
    topics: ["encapsulation", "access-modifiers"],
    difficulty: "medium",
    type: "code-completion",
    code: `class BankAccount {\n  ______ balance: number;\n\n  constructor(initialBalance: number) {\n    this.balance = initialBalance;\n  }\n\n  deposit(amount: number) {\n    this.balance += amount;\n  }\n}\n\nconst account = new BankAccount(100);\naccount.balance = 999999; // não deveria ser permitido diretamente`,
    question:
      "Qual modificador completa `______` para impedir que `balance` seja alterado diretamente de fora da classe, reforçando o encapsulamento?",
    options: ["private", "public", "readonly", "static"],
    correctAnswer: 0,
    explanation:
      "`private` restringe o acesso à propriedade apenas ao escopo da própria classe, impedindo alterações diretas externas e reforçando o encapsulamento.",
    hint: "Pense em qual modificador impede totalmente o acesso externo direto."
  },
  {
    id: "oop-005",
    category: "oop",
    topics: ["inheritance"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é herança em Orientação a Objetos?",
    options: [
      "Um mecanismo pelo qual uma classe pode reutilizar propriedades e métodos de outra classe",
      "Um tipo de erro em tempo de execução, disparado sempre que uma subclasse tenta acessar um membro privado da superclasse",
      "Um método que sempre retorna `null`, usado como valor padrão em classes que ainda não foram completamente implementadas",
      "A criação de várias instâncias independentes de uma mesma classe, cada uma com seu próprio estado isolado"
    ],
    correctAnswer: 0,
    explanation:
      "Herança permite que uma classe (subclasse) reutilize e estenda propriedades e métodos de outra classe (superclasse).",
    hint: "Pense em uma relação de 'é um tipo de', como 'Cachorro é um Animal'."
  },
  {
    id: "oop-006",
    category: "oop",
    topics: ["inheritance"],
    difficulty: "medium",
    type: "code-completion",
    code: `class Animal {\n  makeSound(): string {\n    return "Som genérico";\n  }\n}\n\nclass Dog ______ Animal {\n  makeSound(): string {\n    return "Au au";\n  }\n}`,
    question: "Qual palavra-chave completa `______`, fazendo `Dog` herdar de `Animal`?",
    options: ["extends", "implements", "inherits", "instanceof"],
    correctAnswer: 0,
    explanation:
      "A palavra-chave `extends` estabelece uma relação de herança entre classes, permitindo que `Dog` reutilize e sobrescreva comportamentos de `Animal`.",
    hint: "É a mesma palavra-chave usada para restringir Generics a um tipo específico."
  },
  {
    id: "oop-007",
    category: "oop",
    topics: ["polymorphism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é polimorfismo em Orientação a Objetos?",
    options: [
      "A capacidade de objetos de diferentes classes responderem de forma diferente ao mesmo método/mensagem",
      "A criação de múltiplas cópias idênticas de um mesmo objeto, todas compartilhando exatamente o mesmo estado interno",
      "Um erro comum que ocorre ao tentar herdar de mais de uma classe ao mesmo tempo na mesma hierarquia",
      "A conversão automática entre tipos primitivos, como transformar um `number` em `string` durante uma operação"
    ],
    correctAnswer: 0,
    explanation:
      "Polimorfismo permite que diferentes classes implementem o mesmo método de formas distintas, respondendo de maneira própria à mesma chamada.",
    hint: "O termo vem do grego e significa 'muitas formas'."
  },
  {
    id: "oop-008",
    category: "oop",
    topics: ["polymorphism"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `function announce(animal: Animal) {\n  console.log(animal.makeSound());\n}\n\nannounce(new Dog());\nannounce(new Cat());`,
    question: "Qual conceito de POO está sendo demonstrado no código acima?",
    options: [
      "Polimorfismo: a mesma chamada `makeSound()` produz comportamentos diferentes dependendo da classe concreta do objeto",
      "Encapsulamento: os dados de `Dog` e `Cat` estão protegidos de qualquer acesso externo realizado pela função `announce`",
      "Composição: a classe `Animal` é formada internamente pela combinação de outras classes menores, como `Dog` e `Cat`",
      "Abstração: `Animal` esconde da função `announce` os detalhes de implementação de cada subclasse concreta"
    ],
    correctAnswer: 0,
    explanation:
      "A função `announce` trata qualquer `Animal` de forma uniforme, mas o comportamento real de `makeSound()` varia de acordo com a classe concreta (`Dog` ou `Cat`) — isso é polimorfismo em tempo de execução.",
    hint: "Repare que a mesma chamada de método produz resultados diferentes dependendo do objeto passado."
  },
  {
    id: "oop-009",
    category: "oop",
    topics: ["abstraction"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que é abstração em Orientação a Objetos?",
    options: [
      "Expor apenas os detalhes essenciais de um objeto, ocultando a complexidade da implementação",
      "Remover completamente os métodos de uma classe, deixando apenas suas propriedades acessíveis externamente",
      "Criar uma cópia exata de outra classe já existente, reaproveitando seu nome e sua estrutura interna",
      "Impedir que uma classe tenha propriedades próprias, obrigando todo o estado a ser armazenado em classes auxiliares"
    ],
    correctAnswer: 0,
    explanation: "Abstração significa expor apenas o que é relevante para quem usa o objeto, escondendo os detalhes internos de implementação.",
    hint: "Pense em dirigir um carro sem precisar entender o funcionamento interno do motor."
  },
  {
    id: "oop-010",
    category: "oop",
    topics: ["abstract-classes", "interfaces"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Qual é uma diferença entre uma interface e uma classe abstrata?",
    options: [
      "Uma classe abstrata pode conter implementação de métodos, enquanto uma interface tradicionalmente define apenas contratos",
      "Uma interface pode ser instanciada diretamente com `new`, enquanto uma classe abstrata nunca pode ser instanciada",
      "Classes abstratas não podem conter nenhum método, servindo apenas para declarar propriedades sem implementação",
      "Não existe nenhuma diferença prática entre elas; ambas exigem exatamente a mesma sintaxe de implementação"
    ],
    correctAnswer: 0,
    explanation:
      "Classes abstratas podem fornecer implementações parciais (métodos concretos e abstratos), enquanto interfaces tradicionalmente definem apenas o contrato, sem implementação.",
    hint: "Pense em qual das duas pode conter código de fato dentro de um método."
  },
  {
    id: "oop-011",
    category: "oop",
    topics: ["composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que é composição em Orientação a Objetos?",
    options: [
      "Construir um objeto combinando outros objetos como partes, em vez de usar herança",
      "Criar múltiplas subclasses de uma mesma classe base, cada uma especializando um comportamento diferente",
      "Remover todos os métodos privados de uma classe, tornando-os acessíveis para qualquer objeto externo",
      "Transformar uma classe concreta em uma interface, eliminando toda a implementação de seus métodos originais"
    ],
    correctAnswer: 0,
    explanation:
      "Composição consiste em montar um objeto a partir de outros objetos (relação 'tem um'), em vez de usar herança (relação 'é um').",
    hint: "Pense em um Carro que 'tem um' Motor, em vez de um Carro que 'é um' Motor."
  },
  {
    id: "oop-012",
    category: "oop",
    topics: ["composition", "inheritance"],
    difficulty: "hard",
    type: "multiple-choice",
    question: 'Por que o princípio "prefira composição à herança" é frequentemente recomendado?',
    options: [
      "Porque a composição reduz o acoplamento e evita hierarquias rígidas e frágeis, sendo mais flexível para mudanças",
      "Porque a herança nunca deve ser utilizada em nenhuma situação, sendo considerada uma prática obsoleta em qualquer linguagem",
      "Porque a composição é sempre mais rápida em tempo de execução do que qualquer hierarquia baseada em herança",
      "Porque a composição elimina completamente a necessidade de interfaces dentro de um sistema orientado a objetos"
    ],
    correctAnswer: 0,
    explanation:
      "Herança cria acoplamento forte entre classes e hierarquias difíceis de alterar; composição favorece flexibilidade, permitindo trocar comportamentos sem alterar a hierarquia de classes.",
    hint: "Pense no problema de alterar uma superclasse e impactar todas as subclasses que dependem dela."
  },
  {
    id: "oop-013",
    category: "oop",
    topics: ["interfaces"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Para que serve uma interface em Orientação a Objetos?",
    options: [
      "Definir um contrato de comportamento que uma classe se compromete a implementar",
      "Armazenar dados permanentemente em disco, funcionando como uma camada de persistência para as classes que a implementam",
      "Executar tarefas assíncronas automaticamente sempre que uma classe declara que a implementa",
      "Substituir completamente a necessidade de classes, permitindo que toda a lógica seja escrita apenas com interfaces"
    ],
    correctAnswer: 0,
    explanation: "Uma interface define um contrato — um conjunto de métodos/propriedades que qualquer classe que a implemente deve fornecer.",
    hint: "Pense em um 'acordo' que a classe promete cumprir."
  },
  {
    id: "oop-014",
    category: "oop",
    topics: ["solid", "single-responsibility"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Segundo o princípio da Responsabilidade Única (SRP, do SOLID), uma classe deve:",
    options: [
      "Ter apenas um motivo para mudar, ou seja, uma única responsabilidade bem definida",
      "Ter o maior número possível de responsabilidades para reduzir a quantidade de classes",
      "Implementar todas as interfaces disponíveis no sistema",
      "Depender diretamente de implementações concretas"
    ],
    correctAnswer: 0,
    explanation: "O SRP afirma que uma classe deve ter apenas uma responsabilidade e, portanto, apenas um motivo para ser alterada.",
    hint: "Pense no motivo pelo qual uma classe precisaria ser modificada — deveria haver apenas um."
  },
  {
    id: "oop-015",
    category: "oop",
    topics: ["solid", "open-closed"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o princípio Aberto/Fechado (OCP, do SOLID) recomenda?",
    options: [
      "Que entidades de software devem estar abertas para extensão, mas fechadas para modificação",
      "Que nenhuma classe deve ser estendida por outra, mantendo toda a hierarquia de herança restrita a um único nível",
      "Que todo o código deve ser reescrito do zero a cada nova funcionalidade adicionada ao sistema",
      "Que todas as classes e seus membros devem obrigatoriamente ser declarados como `public` no sistema"
    ],
    correctAnswer: 0,
    explanation:
      "O OCP recomenda que seja possível estender o comportamento de uma entidade (ex: via herança ou interfaces) sem precisar modificar seu código-fonte existente.",
    hint: "Pense em adicionar uma nova funcionalidade sem alterar código já testado e funcionando."
  },
  {
    id: "oop-016",
    category: "oop",
    topics: ["solid", "liskov-substitution"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que o Princípio da Substituição de Liskov (LSP, do SOLID) estabelece?",
    options: [
      "Subtipos devem poder substituir seus tipos base sem alterar o comportamento correto do programa",
      "Uma subclasse nunca pode sobrescrever métodos herdados da superclasse, apenas adicionar novos métodos próprios",
      "Toda classe do sistema deve ter exatamente uma única subclasse concreta associada a ela",
      "Interfaces não podem declarar mais de um método, para evitar ambiguidade na hora de serem implementadas"
    ],
    correctAnswer: 0,
    explanation:
      "O LSP afirma que objetos de uma subclasse devem poder substituir objetos da superclasse sem quebrar o comportamento esperado pelo programa.",
    hint: "Pense em uma subclasse que, ao ser usada no lugar da superclasse, causa comportamento inesperado — isso viola o princípio."
  },
  {
    id: "oop-017",
    category: "oop",
    topics: ["solid", "interface-segregation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o Princípio da Segregação de Interfaces (ISP, do SOLID) recomenda?",
    options: [
      "Que interfaces sejam pequenas e específicas, evitando forçar classes a implementar métodos que não utilizam",
      "Que exista apenas uma única interface grande, responsável por descrever todo o comportamento do sistema",
      "Que interfaces nunca sejam implementadas por mais de uma classe diferente ao mesmo tempo",
      "Que classes concretas nunca implementem nenhuma interface, preferindo sempre herdar diretamente de outra classe"
    ],
    correctAnswer: 0,
    explanation:
      "O ISP recomenda dividir interfaces grandes em interfaces menores e mais específicas, evitando que classes implementem métodos que não fazem sentido para elas.",
    hint: "Pense no problema de uma classe ser obrigada a implementar métodos que nunca utiliza."
  },
  {
    id: "oop-018",
    category: "oop",
    topics: ["solid", "dependency-inversion"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que o Princípio da Inversão de Dependência (DIP, do SOLID) propõe?",
    options: [
      "Que módulos de alto nível dependam de abstrações, e não de implementações concretas",
      "Que todas as classes devem depender diretamente de classes concretas específicas",
      "Que dependências nunca devem ser utilizadas",
      "Que apenas módulos de baixo nível podem definir interfaces"
    ],
    correctAnswer: 0,
    explanation:
      "O DIP propõe que módulos de alto nível não dependam de detalhes de implementação, mas sim de abstrações (interfaces), reduzindo o acoplamento entre eles.",
    hint: "Pense em depender de um 'contrato' em vez de uma implementação específica."
  },
  {
    id: "oop-019",
    category: "oop",
    topics: ["dependency-injection", "solid", "node", "typescript"],
    difficulty: "medium",
    type: "multiple-choice",
    question:
      "Uma API Node.js escrita em TypeScript possui um serviço que recebe diretamente uma implementação concreta de banco de dados. Qual alteração reduz o acoplamento dessa implementação?",
    options: [
      "Injetar a dependência através de uma abstração (interface), por exemplo via construtor, em vez de instanciar a implementação concreta diretamente dentro do serviço",
      "Instanciar ainda mais implementações concretas diretamente dentro do serviço, centralizando toda a lógica de acesso a dados",
      "Remover toda a tipagem do serviço, tratando a implementação do banco de dados como um valor do tipo `any`",
      "Unir o serviço e a implementação do banco de dados em uma única classe, eliminando a separação entre as camadas"
    ],
    correctAnswer: 0,
    explanation:
      "Ao depender de uma abstração (interface) e receber a implementação concreta via injeção de dependência, o serviço se torna desacoplado da implementação específica do banco de dados, seguindo o Princípio da Inversão de Dependência (DIP).",
    hint: "Pense em como o Princípio da Inversão de Dependência (DIP) se relaciona com este cenário."
  },
  {
    id: "oop-020",
    category: "oop",
    topics: ["design-patterns"],
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Uma classe garante que apenas uma única instância dela exista durante toda a execução da aplicação, fornecendo um ponto de acesso global a essa instância. Qual Design Pattern está sendo descrito?",
    options: ["Singleton", "Factory", "Observer", "Strategy"],
    correctAnswer: 0,
    explanation: "O padrão Singleton garante que uma classe tenha apenas uma única instância, fornecendo um ponto de acesso global a ela.",
    hint: "O nome do padrão em inglês já sugere a ideia de algo 'único'."
  },
  {
    id: "oop-021",
    category: "oop",
    topics: ["constructors"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  constructor(x) { // erro\n    this.x = x;\n    this.y = 0;\n  }\n}`,
    question: "Por que esse código não compila em TypeScript/JavaScript?",
    options: [
      "Porque uma classe só pode ter um único construtor; não é possível sobrecarregar (overload) construtores como em outras linguagens",
      "Porque construtores em JavaScript/TypeScript não podem receber nenhum parâmetro, apenas inicializar valores fixos",
      "Porque a classe `Point` já foi declarada anteriormente em outro arquivo do mesmo projeto, causando conflito de nomes",
      "Porque os parâmetros `x` e `y` precisam obrigatoriamente ser anotados com o tipo `number` em ambos os construtores"
    ],
    correctAnswer: 0,
    explanation:
      "Diferente de linguagens como Java ou C#, classes em JavaScript/TypeScript não suportam sobrecarga de construtores — apenas um único construtor pode ser definido; para simular esse comportamento, usa-se parâmetros opcionais ou fábricas (factory methods).",
    hint: "Pense em quantas vezes a palavra `constructor` pode aparecer dentro da mesma classe."
  },
  {
    id: "oop-022",
    category: "oop",
    topics: ["overriding", "overloading"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Animal {\n  makeSound() {\n    return "Som genérico";\n  }\n}\n\nclass Cat extends Animal {\n  makeSound() {\n    return "Miau";\n  }\n}`,
    question: "O que `Cat` está fazendo ao redefinir o método `makeSound()`?",
    options: [
      "Sobrescrita (overriding): a subclasse fornece uma nova implementação para um método já existente na superclasse",
      "Sobrecarga (overloading): a subclasse cria uma versão adicional do método com parâmetros diferentes",
      "Composição: a subclasse está combinando dois objetos diferentes",
      "Um erro, pois métodos não podem ser redefinidos em subclasses"
    ],
    correctAnswer: 0,
    explanation:
      "Sobrescrita (override) ocorre quando uma subclasse redefine um método herdado da superclasse com a mesma assinatura, alterando seu comportamento; é diferente de sobrecarga (overload), que envolve múltiplas versões do mesmo método com assinaturas diferentes.",
    hint: "Repare que o método tem o mesmo nome e mesma quantidade de parâmetros que o da superclasse."
  },
  {
    id: "oop-023",
    category: "oop",
    topics: ["super", "inheritance"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n}`,
    question: "Qual é a função da chamada `super(name)` dentro do construtor de `Dog`?",
    options: [
      "Chamar o construtor da superclasse (Animal), garantindo que `this.name` seja inicializado corretamente antes de continuar",
      "Criar uma nova instância totalmente independente de Animal, separada da instância de Dog que está sendo construída",
      "Sobrescrever o construtor de Animal, substituindo permanentemente sua implementação original pela de Dog",
      "Acessar métodos estáticos definidos na classe Animal, sem executar nenhuma lógica de inicialização adicional"
    ],
    correctAnswer: 0,
    explanation:
      "`super(...)` invoca o construtor da classe pai, permitindo que a lógica de inicialização definida em `Animal` seja executada antes de `Dog` continuar configurando suas próprias propriedades.",
    hint: "Em uma subclasse, o construtor da superclasse deve ser chamado antes de acessar `this`."
  },
  {
    id: "oop-024",
    category: "oop",
    topics: ["static-methods"],
    difficulty: "easy",
    type: "multiple-choice",
    code: `class MathUtils {\n  static double(value) {\n    return value * 2;\n  }\n}\n\nconsole.log(MathUtils.double(5));`,
    question: "Por que é possível chamar `MathUtils.double(5)` sem criar uma instância da classe com `new`?",
    options: [
      "Porque `double` é um método estático, pertencente à própria classe, e não a instâncias individuais",
      "Porque `MathUtils` é uma interface, e interfaces em JavaScript/TypeScript nunca exigem a criação de instâncias",
      "Porque, em JavaScript, todos os métodos de qualquer classe podem ser chamados diretamente sem a necessidade de `new`",
      "Porque `double` foi declarado com o modificador `private`, o que dispensa a criação de uma instância para chamá-lo"
    ],
    correctAnswer: 0,
    explanation:
      "Métodos estáticos pertencem à classe em si, não a instâncias específicas, por isso podem ser chamados diretamente através do nome da classe, sem a necessidade de `new`.",
    hint: "Pense na diferença entre algo pertencer à 'planta' (classe) ou a uma 'casa construída' (instância)."
  },
  {
    id: "oop-025",
    category: "oop",
    topics: ["static-properties"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class User {\n  static totalUsers = 0;\n\n  constructor(name) {\n    this.name = name;\n    User.totalUsers++;\n  }\n}\n\nnew User("Ana");\nnew User("Beto");\n\nconsole.log(User.totalUsers);`,
    question: "O que será impresso no console após criar as duas instâncias de `User`?",
    options: ["2", "0", "1", "undefined"],
    correctAnswer: 0,
    explanation:
      "`totalUsers` é uma propriedade estática, compartilhada entre todas as instâncias, e não uma cópia individual por objeto. Cada chamada ao construtor incrementa esse valor compartilhado, resultando em 2 após duas instâncias criadas.",
    hint: "Lembre-se de que propriedades estáticas pertencem à classe, sendo compartilhadas por todas as instâncias."
  },
  {
    id: "oop-026",
    category: "oop",
    topics: ["getters-setters"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Temperature {\n  #celsius;\n\n  constructor(celsius) {\n    this.#celsius = celsius;\n  }\n\n  get fahrenheit() {\n    return this.#celsius * 9 / 5 + 32;\n  }\n\n  set fahrenheit(value) {\n    this.#celsius = (value - 32) * 5 / 9;\n  }\n}\n\nconst temp = new Temperature(0);\nconsole.log(temp.fahrenheit);`,
    question: "O que a propriedade `fahrenheit`, definida com `get`, permite fazer ao acessá-la como `temp.fahrenheit`?",
    options: [
      "Executar lógica personalizada (um cálculo) sempre que a propriedade é lida, como se fosse um atributo comum",
      "Alterar diretamente o valor de `#celsius`, sem realizar nenhuma conversão entre as escalas de temperatura",
      "Chamar o método `fahrenheit` como uma função comum, exigindo o uso de parênteses após o nome da propriedade",
      "Acessar diretamente a propriedade privada `#celsius` de fora da classe, ignorando o encapsulamento definido internamente"
    ],
    correctAnswer: 0,
    explanation:
      "Getters permitem expor um valor computado como se fosse uma propriedade comum (sem parênteses de chamada), encapsulando a lógica de cálculo internamente — nesse caso, convertendo Celsius para Fahrenheit sob demanda.",
    hint: "Repare que `fahrenheit` é acessado sem parênteses, como uma propriedade, mas executa lógica internamente."
  },
  {
    id: "oop-027",
    category: "oop",
    topics: ["interfaces", "multiple-implementation"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Flyable {\n  fly(): void;\n}\n\ninterface Swimmable {\n  swim(): void;\n}\n\nclass Duck implements Flyable, Swimmable {\n  fly() {\n    console.log("Voando");\n  }\n\n  swim() {\n    console.log("Nadando");\n  }\n}`,
    question: "O que o código demonstra ao fazer `Duck implements Flyable, Swimmable`?",
    options: [
      "Uma classe pode implementar múltiplas interfaces simultaneamente, sendo obrigada a fornecer todos os métodos exigidos por cada uma delas",
      "Uma classe só pode implementar uma única interface por vez, sendo necessário escolher entre `Flyable` e `Swimmable`",
      "As interfaces `Flyable` e `Swimmable` precisam ser combinadas manualmente em um único tipo antes de serem utilizadas",
      "A classe `Duck` está herdando simultaneamente de duas classes concretas diferentes, o que não é permitido em TypeScript"
    ],
    correctAnswer: 0,
    explanation:
      "Diferente da herança de classes (que no TypeScript/JavaScript é única), uma classe pode implementar quantas interfaces forem necessárias, desde que forneça a implementação de todos os métodos exigidos por cada contrato.",
    hint: "Lembre-se de que `implements` aceita múltiplos contratos separados por vírgula, diferente de `extends` para classes."
  },
  {
    id: "oop-028",
    category: "oop",
    topics: ["composition"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Engine {\n  start() {\n    console.log("Motor ligado");\n  }\n}\n\nclass Car {\n  constructor() {\n    this.engine = new Engine();\n  }\n\n  start() {\n    this.engine.start();\n    console.log("Carro pronto para andar");\n  }\n}`,
    question: "Que relação entre `Car` e `Engine` esse código demonstra?",
    options: [
      "Composição: `Car` 'tem um' `Engine` como parte de sua estrutura interna",
      "Herança: `Car` 'é um' `Engine`",
      "Polimorfismo: `Car` e `Engine` compartilham a mesma implementação de `start`",
      "Interface: `Engine` define um contrato que `Car` implementa"
    ],
    correctAnswer: 0,
    explanation:
      "Como `Car` contém uma instância de `Engine` como propriedade (em vez de estender a classe `Engine`), essa é uma relação de composição ('tem um'), não de herança ('é um').",
    hint: "Observe que `Car` não usa `extends Engine`, e sim guarda uma instância dela como propriedade."
  },
  {
    id: "oop-029",
    category: "oop",
    topics: ["design-patterns", "factory"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Circle {\n  constructor(radius) { this.radius = radius; }\n}\n\nclass Square {\n  constructor(side) { this.side = side; }\n}\n\nfunction createShape(type, size) {\n  if (type === "circle") return new Circle(size);\n  if (type === "square") return new Square(size);\n  throw new Error("Formato desconhecido");\n}`,
    question: "Qual Design Pattern a função `createShape` está implementando?",
    options: ["Factory", "Singleton", "Observer", "Decorator"],
    correctAnswer: 0,
    explanation:
      "O padrão Factory centraliza a lógica de criação de objetos em uma função (ou método) dedicado, escondendo do código cliente os detalhes de qual classe concreta será instanciada.",
    hint: "Pense em uma função cujo único propósito é decidir e criar o objeto correto, com base em um parâmetro."
  },
  {
    id: "oop-030",
    category: "oop",
    topics: ["design-patterns", "builder"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class PizzaBuilder {\n  constructor() {\n    this.toppings = [];\n  }\n\n  addTopping(topping) {\n    this.toppings.push(topping);\n    return this;\n  }\n\n  build() {\n    return new Pizza(this.toppings);\n  }\n}\n\nconst pizza = new PizzaBuilder()\n  .addTopping("queijo")\n  .addTopping("azeitona")\n  .build();`,
    question: "O que permite encadear as chamadas `.addTopping(...).addTopping(...)` no exemplo acima?",
    options: [
      "O método `addTopping` retorna `this` (a própria instância), permitindo o encadeamento de chamadas — um traço característico do padrão Builder",
      "O JavaScript permite encadear qualquer método automaticamente, independentemente do valor que ele retorna ao ser chamado",
      "A propriedade `toppings` é compartilhada de forma estática entre todas as instâncias criadas de `PizzaBuilder`",
      "O método `build()` precisa obrigatoriamente ser chamado antes de qualquer `addTopping`, invertendo a ordem do encadeamento"
    ],
    correctAnswer: 0,
    explanation:
      "O padrão Builder frequentemente retorna a própria instância (`this`) a cada chamada de método de configuração, permitindo encadear (method chaining) várias etapas antes de finalizar a construção do objeto com `build()`.",
    hint: "Observe o valor de retorno do método `addTopping`."
  },
  {
    id: "oop-031",
    category: "oop",
    topics: ["design-patterns", "strategy"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class CreditCardPayment {\n  pay(amount) {\n    console.log("Pagando " + amount + " com cartão de crédito");\n  }\n}\n\nclass PixPayment {\n  pay(amount) {\n    console.log("Pagando " + amount + " via Pix");\n  }\n}\n\nclass Checkout {\n  constructor(paymentStrategy) {\n    this.paymentStrategy = paymentStrategy;\n  }\n\n  process(amount) {\n    this.paymentStrategy.pay(amount);\n  }\n}`,
    question: "Qual Design Pattern está sendo aplicado ao permitir que `Checkout` receba diferentes estratégias de pagamento?",
    options: [
      "Strategy: encapsula diferentes algoritmos (formas de pagamento) intercambiáveis, delegando a execução à estratégia escolhida",
      "Singleton: garante que apenas uma única instância de `Checkout` possa existir durante toda a execução da aplicação",
      "Observer: notifica automaticamente múltiplos ouvintes registrados sempre que um pagamento é processado com sucesso",
      "Adapter: adapta a interface de uma forma de pagamento incompatível para o formato esperado pela classe `Checkout`"
    ],
    correctAnswer: 0,
    explanation:
      "O padrão Strategy define uma família de algoritmos intercambiáveis (aqui, formas de pagamento) encapsulados em classes separadas, permitindo que o comportamento de `Checkout` mude dinamicamente conforme a estratégia injetada.",
    hint: "Pense em como o mesmo método `process` se comporta de forma diferente dependendo do objeto passado ao construtor."
  },
  {
    id: "oop-032",
    category: "oop",
    topics: ["design-patterns", "observer"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class Subject {\n  constructor() {\n    this.observers = [];\n  }\n\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n\n  notify(data) {\n    this.observers.forEach((observer) => observer.update(data));\n  }\n}`,
    question: "Qual Design Pattern a classe `Subject` implementa?",
    options: ["Observer", "Factory", "Builder", "Adapter"],
    correctAnswer: 0,
    explanation:
      "O padrão Observer permite que múltiplos objetos (observadores) sejam notificados automaticamente quando o estado de um objeto observado (`Subject`) muda, através do método `notify`.",
    hint: "Pense em um sistema de inscrição, onde vários ouvintes são avisados sobre uma mudança."
  },
  {
    id: "oop-033",
    category: "oop",
    topics: ["design-patterns", "decorator"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class Coffee {\n  cost() {\n    return 5;\n  }\n}\n\nclass MilkDecorator {\n  constructor(coffee) {\n    this.coffee = coffee;\n  }\n\n  cost() {\n    return this.coffee.cost() + 2;\n  }\n}\n\nconst coffeeWithMilk = new MilkDecorator(new Coffee());\nconsole.log(coffeeWithMilk.cost());`,
    question: "Qual é a ideia central do padrão Decorator demonstrado nesse código?",
    options: [
      "Adicionar comportamento extra a um objeto dinamicamente, envolvendo-o em outro objeto com a mesma interface, sem alterar sua classe original",
      "Garantir que apenas uma única instância de `Coffee` exista durante toda a execução do programa, mesmo com múltiplos decoradores",
      "Notificar múltiplos observadores registrados sempre que o preço do café é recalculado pela classe `MilkDecorator`",
      "Criar uma cópia idêntica do objeto `Coffee` original, preservando seu custo base sem nenhuma alteração adicional"
    ],
    correctAnswer: 0,
    explanation:
      "O padrão Decorator envolve um objeto com outro que implementa a mesma interface, adicionando comportamento extra (aqui, o custo do leite) sem modificar a classe original `Coffee`, permitindo combinar decoradores livremente.",
    hint: "Repare que `MilkDecorator` 'envolve' um `Coffee`, delegando parte do cálculo a ele e adicionando algo extra."
  },
  {
    id: "oop-034",
    category: "oop",
    topics: ["design-patterns", "adapter"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class OldPrinter {\n  printOldFormat(text) {\n    console.log("[Formato antigo] " + text);\n  }\n}\n\nclass PrinterAdapter {\n  constructor(oldPrinter) {\n    this.oldPrinter = oldPrinter;\n  }\n\n  print(text) {\n    this.oldPrinter.printOldFormat(text);\n  }\n}\n\nconst printer = new PrinterAdapter(new OldPrinter());\nprinter.print("Relatório");`,
    question: "Qual é o propósito do padrão Adapter, demonstrado por `PrinterAdapter`?",
    options: [
      "Converter a interface de uma classe existente (incompatível) em outra interface esperada pelo código cliente, sem modificar a classe original",
      "Criar múltiplas instâncias independentes da mesma impressora, cada uma mantendo seu próprio estado interno isolado",
      "Notificar automaticamente outros objetos interessados sempre que uma impressão é concluída com sucesso pelo sistema",
      "Impedir completamente que a classe `OldPrinter` seja utilizada diretamente pelo restante do código da aplicação"
    ],
    correctAnswer: 0,
    explanation:
      "O Adapter atua como uma 'ponte' entre uma interface existente e a interface esperada pelo cliente, permitindo que classes com interfaces incompatíveis colaborem sem modificar seu código original.",
    hint: "Pense em um adaptador de tomada: ele não altera o aparelho, apenas adapta a conexão."
  },
  {
    id: "oop-035",
    category: "oop",
    topics: ["design-patterns", "template-method"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `abstract class ReportGenerator {\n  generate() {\n    this.loadData();\n    this.formatData();\n    this.exportReport();\n  }\n\n  abstract loadData(): void;\n  abstract formatData(): void;\n\n  exportReport(): void {\n    console.log("Exportando relatório...");\n  }\n}`,
    question: "Qual Design Pattern o método `generate()` está implementando ao definir uma sequência fixa de etapas, delegando parte delas às subclasses?",
    options: [
      "Template Method: define o esqueleto de um algoritmo na superclasse, deixando etapas específicas para as subclasses implementarem",
      "Singleton: garante que apenas uma única instância de `ReportGenerator` seja criada durante toda a execução do sistema",
      "Factory: centraliza a criação de diferentes tipos concretos de relatório com base em um parâmetro informado",
      "Observer: notifica automaticamente outros módulos interessados sempre que um novo relatório termina de ser gerado"
    ],
    correctAnswer: 0,
    explanation:
      "O padrão Template Method define o esqueleto de um algoritmo em um método da superclasse, delegando a implementação de passos específicos (como `loadData` e `formatData`) às subclasses, enquanto mantém o controle da sequência geral.",
    hint: "Repare que `generate()` chama métodos abstratos que ainda precisam ser implementados por quem estende a classe."
  },
  {
    id: "oop-036",
    category: "oop",
    topics: ["design-patterns", "command"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class LightOnCommand {\n  constructor(light) {\n    this.light = light;\n  }\n\n  execute() {\n    this.light.turnOn();\n  }\n}\n\nclass RemoteControl {\n  pressButton(command) {\n    command.execute();\n  }\n}`,
    question: "Qual é a principal vantagem do padrão Command demonstrado ao encapsular a ação `turnOn` dentro de `LightOnCommand`?",
    options: [
      "Desacoplar quem solicita uma ação (RemoteControl) de quem a executa (Light), permitindo enfileirar, desfazer ou substituir comandos facilmente",
      "Garantir que apenas uma única luz possa existir no sistema, mesmo que múltiplos comandos sejam criados simultaneamente",
      "Notificar automaticamente todos os controles remotos registrados sempre que um comando qualquer é executado",
      "Eliminar completamente a necessidade de classes para representar ações, substituindo-as por simples funções soltas"
    ],
    correctAnswer: 0,
    explanation:
      "O padrão Command encapsula uma solicitação como um objeto, desacoplando o invocador (RemoteControl) do executor real da ação, permitindo maior flexibilidade (como filas de comandos, histórico e undo).",
    hint: "Pense em como o RemoteControl não precisa saber como a ação é executada, apenas chamar `execute()`."
  },
  {
    id: "oop-037",
    category: "oop",
    topics: ["dependency-injection"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class EmailService {\n  send(to, message) {\n    console.log("Enviando mensagem: " + message + " para " + to);\n  }\n}\n\nclass NotificationManager {\n  constructor(emailService) {\n    this.emailService = emailService;\n  }\n\n  notify(user, message) {\n    this.emailService.send(user.email, message);\n  }\n}\n\nconst manager = new NotificationManager(new EmailService());`,
    question: "Por que `EmailService` é passado como argumento para o construtor de `NotificationManager`, em vez de ser instanciado diretamente dentro dela?",
    options: [
      "Para aplicar injeção de dependência, reduzindo o acoplamento e facilitando a substituição por outra implementação (ex: um serviço de SMS) ou por um mock em testes",
      "Porque não é tecnicamente possível instanciar uma classe dentro de outra classe em JavaScript ou TypeScript",
      "Porque `EmailService` é declarada como uma interface abstrata, o que impede sua instanciação direta pelo código",
      "Para tornar deliberadamente o código mais lento, adicionando uma camada extra de indireção entre as classes"
    ],
    correctAnswer: 0,
    explanation:
      "Ao receber a dependência via construtor (injeção de dependência), `NotificationManager` fica desacoplado da implementação concreta de `EmailService`, facilitando testes (com mocks) e a substituição por outras implementações.",
    hint: "Pense em como seria mais difícil testar `NotificationManager` isoladamente se ele criasse o `EmailService` internamente."
  },
  {
    id: "oop-038",
    category: "oop",
    topics: ["this-binding"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class Counter {\n  count = 0;\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counter = new Counter();\nconst incrementFn = counter.increment;\n\nsetTimeout(incrementFn, 1000); // erro em tempo de execução`,
    question: "Por que passar `counter.increment` diretamente para `setTimeout` pode causar um erro relacionado a `this`?",
    options: [
      "Ao ser passada como referência solta, a função perde o vínculo com a instância `counter`, fazendo com que `this` não aponte mais para o objeto esperado dentro de `increment`",
      "Porque a função `setTimeout` não é capaz de aceitar métodos definidos dentro de classes como argumento de callback",
      "Porque a propriedade `count` foi declarada como privada, impedindo que `setTimeout` acesse seu valor atual",
      "Porque o método `increment` precisaria obrigatoriamente ser declarado como `static` para funcionar com `setTimeout`"
    ],
    correctAnswer: 0,
    explanation:
      "Quando um método é extraído de uma instância e passado como referência solta, o vínculo entre `this` e a instância original é perdido; ao ser executado posteriormente (ex: por `setTimeout`), `this` não corresponde mais ao objeto `counter`, podendo causar erros ou comportamento inesperado.",
    hint: "Pense em como `this` é determinado, em JavaScript, pela forma como a função é chamada, não por onde foi definida."
  },
  {
    id: "oop-039",
    category: "oop",
    topics: ["design-patterns", "singleton"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class Database {\n  private static instance: Database;\n\n  private constructor() {\n    console.log("Conectando ao banco...");\n  }\n\n  static getInstance(): Database {\n    if (!Database.instance) {\n      Database.instance = new Database();\n    }\n    return Database.instance;\n  }\n}`,
    question: "Por que o construtor de `Database` é declarado como `private` nesse exemplo?",
    options: [
      "Para impedir que instâncias sejam criadas diretamente com `new Database()` fora da classe, forçando o uso do método `getInstance()` — reforçando o padrão Singleton",
      "Para impedir que a classe `Database` tenha qualquer outro método além do próprio construtor declarado",
      "Porque construtores declarados como `private` são executados mais rapidamente do que construtores públicos comuns",
      "Para transformar a classe `Database` em uma interface, permitindo que outras classes a implementem livremente"
    ],
    correctAnswer: 0,
    explanation:
      "Tornar o construtor privado impede a criação de instâncias diretamente fora da classe, garantindo que a única forma de obter uma instância seja através de `getInstance()`, que controla a criação de uma única instância compartilhada — o padrão Singleton.",
    hint: "Pense em como impedir que outras partes do código criem instâncias adicionais além da única permitida."
  },
  {
    id: "oop-040",
    category: "oop",
    topics: ["solid", "interface-segregation"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Worker {\n  work(): void;\n  eat(): void;\n}\n\nclass RobotWorker implements Worker {\n  work() { console.log("Trabalhando"); }\n  eat() { throw new Error("Robôs não comem"); } // problema\n}`,
    question: "Qual princípio do SOLID essa interface `Worker` está violando ao forçar `RobotWorker` a implementar `eat()`?",
    options: [
      "Princípio da Segregação de Interfaces (ISP): a interface deveria ser dividida em partes menores, já que nem toda classe que trabalha também come",
      "Princípio da Responsabilidade Única (SRP): a classe `RobotWorker` deveria ser dividida em duas classes menores e independentes",
      "Princípio Aberto/Fechado (OCP): a interface `Worker` deveria permitir extensão sem que `RobotWorker` precisasse ser modificada",
      "Princípio da Substituição de Liskov (LSP): `RobotWorker` não pode substituir corretamente qualquer implementação de `Worker`"
    ],
    correctAnswer: 0,
    explanation:
      "O ISP recomenda que interfaces sejam pequenas e específicas; ao unir `work()` e `eat()` em uma única interface, classes que não fazem sentido implementar ambos os métodos (como um robô) são forçadas a fornecer implementações artificiais ou que lançam erro.",
    hint: "Pense em como dividir `Worker` em interfaces menores, como `Workable` e `Eatable`, resolveria o problema."
  },
  {
    id: "oop-041",
    category: "oop",
    topics: ["polymorphism", "interfaces"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `interface Notifier {\n  send(message: string): void;\n}\n\nclass EmailNotifier implements Notifier {\n  send(message: string) { console.log("Email: " + message); }\n}\n\nclass SmsNotifier implements Notifier {\n  send(message: string) { console.log("SMS: " + message); }\n}\n\nfunction notifyAll(notifiers: Notifier[], message: string) {\n  notifiers.forEach((n) => n.send(message));\n}`,
    question: "Como o polimorfismo é alcançado nesse código, mesmo sem usar herança entre classes?",
    options: [
      "Através da implementação de uma interface comum (`Notifier`), permitindo que `notifyAll` trate diferentes classes de forma uniforme, cada uma respondendo de sua própria forma a `send`",
      "Através do uso de Generics, que permitem que a função `notifyAll` aceite qualquer tipo de array como argumento",
      "Através de propriedades estáticas compartilhadas entre `EmailNotifier` e `SmsNotifier`, sincronizadas automaticamente",
      "Não há polimorfismo real nesse código; trata-se apenas de duas implementações duplicadas do mesmo método `send`"
    ],
    correctAnswer: 0,
    explanation:
      "Polimorfismo não depende exclusivamente de herança entre classes; implementar uma interface comum também permite tratar objetos de tipos diferentes de forma uniforme, cada um com seu próprio comportamento para o mesmo método.",
    hint: "Repare que `EmailNotifier` e `SmsNotifier` não têm relação de herança entre si, apenas implementam o mesmo contrato."
  },
  {
    id: "oop-042",
    category: "oop",
    topics: ["abstract-classes", "constructors"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `abstract class Base {\n  constructor() {\n    this.setup(); // chama método abstrato durante a construção\n  }\n\n  abstract setup(): void;\n}\n\nclass Derived extends Base {\n  value = 10;\n\n  setup() {\n    console.log(this.value); // pode imprimir undefined\n  }\n}`,
    question: "Por que chamar um método abstrato dentro do construtor da classe base pode causar comportamento inesperado?",
    options: [
      "Porque o construtor da subclasse (`Derived`) ainda não terminou de inicializar suas próprias propriedades quando `setup()` é chamado a partir do construtor de `Base`",
      "Porque métodos declarados como `abstract` nunca podem ser chamados a partir do construtor da própria classe base",
      "Porque a classe `Base` não pode ter um construtor próprio, sendo obrigada a delegar toda inicialização à subclasse",
      "Porque a classe `Derived` não implementou corretamente o método `setup()`, deixando sua assinatura incompatível com `Base`"
    ],
    correctAnswer: 0,
    explanation:
      "Como o construtor de `Base` executa antes do restante do construtor (implícito) de `Derived`, propriedades declaradas em `Derived` (como `value`) ainda não foram inicializadas quando `setup()` é chamado, podendo resultar em `undefined` — um problema conhecido ao chamar métodos sobrescrevíveis durante a construção.",
    hint: "Pense na ordem de execução: o construtor da superclasse roda antes das inicializações de propriedades da subclasse."
  },
  {
    id: "oop-043",
    category: "oop",
    topics: ["solid", "liskov-substitution"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  setWidth(width) { this.width = width; }\n  setHeight(height) { this.height = height; }\n  area() { return this.width * this.height; }\n}\n\nclass Square extends Rectangle {\n  setWidth(width) {\n    this.width = width;\n    this.height = width; // efeito colateral inesperado\n  }\n\n  setHeight(height) {\n    this.width = height;\n    this.height = height;\n  }\n}`,
    question: "Por que `Square` como subclasse de `Rectangle` é um exemplo clássico de violação do Princípio da Substituição de Liskov (LSP)?",
    options: [
      "Porque, ao substituir um `Rectangle` por um `Square`, chamar `setWidth` altera também `height` de forma inesperada, quebrando o comportamento que o código cliente espera de um Rectangle",
      "Porque a classe `Square` não é capaz de calcular corretamente sua própria área usando o método herdado de `Rectangle`",
      "Porque a classe `Square`, ao herdar de `Rectangle`, deixa de possuir um construtor próprio para inicializar seus lados",
      "Porque um quadrado não deveria ser modelado como uma forma geométrica válida dentro de um sistema orientado a objetos"
    ],
    correctAnswer: 0,
    explanation:
      "O LSP exige que subtipos possam substituir seus tipos base sem alterar o comportamento esperado. Como `Square` altera `height` ao chamar `setWidth` (e vice-versa), um código que espera manipular `width` e `height` de forma independente (como em `Rectangle`) pode se comportar de forma incorreta ao receber um `Square`.",
    hint: "Pense em um código que define `width` e `height` separadamente, esperando que sejam independentes, e o que aconteceria se recebesse um `Square`."
  },
  {
    id: "oop-044",
    category: "oop",
    topics: ["encapsulation", "anti-pattern"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `class ShoppingCart {\n  #items = [];\n\n  getItems() {\n    return this.#items; // retorna a referência interna diretamente\n  }\n\n  addItem(item) {\n    this.#items.push(item);\n  }\n}\n\nconst cart = new ShoppingCart();\ncart.addItem("Livro");\n\nconst items = cart.getItems();\nitems.push("Item hackeado"); // modifica o estado interno diretamente!`,
    question: "Por que retornar `this.#items` diretamente em `getItems()` compromete o encapsulamento, mesmo `#items` sendo privado?",
    options: [
      "Porque quem recebe o array obtém uma referência direta ao estado interno, podendo modificá-lo externamente (como no `items.push(...)`) sem passar pelos métodos controlados da classe",
      "Porque campos privados declarados com `#`, como `#items`, não têm permissão para ser retornados por métodos públicos da classe",
      "Porque arrays nunca deveriam ser utilizados como propriedades internas de uma classe orientada a objetos",
      "Não há nenhum problema real nesse código; o encapsulamento continua garantido mesmo retornando a referência direta"
    ],
    correctAnswer: 0,
    explanation:
      "Mesmo que `#items` seja privado e não possa ser reatribuído de fora, retornar a referência direta ao array permite que código externo modifique seu conteúdo (como adicionar itens) sem passar pelos métodos da classe. A correção seria retornar uma cópia, como `[...this.#items]`.",
    hint: "Pense na diferença entre proteger a propriedade em si e proteger o conteúdo mutável que ela referencia."
  },
  {
    id: "oop-045",
    category: "oop",
    topics: ["access-modifiers", "protected"],
    difficulty: "medium",
    type: "multiple-choice",
    code: `class Vehicle {\n  protected checkFuel(): boolean {\n    return true;\n  }\n}\n\nclass Car extends Vehicle {\n  start() {\n    if (this.checkFuel()) {\n      console.log("Carro ligado");\n    }\n  }\n}\n\nconst car = new Car();\ncar.checkFuel(); // erro de compilação`,
    question: "Por que `car.checkFuel()` gera um erro de compilação, mesmo `Car` herdando de `Vehicle`?",
    options: [
      "Porque `protected` permite o acesso apenas dentro da própria classe e de suas subclasses, mas nunca a partir de código externo que possua apenas uma instância",
      "Porque o método `checkFuel` não foi herdado corretamente pela classe `Car` ao estender `Vehicle`",
      "Porque o modificador `protected`, em TypeScript, se comporta de forma idêntica ao modificador `private` em qualquer contexto",
      "Porque a classe `Vehicle` precisaria ser declarada como uma interface para que `checkFuel` pudesse ser acessado externamente"
    ],
    correctAnswer: 0,
    explanation:
      "`protected` permite acesso ao membro dentro da própria classe e de suas subclasses (como o uso interno em `start()`), mas continua bloqueando o acesso a partir de fora da hierarquia de classes, como a chamada direta `car.checkFuel()`.",
    hint: "Repare que a chamada problemática ocorre fora de qualquer classe, diretamente sobre a instância `car`."
  },
  {
    id: "oop-046",
    category: "oop",
    topics: ["mixins", "composition"],
    difficulty: "hard",
    type: "multiple-choice",
    code: `const CanFly = (Base) => class extends Base {\n  fly() {\n    console.log("Voando");\n  }\n};\n\nconst CanSwim = (Base) => class extends Base {\n  swim() {\n    console.log("Nadando");\n  }\n};\n\nclass Animal {}\nclass Duck extends CanSwim(CanFly(Animal)) {}`,
    question: "Qual técnica está sendo usada para combinar os comportamentos `CanFly` e `CanSwim` em `Duck`, sem herança múltipla direta?",
    options: [
      "Mixins: funções que recebem uma classe base e retornam uma nova classe estendida, permitindo compor múltiplos comportamentos",
      "Interfaces: `CanFly` e `CanSwim` são interfaces implementadas diretamente pela classe `Duck` no código apresentado",
      "Generics: `CanFly` e `CanSwim` são tipos genéricos parametrizados que definem o comportamento de `Duck`",
      "Decorators do TypeScript, aplicados sobre a classe `Duck` através da sintaxe `@CanFly` e `@CanSwim`"
    ],
    correctAnswer: 0,
    explanation:
      "Como JavaScript/TypeScript não suportam herança múltipla de classes, o padrão Mixin usa funções que recebem uma classe base e retornam uma subclasse estendida, permitindo compor múltiplos comportamentos encadeando essas funções.",
    hint: "Repare que `CanFly` e `CanSwim` são funções que recebem uma classe e retornam outra classe, e não interfaces ou tipos."
  },
  {
    id: "oop-047",
    category: "oop",
    topics: ["law-of-demeter"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que a Lei de Demeter ('não fale com estranhos') recomenda em relação à comunicação entre objetos?",
    options: [
      "Um objeto deve interagir apenas com seus colaboradores diretos, evitando encadear chamadas através de múltiplos objetos intermediários (como `a.getB().getC().doSomething()`)",
      "Um objeto nunca deve chamar métodos de nenhum outro objeto, resolvendo toda a lógica exclusivamente dentro de si mesmo",
      "Todas as classes de um sistema devem se comunicar exclusivamente através de um barramento global de eventos",
      "Classes devem sempre depender diretamente do maior número possível de outras classes, aumentando a flexibilidade do sistema"
    ],
    correctAnswer: 0,
    explanation:
      "A Lei de Demeter sugere que um objeto conheça apenas seus colaboradores imediatos, evitando cadeias longas de chamadas através de objetos intermediários, o que aumenta o acoplamento e a fragilidade do código.",
    hint: "Pense no problema de encadear várias chamadas como `pedido.getCliente().getEndereco().getCidade()`."
  },
  {
    id: "oop-048",
    category: "oop",
    topics: ["coupling", "cohesion"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que significa dizer que um bom design orientado a objetos busca 'alta coesão e baixo acoplamento'?",
    options: [
      "Cada classe deve ter responsabilidades fortemente relacionadas entre si (alta coesão), enquanto depende o mínimo possível de detalhes internos de outras classes (baixo acoplamento)",
      "Cada classe deve depender diretamente de todas as outras classes do sistema, compartilhando o máximo de estado possível",
      "Classes devem reunir o maior número possível de responsabilidades não relacionadas, reduzindo a quantidade total de classes",
      "Acoplamento e coesão são sinônimos dentro da Orientação a Objetos, e um bom design deve sempre maximizar ambos"
    ],
    correctAnswer: 0,
    explanation:
      "Alta coesão significa que os membros de uma classe estão fortemente relacionados a um propósito comum; baixo acoplamento significa que as classes dependem minimamente dos detalhes internos umas das outras, facilitando manutenção e testes.",
    hint: "Pense em coesão como 'o quanto uma classe faz sentido sozinha' e acoplamento como 'o quanto uma classe depende de outra'."
  },
  {
    id: "oop-049",
    category: "oop",
    topics: ["yagni"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que o princípio YAGNI ('You Aren't Gonna Need It') recomenda ao desenvolver software orientado a objetos?",
    options: [
      "Evitar implementar funcionalidades ou abstrações antes que elas sejam realmente necessárias",
      "Implementar o maior número possível de funcionalidades antecipadamente, prevendo qualquer necessidade futura do sistema",
      "Sempre preferir herança em vez de composição, já que hierarquias de classes tendem a ser mais previsíveis",
      "Escrever testes automatizados apenas depois que o produto já tiver sido lançado para os usuários finais"
    ],
    correctAnswer: 0,
    explanation:
      "YAGNI recomenda não adicionar funcionalidades ou generalizações especulativas 'para o caso de precisar no futuro', pois isso costuma aumentar a complexidade sem benefício real imediato.",
    hint: "Pense no risco de criar abstrações complexas para requisitos que talvez nunca existam."
  },
  {
    id: "oop-050",
    category: "oop",
    topics: ["dry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que o princípio DRY ('Don't Repeat Yourself') busca evitar?",
    options: [
      "Duplicação de lógica ou conhecimento no código, centralizando-a em um único lugar",
      "O uso de mais de uma classe dentro do mesmo projeto, preferindo sempre concentrar tudo em um único arquivo",
      "A criação de testes automatizados, que segundo o princípio DRY deveriam ser evitados sempre que possível",
      "O uso de comentários explicativos no código, que o princípio DRY recomenda eliminar completamente"
    ],
    correctAnswer: 0,
    explanation:
      "DRY recomenda que cada parte do conhecimento ou lógica do sistema tenha uma única representação clara no código, evitando duplicações que dificultam manutenção (já que uma alteração precisaria ser replicada em vários lugares).",
    hint: "Pense no problema de corrigir um bug e esquecer de aplicar a mesma correção em outro lugar onde a lógica foi duplicada."
  },
  {
    id: "oop-051",
    category: "oop",
    topics: ["kiss"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "O que o princípio KISS ('Keep It Simple, Stupid') recomenda no design orientado a objetos?",
    options: [
      "Preferir soluções simples e diretas, evitando complexidade desnecessária",
      "Utilizar o maior número possível de Design Patterns em qualquer situação",
      "Escrever o código mais compacto possível, mesmo que ilegível",
      "Sempre usar herança múltipla quando disponível"
    ],
    correctAnswer: 0,
    explanation:
      "KISS recomenda manter soluções simples sempre que possível, evitando abstrações ou complexidade desnecessárias que dificultem a compreensão e manutenção do código.",
    hint: "Pense em resolver o problema da forma mais direta possível, sem adicionar complexidade que não traz benefício real."
  },
  {
    id: "oop-052",
    category: "oop",
    topics: ["domain-model", "ddd"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é a diferença entre um modelo de domínio anêmico (anemic domain model) e um modelo de domínio rico (rich domain model)?",
    options: [
      "No modelo anêmico, as classes de domínio contêm apenas dados, com a lógica de negócio implementada externamente (em services); no modelo rico, as próprias classes de domínio encapsulam comportamento e regras de negócio",
      "O modelo anêmico é sempre mais rápido em tempo de execução, já que suas classes não precisam executar nenhuma lógica interna",
      "O modelo rico não permite o uso de encapsulamento, já que todas as suas propriedades precisam ser expostas publicamente",
      "Não existe diferença real entre os dois modelos; ambos distribuem a lógica de negócio da mesma forma entre as camadas"
    ],
    correctAnswer: 0,
    explanation:
      "Um modelo anêmico separa dados (nas entidades) de comportamento (em classes de serviço externas), o que pode enfraquecer o encapsulamento; um modelo rico incorpora as regras de negócio diretamente nas próprias entidades, alinhado a princípios de Orientação a Objetos.",
    hint: "Pense em onde a lógica de negócio realmente reside: dentro dos próprios objetos de domínio, ou espalhada em classes de serviço separadas."
  },
  {
    id: "oop-053",
    category: "oop",
    topics: ["tell-dont-ask"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "O que o princípio 'Tell, Don't Ask' recomenda em relação à interação entre objetos?",
    options: [
      "Um objeto deve instruir outro a realizar uma ação (dizer o que fazer), em vez de consultar seu estado interno para decidir a ação por ele",
      "Objetos nunca devem se comunicar entre si, resolvendo toda a lógica de negócio isoladamente dentro de cada classe",
      "Um objeto deve sempre expor todos os seus dados internos publicamente, para que outros objetos decidam o que fazer",
      "Toda interação entre objetos deve necessariamente começar com uma pergunta antes de qualquer comando ser executado"
    ],
    correctAnswer: 0,
    explanation:
      "'Tell, Don't Ask' recomenda delegar comportamento ao objeto que possui os dados relevantes (dizendo o que fazer), em vez de extrair (perguntar) o estado interno de um objeto para tomar decisões fora dele, o que reforça o encapsulamento.",
    hint: "Pense na diferença entre `if (conta.getSaldo() > valor) conta.setSaldo(...)` e simplesmente chamar `conta.sacar(valor)`."
  },
  {
    id: "oop-054",
    category: "oop",
    topics: ["fragile-base-class"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que descreve o problema conhecido como 'fragile base class' (classe base frágil)?",
    options: [
      "Alterações aparentemente seguras em uma superclasse podem quebrar o comportamento de subclasses que dependem de detalhes de sua implementação interna",
      "Uma classe base que, por definição, nunca pode conter nenhum método concreto implementado dentro dela",
      "Uma classe base que não pode, em nenhuma hipótese, ser instanciada diretamente pelo restante do código",
      "Uma subclasse que decide não implementar nenhum dos métodos herdados de sua respectiva superclasse"
    ],
    correctAnswer: 0,
    explanation:
      "O problema da classe base frágil ocorre quando modificações na implementação de uma superclasse (mesmo mantendo sua interface pública) acabam quebrando o comportamento esperado por subclasses que dependiam de detalhes internos específicos — um dos motivos pelos quais 'composição é preferível à herança' em muitos cenários.",
    hint: "Pense em como uma pequena mudança 'interna' em uma classe base amplamente estendida pode causar efeitos inesperados em várias subclasses."
  },
  {
    id: "oop-055",
    category: "oop",
    topics: ["duck-typing", "polymorphism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Como o conceito de 'duck typing' se relaciona com polimorfismo em linguagens com tipagem dinâmica ou estrutural?",
    options: [
      "Um objeto é tratado como compatível com um tipo se possuir os métodos/propriedades esperados, independentemente de sua herança ou classe declarada",
      "Duck typing exige que todas as classes envolvidas implementem explicitamente uma mesma interface nomeada em comum",
      "Duck typing é um conceito exclusivo de linguagens com tipagem estática, como Java ou C#, e não se aplica ao TypeScript",
      "Duck typing impede completamente o uso de polimorfismo, já que cada objeto precisa ter exatamente o mesmo tipo declarado"
    ],
    correctAnswer: 0,
    explanation:
      "Duck typing ('se anda como um pato e grasna como um pato, é tratado como um pato') permite polimorfismo baseado na presença dos métodos/comportamentos esperados, sem exigir uma relação de herança ou implementação de interface explícita entre os objetos envolvidos.",
    hint: "Pense em como o TypeScript, com sua tipagem estrutural, se relaciona com essa ideia mesmo sendo uma linguagem com tipos estáticos."
  },
  {
    id: "oop-056",
    category: "oop",
    topics: ["value-object", "ddd"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que caracteriza um 'value object' (objeto de valor) em Orientação a Objetos, em contraste com uma entidade?",
    options: [
      "Um value object é definido por seus atributos (dois objetos com os mesmos valores são considerados iguais) e é tipicamente imutável, sem identidade própria",
      "Um value object sempre possui um identificador único (ID), assim como qualquer entidade dentro do domínio da aplicação",
      "Um value object nunca pode ter mais de um atributo, sendo sempre representado por um único valor primitivo isolado",
      "Não existe nenhuma diferença prática entre um value object e uma entidade dentro de um modelo de domínio"
    ],
    correctAnswer: 0,
    explanation:
      "Diferente de uma entidade (identificada por um ID único, mesmo que seus atributos mudem), um value object é definido inteiramente pelos seus valores — dois value objects com os mesmos atributos são considerados iguais, e costumam ser imutáveis (ex: um objeto `Dinheiro` ou `Endereço`).",
    hint: "Pense em dois objetos `Dinheiro(10, \"BRL\")` — eles deveriam ser considerados o mesmo valor, mesmo sendo instâncias diferentes."
  },
  {
    id: "oop-057",
    category: "oop",
    topics: ["entity", "value-object", "ddd"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Em Domain-Driven Design (DDD), o que diferencia uma 'entidade' de um 'value object'?",
    options: [
      "Uma entidade possui uma identidade única que persiste ao longo do tempo, mesmo que seus atributos mudem; um value object é definido apenas por seus valores, sem identidade própria",
      "Entidades nunca podem ter métodos próprios, servindo apenas como estruturas simples de armazenamento de dados",
      "Value objects sempre precisam ser armazenados em uma tabela separada do banco de dados, diferente das entidades",
      "Não há diferença prática entre os dois conceitos; ambos são identificados exclusivamente pelos seus valores internos"
    ],
    correctAnswer: 0,
    explanation:
      "Uma entidade (como um `Usuário` com um ID) mantém sua identidade mesmo que seus dados mudem ao longo do tempo; um value object (como um intervalo de datas ou um valor monetário) é considerado igual a outro se todos os seus valores forem iguais, sem depender de identidade.",
    hint: "Pense em um `Usuário` (que continua sendo 'o mesmo' mesmo após trocar de nome) versus um valor monetário (onde dois R$50 são simplesmente iguais)."
  },
  {
    id: "oop-058",
    category: "oop",
    topics: ["diamond-problem", "multiple-inheritance"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "O que é o 'problema do diamante' (diamond problem), frequentemente citado como uma das razões para linguagens como TypeScript/JavaScript não suportarem herança múltipla de classes?",
    options: [
      "A ambiguidade que surge quando uma classe herda de duas classes que, por sua vez, herdam de uma base comum, tornando incerto qual implementação de um método herdado deve prevalecer",
      "Um simples erro de sintaxe que ocorre ao tentar declarar mais de uma classe dentro do mesmo arquivo `.ts`",
      "A impossibilidade técnica de uma classe conter mais de um método com o mesmo nome dentro de sua definição",
      "Um problema exclusivo de bancos de dados relacionais, relacionado a chaves estrangeiras duplicadas entre tabelas"
    ],
    correctAnswer: 0,
    explanation:
      "O problema do diamante ocorre em linguagens com herança múltipla quando duas superclasses compartilham uma base comum e ambas sobrescrevem o mesmo método: fica ambíguo qual implementação uma subclasse que herda de ambas deveria usar. Por isso, muitas linguagens (incluindo TypeScript/JavaScript) permitem herança simples de classes, usando interfaces ou mixins para composição de comportamentos.",
    hint: "Pense em uma hierarquia em formato de losango (diamante), onde duas classes intermediárias herdam da mesma base e uma quarta classe herda de ambas."
  },
  {
    id: "oop-059",
    category: "oop",
    topics: ["dependency-injection", "ioc"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Qual é o papel de um contêiner de Inversão de Controle (IoC container) em uma aplicação orientada a objetos?",
    options: [
      "Gerenciar automaticamente a criação e injeção das dependências entre classes, com base em suas abstrações, reduzindo a necessidade de instanciá-las manualmente",
      "Executar automaticamente todos os testes automatizados de unidade definidos para as classes do projeto",
      "Compilar o código orientado a objetos escrito em TypeScript para uma linguagem de baixo nível, como C ou Rust",
      "Armazenar permanentemente em disco o estado de cada instância criada pelas classes registradas no contêiner"
    ],
    correctAnswer: 0,
    explanation:
      "Um contêiner de IoC centraliza a criação e injeção de dependências entre classes, resolvendo automaticamente quais implementações concretas devem ser fornecidas para cada abstração exigida, reduzindo o acoplamento manual entre componentes.",
    hint: "Pense em uma ferramenta que resolve automaticamente 'quem precisa de quem' em um sistema baseado em injeção de dependência."
  },
  {
    id: "oop-060",
    category: "oop",
    topics: ["mixins"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Por que Mixins são frequentemente usados como alternativa à herança múltipla em linguagens como JavaScript e TypeScript?",
    options: [
      "Porque permitem compor comportamentos de múltiplas fontes em uma classe, sem depender de uma cadeia de herança múltipla que essas linguagens não suportam nativamente",
      "Porque Mixins substituem completamente o uso de classes, eliminando a necessidade de `class` na linguagem",
      "Porque Mixins só podem ser aplicados sobre classes abstratas, nunca sobre classes concretas já instanciáveis",
      "Porque Mixins impedem qualquer forma de reutilização de código entre diferentes classes do mesmo projeto"
    ],
    correctAnswer: 0,
    explanation:
      "Como JavaScript/TypeScript oferecem apenas herança simples de classes, Mixins (funções que estendem uma classe com comportamentos adicionais) permitem compor múltiplos comportamentos reutilizáveis sem recorrer a uma hierarquia de herança múltipla, que não é suportada nativamente.",
    hint: "Pense em como combinar comportamentos de voar e nadar em uma mesma classe, sem herdar de duas classes ao mesmo tempo."
  }
];
