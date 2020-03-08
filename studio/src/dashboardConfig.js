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
                  buildHookId: '5e6466f046c324f033f057bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mf1dwk7t',
                  apiId: '7d7f9ce3-98bf-4010-be44-657777cfcfb1'
                },
                {
                  buildHookId: '5e6466f0e695dae41aa8abe9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wgh1f84e',
                  apiId: 'bb83e735-6218-4c5f-adaf-cca693a13f0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prmlxmind/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wgh1f84e.netlify.com', category: 'apps' }
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
