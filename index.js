const core = require('@actions/core');
const github = require('@actions/github');

const wait = require('./wait');
const graphqlApi = require('./graphql');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const projectName = core.getInput('projectName');
    const targetCol = '' // core.getInput('targetCol');
    const userName = '' // core.getInput('targetCol');
    const githubToken = core.getInput('github_token');

    const graphqlInstance = new graphqlApi(githubToken);

    core.info(`getting project info ...`);
    const project = await graphqlInstance.query(getProjectInfoByNameWithUser(projectName))

    core.info(`Project ${JSON.stringify(project)} ...`);

    core.debug(JSON.stringify(project));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
