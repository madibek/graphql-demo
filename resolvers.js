import crypto from 'crypto';

class Friend {
    constructor(id, { firstName, lastName, gender, age, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
    }
}

const FriendDataBase = {};
const resolvers = {
    getFriend: ({id}) => {
        return new Friend(id, FriendDataBase[id]);
    },
    createFriend: ({input}) => {
        const id = crypto.randomBytes(10).toString('hex');
        FriendDataBase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;
