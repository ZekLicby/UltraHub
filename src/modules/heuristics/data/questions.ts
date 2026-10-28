import type { MockupName } from '../mockups/mockups'
import type { HeuristicId } from './heuristics'

export interface Question {
  mockup: MockupName
  scenario: string
  correctId: HeuristicId
  distractorIds: HeuristicId[]
  explanations: Partial<Record<HeuristicId, string>>
}

export interface Phase {
  heuristicId: HeuristicId
  questions: Question[]
}

export const PHASES: Phase[] = [
  {
    heuristicId: 1,
    questions: [
      {
        mockup: "uploadProgresso",
        scenario: "Ao enviar um arquivo grande, o sistema exibe uma barra de progresso com porcentagem e tempo estimado restante.",
        correctId: 1, distractorIds: [6, 8, 5],
        explanations: {
          1: "A barra de progresso e o texto informativo mantêm o usuário ciente do que está acontecendo em tempo real — exatamente a definição de visibilidade do status do sistema.",
          6: "Reconhecimento em vez de memorização trata de não exigir que o usuário lembre informações; aqui o ponto central é informar o andamento de um processo, não evitar memorização.",
          8: "Estética e design minimalista é sobre remover informação irrelevante; a barra de progresso é informação essencial, então não é isso que está em jogo.",
          5: "Prevenção de erros busca impedir que o usuário erre antes de agir; a barra de progresso não previne um erro, apenas comunica o andamento de uma ação já em curso.",
        },
      },
      {
        mockup: "botaoSemFeedback",
        scenario: "O usuário clica no botão 'Enviar' de um formulário três vezes seguidas, mas a tela permanece idêntica, sem spinner, sem mensagem e sem qualquer mudança visível.",
        correctId: 1, distractorIds: [9, 3, 5],
        explanations: {
          1: "A ausência de qualquer feedback após o clique é uma violação direta da visibilidade do status do sistema: o usuário não sabe se a ação foi registrada.",
          9: "Ajudar a reconhecer e corrigir erros pressupõe que um erro foi comunicado; aqui não há sequer uma mensagem, então o problema é a falta de feedback, não a qualidade de uma mensagem de erro.",
          3: "Controle e liberdade tratam de permitir desfazer ou sair de uma ação; o problema aqui é não saber se a ação aconteceu, não a falta de uma saída.",
          5: "Prevenção de erros evitaria, por exemplo, múltiplos envios duplicados desabilitando o botão; mas o cenário descrito é sobre a falta de retorno visual, não sobre prevenir o erro em si.",
        },
      },
      {
        mockup: "autoSalvo",
        scenario: "No topo do documento, um indicador discreto mostra 'Todas as alterações salvas às 14:32', atualizado automaticamente.",
        correctId: 1, distractorIds: [2, 8, 10],
        explanations: {
          1: "Esse indicador comunica continuamente o estado do sistema (documento salvo, e quando), reduzindo a ansiedade do usuário sobre perder o trabalho — visibilidade do status do sistema.",
          2: "Correspondência com o mundo real diz respeito à linguagem e metáforas usadas, não à existência de um indicador de estado.",
          8: "Embora o indicador seja discreto, o motivo de estar ali não é 'não poluir a tela', e sim informar o status — a estética é uma consequência, não a heurística testada.",
          10: "Ajuda e documentação envolve explicar como usar o sistema; aqui não há explicação de uso, apenas um retorno automático de status.",
        },
      },
      {
        mockup: "spinnerSemTexto",
        scenario: "A tela fica em branco por 40 segundos, mostrando apenas um ícone de carregamento giratório, sem nenhum texto, porcentagem ou explicação do que está sendo processado.",
        correctId: 1, distractorIds: [9, 6, 3],
        explanations: {
          1: "Um spinner isolado, sem indicação de progresso, tempo estimado ou o que está sendo feito, é um caso clássico de violação de visibilidade do status do sistema — o feedback é insuficiente.",
          9: "Não há erro ocorrendo neste cenário; o processo apenas está demorando sem explicação, o que é uma questão de comunicação de status, não de recuperação de erro.",
          6: "Reconhecimento em vez de memorização refere-se a não obrigar o usuário a lembrar informações passadas; a espera sem contexto não tem relação com memória.",
          3: "Controle e liberdade tratam de oferecer uma saída ou forma de reverter uma ação; o cenário não menciona a impossibilidade de cancelar o processo, apenas a ausência de qualquer informação sobre o que está acontecendo — o problema é a falta de feedback, não a falta de uma saída.",
        },
      },
    ],
  },
  {
    heuristicId: 2,
    questions: [
      {
        mockup: "iconeLixeira",
        scenario: "Cada arquivo da lista tem, ao lado, um ícone de lata de lixo para representar a ação de excluir.",
        correctId: 2, distractorIds: [6, 4, 8],
        explanations: {
          2: "O ícone de lixeira é uma metáfora do mundo físico (jogar algo fora) aplicada à interface — correspondência entre o sistema e o mundo real.",
          6: "Reconhecimento em vez de memorização se aplica quando o ícone está sempre visível para não exigir lembrar um comando; aqui o ponto central é a metáfora usada, não a visibilidade constante.",
          4: "Consistência trata de o mesmo ícone significar sempre a mesma coisa em todo o sistema; o cenário não menciona uso repetido ou comparação entre telas.",
          8: "Estética minimalista fala sobre remover elementos desnecessários da tela; o ícone de lixeira não é sobre reduzir poluição visual, e sim sobre usar uma metáfora reconhecível.",
        },
      },
      {
        mockup: "dataFamiliar",
        scenario: "O sistema exibe 'terça-feira, 15 de setembro' em vez de um carimbo técnico como '2026-09-15T00:00:00Z'.",
        correctId: 2, distractorIds: [8, 6, 10],
        explanations: {
          2: "Usar datas em linguagem natural, como as pessoas realmente falam, é correspondência entre o sistema e o mundo real — evita jargão técnico.",
          8: "Estética minimalista é sobre remover excesso de informação; aqui o problema não é excesso, é o formato/linguagem usada para exibir a mesma informação.",
          6: "Reconhecimento em vez de memorização trata de exibir opções em vez de exigir lembrar comandos; formatar uma data de forma natural não está relacionado a isso.",
          10: "Ajuda e documentação envolveria explicar o significado do formato técnico; a solução aqui foi eliminar o jargão, não documentá-lo.",
        },
      },
      {
        mockup: "erroTecnico",
        scenario: "Um usuário comum, tentando salvar uma foto de família, recebe a mensagem: 'ERRO 0x8007045D — NTFS_VOLUME_EXCEPTION at 0x4F2A'.",
        correctId: 2, distractorIds: [9, 10, 1],
        explanations: {
          2: "A mensagem usa jargão técnico interno do sistema operacional, completamente distante da linguagem do usuário comum — viola a correspondência com o mundo real.",
          9: "Ajudar a reconhecer e corrigir erros também é violado aqui, mas o problema central apontado no cenário é o vocabulário técnico incompreensível, que é especificamente sobre a linguagem usada, não sobre a ausência de uma solução sugerida.",
          10: "Ajuda e documentação trata de fornecer suporte adicional buscável; o problema aqui não é a falta de um manual, é a própria mensagem estar em linguagem inacessível.",
          1: "Visibilidade do status do sistema está presente (uma mensagem foi exibida); o problema é o conteúdo da mensagem estar em uma linguagem que o usuário não entende.",
        },
      },
      {
        mockup: "carrinhoCompras",
        scenario: "Um site de compras usa o ícone de um carrinho de supermercado para representar os itens que o usuário pretende comprar.",
        correctId: 2, distractorIds: [4, 6, 8],
        explanations: {
          2: "O carrinho de supermercado é uma metáfora direta de uma experiência física familiar, transposta para o mundo digital — correspondência com o mundo real.",
          4: "Consistência importaria se comparássemos o uso do ícone de carrinho em múltiplas telas do mesmo site; o cenário foca na escolha da metáfora em si.",
          6: "Reconhecimento em vez de memorização se relaciona a manter opções visíveis; aqui a questão é por que essa metáfora específica foi escolhida, e não sobre visibilidade.",
          8: "Estética minimalista trata de reduzir elementos desnecessários; o ícone do carrinho não é sobre limpar a tela, é sobre usar um símbolo do mundo real.",
        },
      },
    ],
  },
  {
    heuristicId: 3,
    questions: [
      {
        mockup: "botaoDesfazer",
        scenario: "Ao mover um e-mail para a lixeira, aparece uma notificação: 'E-mail movido para lixeira — Desfazer'.",
        correctId: 3, distractorIds: [5, 9, 1],
        explanations: {
          3: "A opção de desfazer é a 'saída de emergência' clássica: permite que o usuário reverta uma ação indesejada sem consequências — controle e liberdade do usuário.",
          5: "Prevenção de erros tentaria impedir a exclusão acidental antes que ela ocorresse (por exemplo, com uma confirmação); aqui a ação já aconteceu e o sistema oferece uma forma de reverter.",
          9: "Ajudar a reconhecer e corrigir erros trata de mensagens de erro após uma falha do sistema; mover um e-mail para a lixeira não é um erro do sistema, é uma ação do usuário que pode ser revertida.",
          1: "Visibilidade do status do sistema está presente na notificação em si, mas o elemento central testado aqui é a possibilidade de reverter a ação, que é controle e liberdade.",
        },
      },
      {
        mockup: "modalCancelar",
        scenario: "Antes de excluir uma conta permanentemente, o sistema pergunta 'Excluir conta permanentemente?' com botões 'Excluir' e 'Cancelar'.",
        correctId: 3, distractorIds: [5, 9, 4],
        explanations: {
          3: "O botão 'Cancelar' oferece uma saída clara antes de uma ação irreversível, preservando o controle do usuário sobre o processo — controle e liberdade do usuário.",
          5: "Prevenção de erros também está presente (a confirmação evita cliques acidentais), mas o elemento perguntado — a opção de recuar — é especificamente controle e liberdade; prevenção seria, por exemplo, exigir digitar o nome da conta antes de confirmar.",
          9: "Recuperação de erros trata de reagir a algo que já deu errado; aqui nada deu errado ainda, o sistema está oferecendo controle antes da ação definitiva.",
          4: "Consistência envolveria comparar esse padrão de confirmação com outras telas do sistema; o cenário isolado não trata de comparação entre telas.",
        },
      },
      {
        mockup: "checkoutSemVoltar",
        scenario: "Em um checkout de 3 etapas, ao chegar na confirmação de pagamento não há botão 'voltar' nem forma de editar o endereço informado na etapa 1. A única opção é fechar a janela.",
        correctId: 3, distractorIds: [1, 5, 8],
        explanations: {
          3: "A ausência de qualquer forma de voltar ou corrigir uma informação já enviada é uma violação clara de controle e liberdade do usuário, que fica 'preso' no fluxo.",
          1: "Visibilidade do status do sistema diz respeito a saber em que etapa se está e o que está acontecendo; o problema aqui não é falta de informação sobre o estado, é a falta de uma saída ou correção.",
          5: "Prevenção de erros evitaria que o usuário chegasse à confirmação com um endereço errado, por exemplo com uma tela de revisão; mas o cenário já pressupõe que o dado está errado e não há como corrigir — isso é controle, não prevenção.",
          8: "Estética minimalista não tem relação com a existência ou ausência de um botão de navegação funcional.",
        },
      },
      {
        mockup: "sairSemSalvar",
        scenario: "Ao tentar fechar um editor de texto com alterações não salvas, o sistema pergunta e oferece três opções: 'Sair sem salvar', 'Salvar e sair' e 'Continuar editando'.",
        correctId: 3, distractorIds: [9, 5, 6],
        explanations: {
          3: "As três opções dão ao usuário controle total sobre como sair da situação, incluindo a possibilidade de recuar ('Continuar editando') — controle e liberdade do usuário.",
          9: "Não há erro do sistema nesse cenário; o usuário está prestes a tomar uma decisão, não corrigindo uma falha.",
          5: "Prevenção de erros evitaria a perda de dados de forma silenciosa; aqui o sistema já assume que pode haver perda e oferece escolhas — o foco é dar controle sobre o que fazer, não impedir o erro de antemão.",
          6: "Reconhecimento em vez de memorização trataria de mostrar as opções disponíveis sem exigir lembrar comandos; embora as opções estejam visíveis, o que está sendo testado é a capacidade de escolher livremente o desfecho, não a visibilidade em si.",
        },
      },
    ],
  },
  {
    heuristicId: 4,
    questions: [
      {
        mockup: "botaoConsistente",
        scenario: "Em todas as telas do aplicativo (Perfil, Endereço, Pagamento), o botão de salvar tem sempre a mesma cor, o mesmo texto ('Salvar') e fica sempre no canto inferior direito.",
        correctId: 4, distractorIds: [6, 8, 2],
        explanations: {
          4: "Manter a mesma aparência, texto e posição para a mesma ação em todas as telas é a definição de consistência e padrões — o usuário aprende uma vez e aplica em todo o sistema.",
          6: "Reconhecimento em vez de memorização se beneficia da consistência, mas o que está sendo descrito diretamente é a repetição do mesmo padrão visual entre telas, que é consistência.",
          8: "Estética minimalista trata de remover excesso de elementos; a posição e a cor do botão não dizem respeito a quantidade de informação na tela.",
          2: "Correspondência com o mundo real envolveria usar termos e metáforas familiares; aqui o ponto central é a repetição do mesmo padrão em telas diferentes.",
        },
      },
      {
        mockup: "iconeInconsistente",
        scenario: "O ícone de lápis (✏️) abre o documento para leitura na tela 'Documentos', mas na tela 'Contatos' o mesmo ícone exclui o contato.",
        correctId: 4, distractorIds: [2, 5, 9],
        explanations: {
          4: "Usar o mesmo ícone com significados diferentes em partes distintas do sistema obriga o usuário a reaprender o que cada símbolo faz — violação de consistência e padrões.",
          2: "Correspondência com o mundo real avaliaria se o ícone escolhido faz sentido como metáfora; o problema aqui não é a metáfora do lápis em si, é ela significar coisas diferentes em lugares diferentes.",
          5: "Prevenção de erros seria relevante se o clique errado (achando que abriria e na verdade excluiu) causasse dano sem confirmação; mas o cenário descreve a causa raiz, que é a falta de consistência no significado do ícone.",
          9: "Ajudar a reconhecer e corrigir erros trataria da reação do sistema após o erro acontecer; o cenário descreve a origem do problema, que é a inconsistência entre telas.",
        },
      },
      {
        mockup: "padraoPlataforma",
        scenario: "O aplicativo usa o menu '☰' no canto superior esquerdo e o gesto de deslizar para voltar, seguindo exatamente os padrões já conhecidos do sistema operacional do celular.",
        correctId: 4, distractorIds: [6, 7, 2],
        explanations: {
          4: "Seguir as convenções já estabelecidas pela plataforma (consistência externa) é parte da heurística de consistência e padrões — o usuário já sabe usar sem aprender de novo.",
          6: "Reconhecimento em vez de memorização se beneficia disso, mas o que está descrito é especificamente a adesão a padrões já conhecidos de outras aplicações, que é consistência.",
          7: "Flexibilidade e eficiência tratam de atalhos para usuários avançados; seguir um padrão de plataforma beneficia todos os usuários igualmente, não é um acelerador extra.",
          2: "Correspondência com o mundo real trata de metáforas do mundo físico; aqui o padrão seguido é de convenção digital de plataforma, não do mundo real.",
        },
      },
      {
        mockup: "termosInconsistentes",
        scenario: "A mesma ação de apagar um arquivo é chamada de 'Excluir' na lista, 'Deletar' no menu de contexto e 'Remover' na tela de confirmação.",
        correctId: 4, distractorIds: [2, 9, 1],
        explanations: {
          4: "Usar três termos diferentes para a mesma ação faz o usuário se perguntar se são coisas diferentes — exatamente o problema que a consistência e padrões busca evitar.",
          2: "Correspondência com o mundo real seria sobre usar palavras que fazem sentido fora do sistema; os três termos ('excluir', 'deletar', 'remover') já são familiares — o problema é a falta de padronização entre eles, não o vocabulário em si.",
          9: "Ajudar a reconhecer e corrigir erros trata de mensagens após uma falha; a variação de nomenclatura não é um erro do sistema, é uma inconsistência de terminologia.",
          1: "Visibilidade do status do sistema não está relacionada a qual palavra é usada para nomear uma ação, e sim a informar o que está acontecendo.",
        },
      },
    ],
  },
  {
    heuristicId: 5,
    questions: [
      {
        mockup: "botaoDesabilitado",
        scenario: "Em um formulário, o botão 'Enviar' permanece desabilitado (acinzentado) até que todos os campos obrigatórios estejam preenchidos corretamente.",
        correctId: 5, distractorIds: [9, 1, 3],
        explanations: {
          5: "Impedir fisicamente o envio incompleto, antes mesmo de tentar, é prevenção de erros — o design evita que o problema aconteça, em vez de corrigi-lo depois.",
          9: "Ajudar a reconhecer e corrigir erros entraria em ação se o envio fosse permitido e depois recusado com uma mensagem; aqui a submissão incompleta nem chega a ser tentada.",
          1: "Visibilidade do status do sistema informa o que está acontecendo; o botão desabilitado é mais do que informação, é uma barreira ativa contra o erro.",
          3: "Controle e liberdade tratam de reverter ações já feitas; aqui nenhuma ação foi realizada ainda, o sistema está impedindo que o erro ocorra de antemão.",
        },
      },
      {
        mockup: "confirmacaoExclusao",
        scenario: "Para cancelar definitivamente a conta, o sistema pede que o usuário digite a palavra 'EXCLUIR' em um campo antes de liberar o botão de confirmação.",
        correctId: 5, distractorIds: [3, 9, 6],
        explanations: {
          5: "Exigir uma ação deliberada e específica (digitar uma palavra) antes de uma exclusão irreversível é uma barreira desenhada para evitar cliques acidentais — prevenção de erros.",
          3: "Controle e liberdade estariam presentes se houvesse, por exemplo, um botão 'Cancelar' ao lado; o mecanismo de digitar a palavra é, especificamente, uma barreira que dificulta cometer o erro por engano.",
          9: "Recuperação de erros agiria depois que a exclusão já tivesse ocorrido por engano; aqui o objetivo é impedir que isso aconteça antes.",
          6: "Reconhecimento em vez de memorização tratatia de não exigir que o usuário lembre informações; pedir para digitar uma palavra específica é justamente o oposto — uma barreira deliberada, não uma facilidade de memória.",
        },
      },
      {
        mockup: "forcaSenha",
        scenario: "Ao criar uma senha, um indicador visual mostra em tempo real se ela é fraca, média ou forte, antes mesmo de o usuário confirmar o cadastro.",
        correctId: 5, distractorIds: [1, 9, 6],
        explanations: {
          5: "O indicador orienta o usuário a criar uma senha segura antes de finalizar o cadastro, prevenindo o problema de uma senha fraca em vez de rejeitá-la depois — prevenção de erros.",
          1: "Visibilidade do status do sistema está presente no indicador em si, mas a razão de ele existir é evitar que o usuário cometa o erro de escolher uma senha fraca, o que caracteriza prevenção.",
          9: "Ajudar a corrigir erros entraria em ação se a senha fosse recusada só depois de enviada, com uma mensagem de erro; aqui a orientação acontece antes da tentativa de envio.",
          6: "Reconhecimento em vez de memorização não está relacionado à força da senha exibida, e sim a evitar que o usuário precise lembrar de informações do próprio sistema.",
        },
      },
      {
        mockup: "campoDataLivre",
        scenario: "Um campo de 'data de nascimento' aceita qualquer texto livre, sem máscara nem calendário, permitindo que o usuário digite algo como '32/13/199'.",
        correctId: 5, distractorIds: [9, 2, 4],
        explanations: {
          5: "A ausência de uma máscara, calendário ou validação de formato é uma falha de prevenção de erros: o design deveria impedir a entrada de datas inválidas, não permiti-las.",
          9: "Ajudar a reconhecer e corrigir erros seria relevante se, após o envio, aparecesse uma mensagem explicando o problema; o cenário descreve a falta de uma barreira anterior a isso.",
          2: "Correspondência com o mundo real trataria do formato de exibição da data; o problema aqui é estrutural — a inexistência de qualquer restrição de entrada.",
          4: "Consistência envolveria comparar esse campo com outros campos de data do mesmo sistema; o cenário isolado foca na ausência de uma trava contra erros de digitação.",
        },
      },
    ],
  },
  {
    heuristicId: 6,
    questions: [
      {
        mockup: "menuVisivel",
        scenario: "Ao abrir o menu 'Formatar', o usuário vê uma lista com Negrito, Itálico, Sublinhado e Cor do texto, em vez de precisar lembrar comandos de teclado para cada função.",
        correctId: 6, distractorIds: [7, 4, 1],
        explanations: {
          6: "Mostrar todas as opções disponíveis, em vez de exigir que o usuário memorize comandos, é exatamente reconhecimento em vez de memorização.",
          7: "Flexibilidade e eficiência trata de oferecer atalhos adicionais para quem já sabe usar o sistema; o menu visível serve principalmente para quem ainda não memorizou nada.",
          4: "Consistência envolveria comparar esse menu com outros menus do sistema; o ponto central aqui é a própria existência de opções visíveis para não depender da memória.",
          1: "Visibilidade do status do sistema trata de informar o que está acontecendo durante um processo; o menu não está comunicando um status, está oferecendo opções para escolha.",
        },
      },
      {
        mockup: "buscaRecente",
        scenario: "Ao clicar no campo de busca, o sistema sugere automaticamente as últimas pesquisas feitas pelo usuário, como 'Tênis de corrida' e 'Fone de ouvido bluetooth'.",
        correctId: 6, distractorIds: [7, 2, 10],
        explanations: {
          6: "Sugerir buscas recentes evita que o usuário precise lembrar exatamente o que pesquisou antes — reconhecimento em vez de memorização.",
          7: "Flexibilidade e eficiência de uso trata de acelerar tarefas para usuários experientes com atalhos; aqui o benefício é para qualquer usuário que não lembra o que buscou, independente de experiência.",
          2: "Correspondência com o mundo real trata de linguagem e metáforas; a sugestão de buscas recentes não envolve escolha de palavras familiares, e sim reduzir a carga de memória.",
          10: "Ajuda e documentação forneceria explicações sobre como usar a busca; a lista de buscas recentes não explica nada, apenas evita a necessidade de lembrar.",
        },
      },
      {
        mockup: "codigoDecoreba",
        scenario: "Para pedir uma peça de reposição, o funcionário precisa digitar um código no formato interno (ex.: '7A-334X-01'). Não existe catálogo, busca ou lista visual — os códigos precisam ser memorizados ou consultados em papel à parte.",
        correctId: 6, distractorIds: [10, 5, 2],
        explanations: {
          6: "Exigir que o usuário memorize ou consulte externamente códigos, em vez de reconhecer visualmente as opções em um catálogo, é uma violação de reconhecimento em vez de memorização.",
          10: "Ajuda e documentação poderia amenizar o problema com um manual de códigos, mas a causa raiz é o design não oferecer reconhecimento visual das opções dentro do próprio sistema.",
          5: "Prevenção de erros seria sobre impedir a digitação de um código inválido; o cenário descrito é sobre a carga de memória exigida do usuário, não sobre uma validação ausente.",
          2: "Correspondência com o mundo real envolveria a linguagem usada nos códigos; o problema central é a ausência de uma forma visual de reconhecer as opções, não o formato do código em si.",
        },
      },
      {
        mockup: "tooltipIcone",
        scenario: "Ao passar o mouse sobre um ícone de clipe de papel na barra de ferramentas, aparece a dica 'Anexar arquivo'.",
        correctId: 6, distractorIds: [1, 10, 4],
        explanations: {
          6: "A dica elimina a necessidade de o usuário memorizar o que cada ícone significa, permitindo reconhecer a função no momento do uso — reconhecimento em vez de memorização.",
          1: "Visibilidade do status do sistema trata de informar o andamento de processos; a dica de um ícone não é sobre status, é sobre esclarecer uma função.",
          10: "Ajuda e documentação normalmente se refere a conteúdo mais extenso e buscável (manuais, FAQ); uma dica contextual pontual sobre um ícone específico é mais diretamente ligada a evitar a necessidade de memorização.",
          4: "Consistência envolveria o ícone ter sempre o mesmo significado em toda a aplicação; o cenário foca em explicar o ícone no momento, não em compará-lo entre telas.",
        },
      },
    ],
  },
  {
    heuristicId: 7,
    questions: [
      {
        mockup: "atalhoTeclado",
        scenario: "No menu 'Salvar', o sistema mostra ao lado o atalho 'Ctrl + S'. Iniciantes usam o menu; usuários experientes usam o atalho direto.",
        correctId: 7, distractorIds: [6, 4, 1],
        explanations: {
          7: "Oferecer um caminho mais rápido para quem já domina o sistema, sem remover a opção visível para iniciantes, é a definição de flexibilidade e eficiência de uso.",
          6: "Reconhecimento em vez de memorização explica por que o atalho é mostrado no menu (para quem ainda não decorou); mas o elemento central testado é a existência do atalho em si como acelerador.",
          4: "Consistência envolveria esse atalho seguir convenções já usadas em outros programas; o cenário foca no benefício de velocidade para usuários avançados.",
          1: "Visibilidade do status do sistema não está relacionada à existência de atalhos de teclado.",
        },
      },
      {
        mockup: "dashboardPersonalizavel",
        scenario: "O painel principal permite que o usuário arraste, reorganize e esconda os widgets que não usa, personalizando a própria experiência.",
        correctId: 7, distractorIds: [8, 3, 6],
        explanations: {
          7: "Permitir personalização para adaptar o sistema ao próprio fluxo de trabalho do usuário é flexibilidade e eficiência de uso.",
          8: "Estética minimalista trataria de o sistema já vir enxuto por padrão; aqui o ponto é dar ao usuário o poder de ajustar conforme sua necessidade, não uma limpeza visual predefinida.",
          3: "Controle e liberdade do usuário trata de desfazer ações ou sair de estados indesejados; personalizar um painel para ganhar eficiência é um conceito diferente, voltado à produtividade.",
          6: "Reconhecimento em vez de memorização não está relacionado à possibilidade de reorganizar widgets, e sim a evitar exigir memória do usuário.",
        },
      },
      {
        mockup: "unicaFormaTarefa",
        scenario: "Para arquivar um e-mail, é obrigatório abrir a mensagem, clicar em 'Mais opções', rolar até o final e clicar em 'Arquivar'. Não existe atalho, gesto ou botão direto na lista — nem para quem faz isso todos os dias.",
        correctId: 7, distractorIds: [1, 6, 8],
        explanations: {
          7: "A ausência de qualquer forma mais rápida de realizar uma tarefa repetitiva, mesmo para usuários frequentes, é uma violação de flexibilidade e eficiência de uso.",
          1: "Visibilidade do status do sistema não está em questão aqui; o problema é a inexistência de um caminho mais curto para uma tarefa comum.",
          6: "Reconhecimento em vez de memorização seria relevante se as opções não estivessem visíveis; no cenário elas estão visíveis, porém exigem muitos passos, o que é uma questão de eficiência.",
          8: "Estética minimalista trata de remover informação irrelevante da tela; o problema aqui é o número de passos exigidos para completar a tarefa, não excesso de informação visual.",
        },
      },
      {
        mockup: "preenchimentoAutomatico",
        scenario: "Ao preencher um novo pedido, os campos de nome e endereço já vêm preenchidos automaticamente com os dados salvos da última compra do usuário.",
        correctId: 7, distractorIds: [6, 5, 2],
        explanations: {
          7: "Reaproveitar dados já fornecidos para acelerar tarefas repetidas para um usuário recorrente é flexibilidade e eficiência de uso.",
          6: "Reconhecimento em vez de memorização evitaria que o usuário precisasse lembrar o próprio endereço; aqui o sistema vai além, preenchendo automaticamente para ganhar velocidade, o que caracteriza eficiência.",
          5: "Prevenção de erros trataria de evitar que o usuário digite um endereço errado; o preenchimento automático aqui tem como objetivo principal poupar tempo em uma tarefa repetida.",
          2: "Correspondência com o mundo real não está relacionada ao preenchimento automático de dados previamente informados.",
        },
      },
    ],
  },
  {
    heuristicId: 8,
    questions: [
      {
        mockup: "telaLimpa",
        scenario: "A tela inicial de um aplicativo bancário mostra apenas o saldo da conta e o botão 'Transferir', sem nenhum outro elemento.",
        correctId: 8, distractorIds: [6, 1, 4],
        explanations: {
          8: "Exibir somente o essencial, sem informação irrelevante competindo por atenção, é estética e design minimalista.",
          6: "Reconhecimento em vez de memorização trataria de tornar visíveis opções que, de outra forma, precisariam ser lembradas; aqui o ponto é a ausência de elementos supérfluos na tela, não a visibilidade de opções específicas.",
          1: "Visibilidade do status do sistema envolveria informar o andamento de um processo; a tela descrita apenas apresenta informação estática de saldo, sem indicar um processo em curso.",
          4: "Consistência envolveria comparar essa tela com o padrão usado em outras telas do mesmo aplicativo; o cenário isolado destaca a simplicidade da tela em si.",
        },
      },
      {
        mockup: "telaPoluida",
        scenario: "Na tela de finalização de compra, banners de promoção, cupons, pedidos de avaliação e notificações piscam ao mesmo tempo, disputando espaço com o botão 'Confirmar pedido'.",
        correctId: 8, distractorIds: [1, 3, 9],
        explanations: {
          8: "O excesso de elementos irrelevantes competindo com a ação principal é uma violação clara de estética e design minimalista.",
          1: "Visibilidade do status do sistema não está em questão; os elementos descritos são promocionais e não comunicam o estado de um processo em andamento.",
          3: "Controle e liberdade do usuário trataria da capacidade de fechar ou ignorar essas distrações e navegar livremente; o cenário descreve o problema da poluição visual em si, e não a falta de uma saída.",
          9: "Ajudar a reconhecer e corrigir erros não é o problema aqui, já que nenhum erro está sendo relatado — a questão é o excesso de estímulos visuais irrelevantes.",
        },
      },
      {
        mockup: "hierarquiaClara",
        scenario: "Na tela de confirmação, o título 'Confirmar pedido' aparece em destaque, seguido do valor total e prazo de entrega, com o botão de ação logo abaixo — sem nenhum outro elemento competindo por atenção.",
        correctId: 8, distractorIds: [1, 6, 2],
        explanations: {
          8: "A hierarquia visual clara, com apenas as informações necessárias para a decisão, é um exemplo de estética e design minimalista bem aplicado.",
          1: "Visibilidade do status do sistema envolveria informar o andamento de um processo em execução; esta tela apresenta dados de decisão, não o progresso de uma tarefa.",
          6: "Reconhecimento em vez de memorização não está em jogo aqui, pois o cenário não trata de evitar que o usuário lembre informações passadas.",
          2: "Correspondência com o mundo real trataria da linguagem e metáforas usadas; o ponto central do cenário é a organização e limpeza da informação apresentada.",
        },
      },
      {
        mockup: "destaqueAcaoPrincipal",
        scenario: "Na tela, o botão 'Finalizar compra' aparece em uma cor sólida e chamativa, enquanto 'Continuar comprando' é discreto e sem preenchimento, deixando clara qual é a ação principal.",
        correctId: 8, distractorIds: [4, 7, 3],
        explanations: {
          8: "Usar contraste visual para destacar a ação mais importante e reduzir o peso das secundárias é uma aplicação de estética e design minimalista — cada elemento tem seu peso visual proporcional à importância.",
          4: "Consistência trataria de esse padrão de cores se repetir em todas as telas do sistema; o cenário isolado foca em como o contraste organiza a atenção dentro desta tela específica.",
          7: "Flexibilidade e eficiência de uso trata de atalhos para usuários experientes; o destaque visual beneficia todos os usuários igualmente, não é um acelerador para avançados.",
          3: "Controle e liberdade do usuário trataria da existência de uma saída ou opção de desfazer; aqui as duas opções já são caminhos válidos e visíveis, o ponto é como elas são hierarquizadas visualmente.",
        },
      },
    ],
  },
  {
    heuristicId: 9,
    questions: [
      {
        mockup: "erroClaro",
        scenario: "Ao digitar 'joana#email.com' em um campo de e-mail, aparece a mensagem: 'E-mail inválido. Use o formato nome@dominio.com'.",
        correctId: 9, distractorIds: [5, 2, 1],
        explanations: {
          9: "A mensagem indica exatamente qual é o problema e como corrigi-lo, o que é a essência de ajudar o usuário a reconhecer, diagnosticar e se recuperar de um erro.",
          5: "Prevenção de erros tentaria impedir a digitação incorreta antes do envio, por exemplo com uma máscara; aqui o erro já ocorreu e o sistema está reagindo a ele com uma explicação clara.",
          2: "Correspondência com o mundo real está presente na linguagem simples da mensagem, mas o elemento central testado é a orientação sobre como corrigir o erro específico.",
          1: "Visibilidade do status do sistema informaria genericamente que algo está errado; aqui a mensagem vai além, explicando o problema e a solução, o que caracteriza especificamente a recuperação de erros.",
        },
      },
      {
        mockup: "erroGenerico",
        scenario: "Ao tentar concluir uma ação, o usuário recebe apenas 'Erro 500', sem nenhuma outra explicação ou sugestão do que fazer.",
        correctId: 9, distractorIds: [1, 2, 10],
        explanations: {
          9: "Uma mensagem que não explica o problema nem sugere uma solução falha em ajudar o usuário a reconhecer, diagnosticar e se recuperar do erro.",
          1: "Visibilidade do status do sistema está tecnicamente presente (algo foi informado), mas o problema apontado no cenário é a qualidade insuficiente dessa comunicação diante de um erro, que é o núcleo da heurística de recuperação de erros.",
          2: "Correspondência com o mundo real seria relevante se o código '500' fosse substituído por uma frase mais humana; mas o problema central é a ausência de qualquer orientação sobre o que fazer a seguir.",
          10: "Ajuda e documentação poderia complementar com um link de suporte; o problema central do cenário é a mensagem de erro em si não cumprir seu papel informativo.",
        },
      },
      {
        mockup: "bordaVermelhaCampo",
        scenario: "Ao submeter um formulário, o campo 'Telefone' fica destacado com borda vermelha e um ícone de alerta, enquanto o campo 'Nome', preenchido corretamente, mostra um sinal de confirmação.",
        correctId: 9, distractorIds: [5, 4, 1],
        explanations: {
          9: "Destacar visualmente onde está o problema, junto de um indicador de erro, ajuda o usuário a localizar e entender rapidamente o que precisa ser corrigido — recuperação de erros.",
          5: "Prevenção de erros buscaria impedir que o campo fosse submetido incorreto, por exemplo com uma máscara de telefone; aqui a submissão já ocorreu e o sistema está sinalizando o erro após o fato.",
          4: "Consistência envolveria esse padrão de destaque se repetir em todo o sistema; o cenário isolado foca em como o erro específico é comunicado neste formulário.",
          1: "Visibilidade do status do sistema também está presente — a cor indica o estado de validação de cada campo — mas o elemento central testado aqui é ajudar o usuário a identificar e corrigir o erro específico: o ícone de alerta aponta exatamente o que está errado, o que vai além de só informar um estado.",
        },
      },
      {
        mockup: "sugestaoCorrecao",
        scenario: "Ao digitar 'gogle.com' na barra de endereços, o navegador sugere: 'Você quis dizer google.com?'.",
        correctId: 9, distractorIds: [6, 2, 1],
        explanations: {
          9: "Sugerir ativamente a correção mais provável para um erro de digitação é uma forma avançada de ajudar o usuário a se recuperar do erro.",
          6: "Reconhecimento em vez de memorização não está em jogo, pois o sistema não está evitando que o usuário lembre algo — está corrigindo um erro de digitação já cometido.",
          2: "Correspondência com o mundo real não é o ponto central; a sugestão é sobre corrigir um erro específico de digitação, não sobre a linguagem usada na interface.",
          1: "Visibilidade do status do sistema não trata de sugerir correções, apenas de informar o que está acontecendo.",
        },
      },
    ],
  },
  {
    heuristicId: 10,
    questions: [
      {
        mockup: "centralAjudaBusca",
        scenario: "O aplicativo tem uma Central de Ajuda com campo de busca, onde o usuário pode digitar 'recuperar senha' e encontrar o artigo correspondente.",
        correctId: 10, distractorIds: [6, 9, 1],
        explanations: {
          10: "Uma central de ajuda buscável, com conteúdo organizado para consulta quando necessário, é exatamente a heurística de ajuda e documentação.",
          6: "Reconhecimento em vez de memorização trata de reduzir a carga de memória durante o uso normal do sistema; a central de ajuda é um recurso de consulta à parte, voltado para quando o usuário precisa de suporte adicional.",
          9: "Ajudar a reconhecer e corrigir erros é acionado no momento de uma falha específica; a central de ajuda é um recurso mais amplo, disponível independentemente de um erro estar ocorrendo.",
          1: "Visibilidade do status do sistema trata do andamento de processos em tempo real, não de um recurso de consulta e suporte.",
        },
      },
      {
        mockup: "tooltipContextual",
        scenario: "Ao lado do campo 'Taxa CDI (%)' em uma calculadora de investimentos, um ícone 'i' explica: 'Percentual do CDI usado para calcular seu rendimento mensal'.",
        correctId: 10, distractorIds: [6, 2, 9],
        explanations: {
          10: "Fornecer uma explicação contextual sobre um termo técnico específico do domínio é uma forma pontual de ajuda e documentação, entregue exatamente onde é necessária.",
          6: "Reconhecimento em vez de memorização evitaria pedir que o usuário lembre de algo já visto antes; aqui o objetivo é explicar um conceito técnico do domínio financeiro, o que é ajuda contextual.",
          2: "Correspondência com o mundo real seria usar linguagem simples no rótulo do campo em si; a explicação adicional sobre o que é 'CDI' é um recurso de ajuda complementar, não uma mudança de vocabulário da interface.",
          9: "Ajudar a corrigir erros pressupõe que algo deu errado; aqui não há erro, apenas uma dúvida potencial sobre um termo técnico, esclarecida proativamente.",
        },
      },
      {
        mockup: "semDocumentacao",
        scenario: "Um sistema complexo de configuração de rede não tem manual, tooltips, FAQ ou canal de suporte. O usuário só tem a tela e um campo em branco para preencher.",
        correctId: 10, distractorIds: [6, 9, 5],
        explanations: {
          10: "A ausência completa de qualquer recurso de apoio para uma tarefa complexa é uma violação de ajuda e documentação — sistemas complexos precisam de suporte disponível quando necessário.",
          6: "Reconhecimento em vez de memorização trataria de tornar visíveis opções durante o uso; o problema aqui é mais amplo — a falta de qualquer explicação de apoio, não apenas a falta de opções visíveis.",
          9: "Ajudar a corrigir erros entraria em ação diante de uma falha específica já ocorrida; o cenário descreve a ausência de suporte mesmo antes de qualquer erro acontecer.",
          5: "Prevenção de erros trataria de o design impedir configurações inválidas; o cenário descrito é sobre a falta de explicação de como usar o sistema corretamente, não sobre uma barreira técnica ausente.",
        },
      },
      {
        mockup: "faqCategorias",
        scenario: "A página de Perguntas Frequentes organiza o conteúdo em categorias claras, como 'Pedidos e entregas', 'Pagamentos' e 'Conta e segurança'.",
        correctId: 10, distractorIds: [4, 8, 6],
        explanations: {
          10: "Organizar o conteúdo de suporte em categorias facilita que o usuário encontre a ajuda de que precisa — uma boa prática dentro da heurística de ajuda e documentação.",
          4: "Consistência envolveria comparar essa organização com padrões usados em outras telas do sistema; o cenário foca na organização do conteúdo de ajuda em si.",
          8: "Estética minimalista trataria de remover informação irrelevante da tela; a categorização do FAQ é sobre facilitar a busca por conteúdo de suporte, não sobre reduzir elementos visuais.",
          6: "Reconhecimento em vez de memorização diz respeito ao uso cotidiano do sistema; o FAQ é um recurso de consulta complementar, acessado quando o usuário busca ajuda.",
        },
      },
    ],
  },
]

export const ALL_QUESTIONS: Question[] = PHASES.flatMap((phase) => phase.questions)
