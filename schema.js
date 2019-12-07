import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Query {
        getFriend(id: ID): Friend
    }
    
    enum Gender {
        MALE,
        FEMALE
    }
    
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }
    
    type Email {
        email: String
    }
    
    type Contact {
        firstName: String
        lastName: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
    }
    
    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }
    
    input ContactInput {
        firstName: String
        lastName: String
    }
`);

export default schema;