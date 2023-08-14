function getProjectInfoByNameWithUser(projectName, user){
    const q = `
    {
      projectsV2(first:1 query:"${projectName}") {
        edges {
          node {
            id
            title
            field(name:"Status"){
              __typename
               ... on ProjectV2SingleSelectField{
                 id
                options{
                  id
                  name
                }
              }
            }
          }
        }
      }
    }`
}

module.exports = {
    getProjectInfoByNameWithUser
}