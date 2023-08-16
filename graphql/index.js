//const {graphql} = require("@octokit/graphql");
const { Octokit } = require("octokit");

class graphqlApi {
    constructor(token) {
        this.octokit = new Octokit({ auth: token });
    }

    query(q) {
        return  this.octokit.graphql(q, {...{headers: {authorization: `token ${this.token}`}}});
    }
}

module.exports = graphqlApi;