export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f79c88a83304e8200f89a38',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ihjcnhsk',
                  apiId: 'b0147b7d-9f18-4c0a-8ca1-7f4a2e8aaf38'
                },
                {
                  buildHookId: '5f79c88ad04d18545a950f91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5vyw6bqe',
                  apiId: '9fa31ed6-8f10-471e-942d-faa58178a496'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saurabh9495/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5vyw6bqe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
