module.exports = {
    docsDir: 'docs',
    navbar: false,
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
          sidebar: [{
                title: 'Классическое фэнтези',
                children: [
                    '/classic-fantasy/',
                    '/classic-fantasy/player-characters',
                    '/classic-fantasy/character-classes',
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            }
        ]
    },
    markdown: {
      anchor: { level: [1,2,3]
    }
  }
}
