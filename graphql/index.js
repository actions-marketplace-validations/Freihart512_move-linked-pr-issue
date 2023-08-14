const {graphql} = require("@octokit/graphql");


class graphqlApi {
    constructor(token) {
        this.token = token;
    }

    query(q) {
        return graphql(q, {...{headers: {authorization: `bearer ${this.token}`}}});
    }
}

module.exports = graphqlApi;