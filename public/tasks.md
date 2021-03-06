# Weekly log 9 (20/06):
## Ana:
- Arranjados bugs nos gráficos, no calendário e nas cards
- Traduções da página das dashboards
- Adicionado o gráfico da contagem de pessoas
- Funcionalidade gráficos por id da estação
## André:
## Gil:
## João:
- Traduções adicionadas
- Funcionalidade de congelar o ecrã na timeline adicionada
- Correção de bugs nos markers do mapa ao dar zoom

# Weekly log 9 (13/06):
## Ana:
- Botão das unidades no gráfico funcional
- Melhorias no calendário e no gráfico
- Adicionada card com a contagem de carros
- Adicionado o gráfico da contagem de carros
- Adicionada a card de passagem do limite de velocidade 
- Medição da velocidade média dos carros aumentada para 10 minutos
## André:
## Gil:
- Adicionados triggers para notificações
- Garantida a atomicidade na inserção e update de emissores
- Garantidas as restrições de herança entre Smartphones e Websites
## João:
- Adicionado blur quando a tradução não está pronta
- Adicionado aviso quando não é possível estabelecer a ligação com o broker
# Weekly log 8 (6/06):
## Ana:
- Melhorias no método de obter a velocidade média dos carros
- Calendário adicionado às dashboards
- Loading adicionado aos gráficos
- Algumas traduções adicionadas à página de dashboards
- Legendas no eixo dos X dos gráficos
- Melhorias quando o intervalo de dias pedido é 1 ou mais que 5
## André:
## Gil:
- Traduzidos alguns Stored Procedures em mariaDB para MsSql
- Adicionada uma view para juntar as notificações
- Adiocionados o resto dos Stored Procedures que faltavam
## João:
- Adicionado suporte a VAMs e CAMs na timeline
- Adicionadas cookies para identificador do cliente web das mensagens DENM
- Adicionada a filtragem das mensagens recebidas pelo client para altitudes e longitudes inválidas
# Weekly log 7 (30/05):
## Ana:
- Melhorias na função para de adquirir as velocidades médias dos carros
- Primeira visualização de velocidades médias num gráfico
## André:
- Encoding XML adicionado à camada de traduçao
- Cors removido da API para permitir testes locais
- Refactor da API e Base de Dados para aumento de performance
- Criação de um novo endpoint da documentação
- Implementação de varios endpoints 
- Correção do it2s-itss-5g-rsu para evitar log de erros quando a estrada observada está vazia 
- Migraçãoa base de dados para utilizar Bigint 
## Gil:
- Corrigida a ordem dos atributos de algumas entidades (OBU, CPM e PerceivedObject)
- Alteração na db do emitter_id, latitude e longitude para serem BigInts
- Implementação de stored procedures para inserção, update e leitura
- Implementação de udf's utilizadas pelos stored procedures
## João:
- Desenvolvimento da interface de escolha do intervalo de tempo para a timeline
- Melhorias no player da timeline
- Melhoria no style da timeline
- Mudanças na receção de hearthbeats e cams (passam a usar um buffer e a atualizar a cada 100ms)
- Adicionadas traduções para a timeline
- Correção na limpeza do buffer das cams
# Weekly log 6 (23/05):
## Ana:
- Relatório M3
- Primeira tentativa para a função de adquirir as velocidades médias dos carros
## André:
- Correção de bugs na app: envio de vams, localizaçao das denms
- Apresentação M3
- Edição video para M3
## Gil:
- Tradução apresentação
- Adaptação de queries para o novo formato
## João:
- Relatório M3
- Ligação à api para receber eventos de estrada (cpms)
- Criação de um player para a timeline
# Weekly log 5 (16/05):
## Ana:
- Botão de tradução do site tornado responsivo
- Mudado o estilo do botão de tradução
## André:
- Refactor do codigo de backend
- Criaçao da base de dados em mariadb
- Melhorias e correção de bugs na camada de compatibilidade para mssql e mariadb
- Criação de um compilador para criação de um esqueleto da API a partir da documentação
- Adição de sanitização de input na camada de compatibilidade para mssql e mariadb
- Adição de certificados SSL para uso de HTTPS nas aplicações web
- Configuração da infraestrutura com uma reverse proxy
## Gil:
- Corrigidas as coordenadas de perceived objects no backend
- Adaptação das queries para data collection nas duas dbs
- Adicionadas as queries para CAMs e VAMs
- Adicionados mais videos à página de demos
- Corrigido bug em iphone na App
## João:
- Início do desenvolvimento da interface da timeline
- Cancelada a subscrição aos tópicos do broker a mudar para o modo timeline
- Corrigido bug no site, onClick na RSU
# Weekly log 4 (9/05):
## Ana:
- Criação de popups para as DENMs
## André:
- Bug corrigido na camada de tradução do broker
- Alteraçao na app para aceitar perceived objects em cm
- Documentação da API
- Implementação e deploy de um mock da API
- Mock broker para funcionar dentro da UA
- Criação de uma camada de compatibilidade com msSQL e mariadb
## Gil:
- Documentação e implementação da mock api
- Store de CPMs e DENMs na db implementado
## João:
- Suporte a VAMs adicionado
- Alteração na unidade de medida das CPMs m -> cm
- Tradução para português adicionada

# Weekly log 3 (2/05):
## Ana:
- Adição de uma tooltip no formulário da criação de DENMs
- Melhorias na interface de alertas das DENMs
- Investigação/Experiências com dashboards
## André:
- Criação do repositório de backend
- Teste de conceção do backend à base de dados
- Increased security on central broker (user and password)
- Minor bug fixes on RSU code (units changed from meters to cm)
- Minor bug fix on frontend (babel)
- Minor bug fix on translation layer (reconnect to uper broker when network fails, some exceptions handled)
## Gil:
- Adição de uma páagina de demos ao micro-site
- Teste de conceção com o broker no backend
- Mapeamento do DER num ER
- Criação da estrutura da base de dados
## João:
- Adição de um pinpoint na criação de DENMs
- Validação dos campos no formulário da criação de DENMs
- Adição de animação nas transições do mapa
- Conexão ao broker com credenciais (username password)

