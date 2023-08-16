const {graphql} = require("@octokit/graphql");


class graphqlApi {
    constructor(token) {
        this.token = token;
    }

    query(q) {
        return graphql(q, {...{headers: {authorization: `token ${this.token}`}}});
    }
}

module.exports = graphqlApi;