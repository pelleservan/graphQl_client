const { request, gql } = require('graphql-request')

const query = `
    {
        getTeams {
            id
            name
            country
            city
        }
    }
`

request('http://localhost:8080/graphql', query)
    .then(
        (data) => {
            data.getTeams.forEach(element => {
                console.log(`Found Post #${element.id} with name ${element.name}`);
            });
        }
    )