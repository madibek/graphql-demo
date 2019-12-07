import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => res.send('GraphQL is amanzing!'));

const root = { friend: () => {
        return {
            id: 2342342,
            firstName: 'Madibek',
            lastName: 'ayupov',
            gender: 'Male',
            language: 'Kazakh',
            email: 'malgara@me.com'
        }
    }};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/gql-demo'));
