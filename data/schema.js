import { makeExecutableSchema} from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
    type Query {
        getFriend(id: ID!): Friend
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
    
    type Aliens {
        firstName: String
        lastName: String
        planet: String
    }
    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
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
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
export { schema };