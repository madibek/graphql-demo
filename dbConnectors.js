import mongoose from 'mongoose';
import { Sequelize } from "sequelize";
import _ from 'lodash';
import casual from "casual";

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelise = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite'
});

const Aliens = sequelise.define('aliens', {
    firstName: { type: Sequelize.STRING},
    lastName: { type: Sequelize.STRING},
    planet: { type: Sequelize.STRING},
});

Aliens.sync({ force: true}).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual._first_name.toString(),
            lastName: casual._last_name.toString(),
            planet: casual.word
        });
    });
});

export { Friends, Aliens };