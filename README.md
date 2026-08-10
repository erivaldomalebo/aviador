# Aviador - Gerador de Frases Automático

Sistema web para exibição aleatória de frases inspiradoras com geração dinâmica de imagens Open Graph (`next/og`) para download e autenticação integrada via Supabase.

---

## Fases do Projeto

- [x] **Fase 1:** Gerador de frases aleatórias
- [x] **Fase 2:** Download da frase em imagem Open Graph (`next/og`)
- [ ] **Fase 3:** Autenticação e sincronização com Supabase

---

## Requisitos Funcionais (RF)

* **RF01:** Deve gerar frases aleatórias ao clicar no botão.
* **RF02:** Deve permitir login com e-mail e senha.
* **RF03:** Deve permitir login via conta Google.
* **RF04:** Deve permitir o download da frase exibida em formato de imagem (PNG/JPEG).
* **RF05:** Deve permitir que usuários autenticados salvem e meçam histórico de frases favoritas.
* **RF06:** Deve permitir filtrar frases por categoria (ex: *Disciplina*, *Foco*, *Resiliência*).

---

## Regras de Negócio (RN)

* **RN01:** Usuários não autenticados podem gerar frases e baixar imagens, mas não podem favoritar nem salvar histórico.
* **RN02:** O sistema não deve repetir a mesma frase consecutivamente na mesma sessão.
* **RN03:** Toda imagem gerada para download deve conter automaticamente a marca d'água/logo do sistema no rodapé.
* **RN04:** O e-mail cadastrado deve ser único na base de dados.

---

## Entidades do Banco de Dados

### 1. `users`
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `uuid` | Identificador único |
| `nome` | `text` | Nome do usuário |
| `email` | `text` | E-mail único |
| `senha_hash` | `text` | Hash criptografado da senha |
| `provedor_auth` | `varchar` | Provedor de autenticação (`local` / `google`) |
| `criado_em` | `timestamp` | Data de criação da conta |

### 2. `frases`
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `bigint` | Identificador único |
| `texto` | `text` | Conteúdo da frase |
| `categoria` | `text` | Categoria associada |
| `autor` | `text` | Autor da frase |
| `criado_em` | `timestamp` | Data de cadastro |

### 3. `favoritos`
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `uuid` | Identificador do favorito |
| `user_id` | `uuid` | Chave estrangeira para `users.id` |
| `frase_id` | `bigint` | Chave estrangeira para `frases.id` |
| `salvo_em` | `timestamp` | Data do salvamento |

---

## Requisitos Não Funcionais (RNF)

* **RNF01 (Desempenho):** Resposta de geração e exibição de frase em menos de 500ms.
* **RNF02 (Usabilidade):** Interface 100% responsiva (Mobile-First).
* **RNF03 (Arquitetura):** O processamento da imagem para download é otimizado na borda (Edge / `next/og`) reduzindo sobrecarga no servidor principal.
* **RNF04 (Segurança):** Senhas salvas com hash seguro via Supabase Auth (bcrypt).
* **RNF05 (Disponibilidade):** Mínimo de 99% de disponibilidade global.

---

## Tech Stack

* **Framework:** [Next.js (App Router)](https://nextjs.org/)
* **Geração de Imagens:** `next/og` (Satori + Resvg)
* **Estilização:** Tailwind CSS & Shadcn UI
* **Backend & Auth:** [Supabase](https://supabase.com/)

## Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/erivaldomalebo">
        <img src="https://github.com/erivaldomalebo.png" width="100px;" alt="Foto do Erivaldo no GitHub"/><br>
        <sub>
          <b>Erivaldo Caginga</b>
        </sub>
      </a>
    </td>
  </tr>
</table>