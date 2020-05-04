export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb078c6cfa814ef725fd3b3',
                  title: 'Sanity Studio',
                  name: 'sanity-poc-studio-kbybfjy5',
                  apiId: '86336d50-0ebe-4215-8567-ef2adf2002b9'
                },
                {
                  buildHookId: '5eb078c50b55867d079a91ad',
                  title: 'Blog Website',
                  name: 'sanity-poc-web',
                  apiId: '69413a7c-256e-4034-b142-03636ce2d0cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isaac-martin/sanity-poc',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-poc-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
