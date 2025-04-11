import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'pt-BR',
  messages: {
    'pt-BR': {
      table: {
        id: 'Id',
        type: 'Tipo de Postagem',
        date: 'Data',
        time: 'Hora',
        post: 'Postagem',
        actions: 'Ações',
        status: 'Status',
        scheduled: 'Agendado',
        canceled: 'Cancelado',
        posted: 'Postado',
        title: 'Agendamento',
      },
      post: {
        createPost: 'Criar Postagem',
        dragAndDrop: 'Arraste e solte o arquivo ou clique para selecionar',
        clickToUpload: 'Clique para upload',
        settingsUpload: 'Configurações de Upload',
        preview: 'Visualizar',
        applyFilter: 'Aplicar Filtro',
        schedule: 'Agendamento',
        commentary: 'Comentário',
        cancel: 'Cancelar',
        hour: 'Hora',
        date: 'Data',
      },
      menu: {
        post: 'Postagem',
        dashboard: 'Dashboard',
        user: 'Usuário',
        setting: 'Configuração',
      },
      createSchedule: 'Criar Agendamento',
      createUser: 'Criar Usuário',
    }
  }
})

export default i18n