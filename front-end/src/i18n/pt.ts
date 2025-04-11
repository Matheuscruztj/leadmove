import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'pt-BR',
  messages: {
    'pt-BR': {
      post: 'Post',
      dashboard: 'Dashboard',
      user: 'Usuário',
      setting: 'Configuração',
      createPost: 'Criar Post',
      createSchedule: 'Criar Agendamento',
      createUser: 'Criar Usuário',
      DragAndDrop: 'Arraste e solte o arquivo ou clique para selecionar',
      ClickToUpload: 'Clique para upload',
      ApplyFilter: 'Aplicar Filtro',
      Schedule: 'Agendamento',
      Commentary: 'Comentário',
      Cancel: 'Cancelar',
      Preview: 'Visualizar',
      SettingsUpload: 'Configurações de Upload',
      TipoPost: 'Tipo de Postagem',
      Date: 'Data',
      Post: 'Post',
      Actions: 'Ações',
    }
  }
})

export default i18n