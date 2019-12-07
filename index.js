import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import crypto from 'crypto';

const app = express();

app.get('/', (req, res) => res.send('GraphQL is amanzing!'));

class Friend {
    constructor(id, { firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const FriendDataBase = {};
const root = {
    friend: () => {
        return {
            id: 2342342,
            firstName: 'Madibek',
            lastName: 'ayupov',
            gender: 'Male',
            language: 'Kazakh',
            email: 'malgara@me.com'
        }
    },
    createFriend: ({input}) => {
        const id = crypto.randomBytes(10).toString('hex');
        FriendDataBase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/gql-demo'));
