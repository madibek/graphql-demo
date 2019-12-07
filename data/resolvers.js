import crypto from 'crypto';
import mongoose from 'mongoose';
import { Friends } from "../dbConnectors";

const resolvers = {
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, FriendDataBase[id]);
        }
    },
    Mutation: {
        createFriend: (root, {input}) => {
            // const id = crypto.randomBytes(10).toString('hex');
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise(((resolve, reject) => {
                newFriend.save(err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(newFriend);
                    }
                })
            }))
        }
    }
};

export default resolvers;