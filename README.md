# Lista-de-Tarefas-Node.JS-MongoDB
Criar lista de tarefas usando Node.JS e armazena no MongoDB

Funcionalidades Básicas:

    Conexão com o MongoDB:
        O aplicativo utiliza o banco de dados MongoDB para armazenar as tarefas.
        A conexão com o MongoDB é estabelecida usando o pacote mongoose.

    Modelo de Tarefa:
        Define um modelo simples de tarefa com dois campos: description (descrição da tarefa) e completed (indicador se a tarefa foi concluída).

Endpoints da API:

    GET /tasks:
        Retorna todas as tarefas armazenadas no banco de dados.
        As tarefas são recuperadas do MongoDB usando o modelo Task.

    POST /tasks:
        Permite adicionar uma nova tarefa.
        A descrição e o status de conclusão da tarefa são fornecidos no corpo da solicitação.
        Uma nova instância do modelo Task é criada e salva no MongoDB.

Configuração Adicional:

    Middleware body-parser:
        Utilizado para analisar o corpo das solicitações HTTP, permitindo o acesso aos dados enviados no corpo da solicitação, como no caso do endpoint POST /tasks.

Como Usar:

    Instalação de Dependências:
        Execute npm install para instalar as dependências listadas no arquivo package.json.

    Configuração do MongoDB:
        Certifique-se de ter um servidor MongoDB em execução localmente na porta padrão (27017). Você pode ajustar a URL de conexão no código se necessário.

    Execução do Aplicativo:
        Execute node app.js para iniciar o servidor.

    Acesso à API:
        Use um cliente HTTP (por exemplo, Postman) ou faça solicitações HTTP via código para interagir com a API nos endpoints GET /tasks e POST /tasks.

Estrutura do Projeto:

    Lista_de_tarefas.js:
        Arquivo principal do aplicativo que configura o servidor Express, define as rotas e estabelece a conexão com o MongoDB.

Considerações Finais:

Este é um aplicativo bastante simples e serve como ponto de partida. Dependendo dos requisitos, você pode adicionar autenticação, validações, atualizações e exclusões de tarefas, entre outras funcionalidades. 
