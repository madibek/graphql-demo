import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from "./resolvers";
const app = express();

app.get('/', (req, res) => res.send('GraphQL is amanzing!'));

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/gql-demo'));