# Weekly log 2 (25/04):
## Ana:
- Receção de heartbeats
- Visualização dos alertas das DENMs adicionado à sidebar
- Adicionado o método para publicar DENMs
## André:
- Heartbeats adicionados à camada de tradução
- Análise de requisitos relativa à camada de persistência da aplicação
## Gil:
- Adição de um botão de BACK ao menu das sub_causes das DENMs
- Envio de DENMs 
## João:
- Conclusão da interface para criação de DENMs na sidebar
- Conclusão da interface de informação das RSUs na sidebar
- Adicionado ao mapa coordenadas on click

# Weekly log 1 (18/04):
## Ana:
- Conclusão da navbar do site
- Receção e visualização de DENMs no mapa adicionadas ao site
## André:
- Encaminhamento de mensagens da inqueue e inter_mecs adicionado à camada de tradução
- Melhorias na performance da app
- Criação de vídeos de demonstração para M2
- Envio de VAMs adicionado à app
- Heartbeats adicionados a RSUs
## Gil:
- Suporte para interface multilingue
- Envio de CPMs
- Display simples das CPMs com markers no mapa
## João:
- Criação da sidebar para visualização e criação de eventos ao site
- Início do desenvolvimento da visualização da informação das RSUs na sidebar
- Início do desenvolvimento da interface para criação de DENMs na sidebar
- Melhorias na performance do site

# Tasks:

* [x]  Discussão sobre arquitetura - Todos

### Site
- [x]  Criar projeto e incluir a visualização de mapas - Ana e João \[21/3 - 10/4\]
- [x]  Criação API para consulta de dados em tempo real - André \[7/4 - 11/4\]
  * [x]  Ligar com o backend para visualização em tempo real da posição de veículos - Ana e João \[15/4 - 24/4\]
    * [x]  CAM - Ana \[23/4 - 1/5\]
    * [x]  CPM - João \[23/4 - 1/5\]
    * [ ]  HD-Maps - João - Optional \[23/4 - 1/5\]
  * [x]  Ligar com o backend para visualização em tempo real dos alertas rodoviários - Ana e João \[1/5 - 6/5\]
    * [x]  DENM - Ana \[6/5 - 14/5\]
    * [x]  VAM - João \[6/5 - 14/5\]
    * [ ]  IVIM - João - Optional \[6/5 - 14/5\]
    * [ ]  HD-Maps - Ana - Optional \[6/5 - 14/5\]
- [x]  Criação API para publicação de dados em tempo real - André \[16/5 - 28/5\]
  * [x]  Integração com backend para dar ao gestor do centro de controlo de tráfego a possibilidade de enviar mensagens - Ana e João \[14/5 - 20/5\]
    * [x]  DENM - Ana \[19/5 - 28/5\]
    * [ ]  IVIM - João - Optional \[19/5 - 28/5\]
    * [ ]  HD-Maps - Ana - Optional \[19/5 - 28/5\]

* [x]  Criação base de dados de suporte à timeline - André \[10/5 - 17/5\]
  * [x]  Criação da api para visualização da timeline de eventos na estrada - Gil \[16/5 - 28/5\]
    * [x]  Consulta do estado da estrada numa timeline - Ana e João \[28/5 - 5/6\]
    * [x]  Dashboard com informações estatísticas sobre flow de tráfego - Ana e João \[5/6 - 21/6\]
      * [x]  Velocidade media por hora - Ana \[5/6 - 21/6\]
      * [ ]  Tipos de veículos - João - Optional \[5/6 - 21/6\]
      * [x]  Quantidade de veículos - Ana \[5/6 - 21/6\]
* [x]  Localização do site para inglês e português - João \[28/5 - 10/6\]

### App
* [x]  Criar projeto e incluir a visualização de mapas - André \[11/4 - 7/4\]
* [x]  Criar integração do broker local com broker central - André \[11/4 - 15/4\]
  * [x]  Ligar com o backend para visualização em tempo real da posição de veículos - Gil \[15/4 - 24/4\]
    * [x]  CAM - André \[23/4 - 1/5\]
    * [x]  CPM - Gil \[23/4 - 1/5\]
  * [x]  Ligar com o backend para visualização em tempo real dos alertas rodoviários - André Gil \[1/5 - 6/5\]
    * [x]  DENM - André \[6/5 - 14/5\]
    * [ ]  IVIM - Gil - Optional \[6/5 - 14/5\]
    * [ ]  HD-Maps - Gil - Optional \[6/5 - 14/5\]
* [x]  Integração com backend para dar aos users a possibilidade de enviar mensagens - André Gil \[14/5 - 20/5\]
  * [x]  DENM - André \[19/5 - 28/5\]
  * [x]  VAM - André - Optional \[19/5 - 28/5\]
  * [ ]  IVIM - Gil - Optional \[19/5 - 28/5\]
* [x]  Criação API para consulta de dados em tempo real - André \[28/5 - 10/6\]
* [x]  Criação API para publicação de dados em tempo real - André \[28/5 - 10/6\]
  * [x]  Modo de utilização para peões - Gil \[8/6 - 23/6\]
  * [x]  Modo de utilização para ciclistas - Gil \[8/6 - 21/6\]
* [x]  Localização da app para inglês e português - André Gil \[28/5 - 10/6\]
