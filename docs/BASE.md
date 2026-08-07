# Sistema de geração automatica de frases
O sistema vai mostrar frases aleatorias na tela com base no clique do user em um botão. Poderá também baixar uma imagem com aquela frase.

# Requisitos Funcionais

- RF01: Deve gerar frases aleatórias ao clicar no botão.
- RF02: Deve permitir que o usuário faça login com e-mail/senha.
- RF03: Deve permitir que o usuário faça login com conta Google.
- RF04: Deve permitir o download da frase exibida em formato de imagem (PNG/JPEG).
- RF05: Deve permitir que usuários autenticados salvem/favoritem frases.
- RF06: Deve permitir filtrar frases por categorias (ex: Disciplina, Foco, Resiliência).

# Requisitos Não Funcionais
- RNF01 (Desempenho): A geração e exibição de uma nova frase deve responder em menos de 500ms.
- RNF02 (Usabilidade): A interface deve ser 100% responsiva, garantindo boa navegabilidade em dispositivos móveis e desktop.
- RNF03 (Desempenho/Arquitetura): A conversão da frase em imagem para download deve ser processada no lado do cliente (client-side) para reduzir a carga no servidor.
- RNF04 (Segurança): As senhas dos usuários devem ser criptografadas utilizando algoritmos seguros (ex: bcrypt) antes do armazenamento.
- RNF05 (Disponibilidade): O sistema deve ter disponibilidade mínima de 99% de tempo no ar.

# Entidades
1. User (Usuário)
Attributes: id, nome, email, senha_hash, provedor_auth (local/google), criado_em

2. Frase
Attributes: id, texto, categoria, autor, criado_em

3. Favorito (Relacionamento User-Frase)
Attributes: id, user_id, frase_id, salvo_em

# Regras de Negócio
- RN01: Usuários não autenticados (visitantes) podem gerar frases e baixar imagens, mas não têm acesso à funcionalidade de favoritar ou salvar histórico.
- RN02: O sistema não deve repetir a mesma frase consecutivamente na mesma sessão de uso.
- RN03: Toda imagem gerada para download deve incluir automaticamente a marca d'água ou logo do sistema no rodapé.
- RN04: O e-mail cadastrado deve ser único na base de dados; não é permitido criar mais de uma conta com o mesmo e-mail.