import type { ReactElement } from 'react'
import { WindowFrame } from '../../../components'
import s from './Mockups.module.css'

const cx = (...classes: string[]) => classes.join(' ')

export const mockups = {
  uploadProgresso: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          Enviando
          {' '}
          <strong>
            relatorio_final.pdf
          </strong>
          …
        </p>
        <div className={s.progress}>
          <div style={{ width: '64%' }}>
          </div>
        </div>
        <p className={s.smallText}>
          64% concluído — cerca de 8 segundos restantes
        </p>
      </div>
    </WindowFrame>
  ),
  botaoSemFeedback: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          Formulário de cadastro preenchido.
        </p>
        <span className={cx(s.button, s.blue)}>
          Enviar
        </span>
        <p className={s.smallText}>
          O usuário clicou 3 vezes. A tela permanece exatamente igual, sem spinner, sem mensagem, sem mudança.
        </p>
      </div>
    </WindowFrame>
  ),
  autoSalvo: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          📝 Documento sem título
        </p>
        <div className={s.badge}>
          ✅ Todas as alterações salvas às 14:32
        </div>
      </div>
    </WindowFrame>
  ),
  spinnerSemTexto: () => (
    <WindowFrame>
      <div className={s.body} style={{ textAlign: 'center' }}>
        <span className={s.bigIcon}>
          ⏳
        </span>
        <p className={s.smallText}>
          Tela em branco há 40 segundos, sem texto, sem porcentagem, sem indicação do que está sendo processado.
        </p>
      </div>
    </WindowFrame>
  ),
  iconeLixeira: () => (
    <WindowFrame>
      <div className={s.body}>
        <ul className={s.list}>
          <li>
            relatorio.docx &nbsp;&nbsp; 🗑️
          </li>
          <li>
            foto_evento.png &nbsp;&nbsp; 🗑️
          </li>
        </ul>
        <p className={s.smallText}>
          Ícone de lata de lixo ao lado de cada arquivo, representando a ação "excluir".
        </p>
      </div>
    </WindowFrame>
  ),
  dataFamiliar: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          Sua entrega chega em:
          {' '}
          <strong>
            terça-feira, 15 de setembro
          </strong>
        </p>
        <p className={s.smallText}>
          Em vez de exibir "2026-09-15T00:00:00Z" ou "epoch: 1789430400".
        </p>
      </div>
    </WindowFrame>
  ),
  erroTecnico: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={cx(s.field, s.error)}>
          ERRO 0x8007045D — NTFS_VOLUME_EXCEPTION at 0x4F2A
        </div>
        <p className={s.smallText}>
          Mensagem exibida para um usuário comum tentando salvar uma foto de família.
        </p>
      </div>
    </WindowFrame>
  ),
  carrinhoCompras: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.row}>
          <span className={s.bigIcon}>
            🛒
          </span>
          <span>
            3 itens
          </span>
        </div>
        <p className={s.smallText}>
          Ícone de carrinho de supermercado usado para representar a área de compras de um site.
        </p>
      </div>
    </WindowFrame>
  ),
  botaoDesfazer: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.toast}>
          🗑️ E-mail movido para lixeira &nbsp;
          {' '}
          <u>
            Desfazer
          </u>
        </div>
      </div>
    </WindowFrame>
  ),
  modalCancelar: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          <strong>
            Excluir conta permanentemente?
          </strong>
        </p>
        <p className={s.smallText}>
          Essa ação não pode ser desfeita.
        </p>
        <span className={cx(s.button, s.red)}>
          Excluir
        </span>
        <span className={cx(s.button, s.gray)}>
          Cancelar
        </span>
      </div>
    </WindowFrame>
  ),
  checkoutSemVoltar: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          Etapa 3 de 3 — Pagamento confirmado
        </p>
        <p className={s.smallText}>
          Não há botão "voltar", nem opção de editar o endereço de entrega informado na etapa 1. A única ação disponível é fechar a janela.
        </p>
      </div>
    </WindowFrame>
  ),
  sairSemSalvar: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          <strong>
            Sair sem salvar as alterações?
          </strong>
        </p>
        <span className={cx(s.button, s.red)}>
          Sair sem salvar
        </span>
        <span className={cx(s.button, s.blue)}>
          Salvar e sair
        </span>
        <span className={cx(s.button, s.ghost)}>
          Continuar editando
        </span>
      </div>
    </WindowFrame>
  ),
  botaoConsistente: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Tela "Perfil" &nbsp;→&nbsp;
          {' '}
          <span className={cx(s.button, s.blue)}>
            Salvar
          </span>
          {' '}
          (canto inferior direito)
        </p>
        <p className={s.smallText}>
          Tela "Endereço" &nbsp;→&nbsp;
          {' '}
          <span className={cx(s.button, s.blue)}>
            Salvar
          </span>
          {' '}
          (canto inferior direito)
        </p>
        <p className={s.smallText}>
          Tela "Pagamento" &nbsp;→&nbsp;
          {' '}
          <span className={cx(s.button, s.blue)}>
            Salvar
          </span>
          {' '}
          (canto inferior direito)
        </p>
      </div>
    </WindowFrame>
  ),
  iconeInconsistente: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Na tela "Documentos", o ícone ✏️ abre o arquivo para leitura.
        </p>
        <p className={s.smallText}>
          Na tela "Contatos", o mesmíssimo ícone ✏️ exclui o contato.
        </p>
      </div>
    </WindowFrame>
  ),
  padraoPlataforma: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          O aplicativo usa o menu "☰" no canto superior esquerdo e gestos de deslizar para voltar, exatamente como as demais aplicações do celular.
        </p>
      </div>
    </WindowFrame>
  ),
  termosInconsistentes: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Na lista de arquivos, a ação se chama
          {' '}
          <strong>
            "Excluir"
          </strong>
          .
        </p>
        <p className={s.smallText}>
          No menu de contexto do mesmo item, a mesma ação aparece como
          {' '}
          <strong>
            "Deletar"
          </strong>
          .
        </p>
        <p className={s.smallText}>
          Na confirmação, o botão diz
          {' '}
          <strong>
            "Remover"
          </strong>
          .
        </p>
      </div>
    </WindowFrame>
  ),
  forcaSenha: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          ••••••••
        </div>
        <div className={s.progress}>
          <div style={{ width: '80%', background: 'var(--color-green-solid)' }}>
          </div>
        </div>
        <p className={s.smallText}>
          Senha forte — inclui letras, números e símbolo.
        </p>
      </div>
    </WindowFrame>
  ),
  confirmacaoExclusao: () => (
    <WindowFrame>
      <div className={s.body}>
        <p>
          Digite
          {' '}
          <strong>
            EXCLUIR
          </strong>
          {' '}
          para confirmar o cancelamento definitivo da conta:
        </p>
        <div className={s.field}>
          &nbsp;
        </div>
      </div>
    </WindowFrame>
  ),
  botaoDesabilitado: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          Nome
        </div>
        <div className={cx(s.field, s.error)}>
          E-mail (obrigatório, vazio)
        </div>
        <span className={cx(s.button, s.gray)} style={{ opacity: '.5', pointerEvents: 'none' }}>
          Enviar (desabilitado)
        </span>
        <p className={s.smallText}>
          O botão só é ativado quando todos os campos obrigatórios são preenchidos corretamente.
        </p>
      </div>
    </WindowFrame>
  ),
  campoDataLivre: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Data de nascimento:
        </p>
        <div className={s.field}>
          32/13/199 (texto livre, sem calendário nem máscara)
        </div>
        <p className={s.smallText}>
          O sistema aceita qualquer sequência de caracteres nesse campo.
        </p>
      </div>
    </WindowFrame>
  ),
  menuVisivel: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Menu "Formatar" aberto, mostrando: Negrito, Itálico, Sublinhado, Cor do texto…
        </p>
        <p className={s.smallText}>
          O usuário não precisa lembrar comandos — basta olhar a lista.
        </p>
      </div>
    </WindowFrame>
  ),
  buscaRecente: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          Buscar…
        </div>
        <ul className={s.list}>
          <li>
            🕐 Tênis de corrida
          </li>
          <li>
            🕐 Fone de ouvido bluetooth
          </li>
        </ul>
      </div>
    </WindowFrame>
  ),
  codigoDecoreba: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Para pedir uma peça, digite o código no formato interno (ex.:
          {' '}
          <strong>
            7A-334X-01
          </strong>
          ). Não há catálogo, busca ou lista visual — o usuário precisa memorizar ou ter anotado os códigos.
        </p>
      </div>
    </WindowFrame>
  ),
  tooltipIcone: () => (
    <WindowFrame>
      <div className={s.body}>
        <span className={cx(s.button, s.ghost)}>
          📎
        </span>
        <div className={s.toast}>
          Anexar arquivo
        </div>
        <p className={s.smallText}>
          Dica exibida ao passar o mouse sobre o ícone.
        </p>
      </div>
    </WindowFrame>
  ),
  atalhoTeclado: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Menu "Salvar" mostra ao lado:
          {' '}
          <strong>
            Ctrl + S
          </strong>
        </p>
        <p className={s.smallText}>
          Iniciantes clicam no menu; usuários experientes usam o atalho direto.
        </p>
      </div>
    </WindowFrame>
  ),
  dashboardPersonalizavel: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Painel com widgets arrastáveis. O usuário reorganiza e esconde os cartões que não usa.
        </p>
      </div>
    </WindowFrame>
  ),
  unicaFormaTarefa: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Para arquivar um e-mail, é obrigatório: abrir o e-mail → clicar em "Mais opções" → rolar até o final → clicar em "Arquivar". Não existe atalho, gesto ou botão direto na lista, nem para quem usa o sistema todos os dias.
        </p>
      </div>
    </WindowFrame>
  ),
  preenchimentoAutomatico: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={cx(s.field, s.ok)}>
          Nome: Maria Souza (preenchido automaticamente)
        </div>
        <div className={cx(s.field, s.ok)}>
          Endereço: salvo anteriormente
        </div>
      </div>
    </WindowFrame>
  ),
  telaLimpa: () => (
    <WindowFrame>
      <div className={s.body} style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.4rem', margin: '4px 0' }}>
          R$ 1.240,00
        </p>
        <span className={cx(s.button, s.blue)}>
          Transferir
        </span>
        <p className={s.smallText}>
          Apenas o saldo e a ação principal aparecem na tela.
        </p>
      </div>
    </WindowFrame>
  ),
  telaPoluida: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          🎯Promo! 🎁Cupom! ⭐Avalie! 📢Novidade! 🔔3 avisos! 🏆Conquista! — tudo piscando ao mesmo tempo, disputando espaço com o botão "Confirmar pedido".
        </p>
      </div>
    </WindowFrame>
  ),
  hierarquiaClara: () => (
    <WindowFrame>
      <div className={s.body}>
        <p style={{ fontSize: '1.1rem', fontWeight: '700', margin: '2px 0' }}>
          Confirmar pedido
        </p>
        <p className={s.smallText}>
          Total: R$ 89,90 · Entrega em 2 dias
        </p>
        <span className={cx(s.button, s.blue)}>
          Confirmar
        </span>
      </div>
    </WindowFrame>
  ),
  destaqueAcaoPrincipal: () => (
    <WindowFrame>
      <div className={s.body}>
        <span className={cx(s.button, s.blue)}>
          Finalizar compra
        </span>
        <span className={cx(s.button, s.ghost)}>
          Continuar comprando
        </span>
        <p className={s.smallText}>
          A ação principal se destaca em cor sólida; a secundária é discreta.
        </p>
      </div>
    </WindowFrame>
  ),
  erroClaro: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={cx(s.field, s.error)}>
          joana#email.com
        </div>
        <p className={s.smallText} style={{ color: 'var(--color-red-solid)' }}>
          E-mail inválido. Use o formato nome@dominio.com
        </p>
      </div>
    </WindowFrame>
  ),
  erroGenerico: () => (
    <WindowFrame>
      <div className={s.body} style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.4rem' }}>
          ⚠️
        </p>
        <p>
          <strong>
            Erro 500
          </strong>
        </p>
        <p className={s.smallText}>
          Nenhuma outra informação, nenhuma sugestão do que fazer.
        </p>
      </div>
    </WindowFrame>
  ),
  bordaVermelhaCampo: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          Nome ✓
        </div>
        <div className={cx(s.field, s.error)}>
          Telefone ✗ — campo em destaque vermelho, com ⚠️ ao lado
        </div>
      </div>
    </WindowFrame>
  ),
  sugestaoCorrecao: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          gogle.com
        </div>
        <p className={s.smallText}>
          Você quis dizer
          {' '}
          <strong>
            google.com
          </strong>
          ?
        </p>
      </div>
    </WindowFrame>
  ),
  centralAjudaBusca: () => (
    <WindowFrame>
      <div className={s.body}>
        <div className={s.field}>
          🔎 Buscar na Central de Ajuda…
        </div>
        <ul className={s.list}>
          <li>
            Como recuperar minha senha
          </li>
          <li>
            Como cancelar uma assinatura
          </li>
        </ul>
      </div>
    </WindowFrame>
  ),
  tooltipContextual: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Campo "Taxa CDI (%)" &nbsp; ⓘ
        </p>
        <div className={s.toast}>
          Percentual do CDI usado para calcular seu rendimento mensal.
        </div>
      </div>
    </WindowFrame>
  ),
  semDocumentacao: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          Sistema complexo de configuração de rede, sem manual, sem tooltips, sem FAQ, sem canal de suporte. O usuário só tem a tela e o campo em branco.
        </p>
      </div>
    </WindowFrame>
  ),
  faqCategorias: () => (
    <WindowFrame>
      <div className={s.body}>
        <p className={s.smallText}>
          <strong>
            Perguntas frequentes
          </strong>
        </p>
        <ul className={s.list}>
          <li>
            📦 Pedidos e entregas
          </li>
          <li>
            💳 Pagamentos
          </li>
          <li>
            🔐 Conta e segurança
          </li>
        </ul>
      </div>
    </WindowFrame>
  ),
} satisfies Record<string, () => ReactElement>

export type MockupName = keyof typeof mockups
