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
    }
    
    type Email {
        email: String
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
    }
`);

export default schema;