function getProjectInfoByNameWithUser(projectName, user){
    const q = `
    {
      user(login: "${user}") {
        ${ProjectByName(projectName)}
      }
    }`
    return q
}

function getProjectInfoByNameWithOrg(projectName, orgName){
  const q = `
  {
    organization(login: "${orgName}") {
      ${ProjectByName(projectName)}
    }
  }`
  return q
}

function ProjectByName (projectName){
  return `
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
    }`
}

module.exports = {
  getProjectInfoByNameWithUser,
  getProjectInfoByNameWithOrg,

}