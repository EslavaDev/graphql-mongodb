import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost/graphql-mongodb')
    .then(() => console.log('mongodb connected'))
    .catch(e => console.log(e))

//MongoDB Models
import Car from './models/Car';

//Schemas Graphql
import typeDefs from './schema';
import resolvers from './resolvers'


import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// settings
app.set('port', process.env.PORT || 3333)
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


//Routes Graphql
app.use('/graphql', express.json(), graphqlExpress({
    schema,
    context:{
        Car
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(app.get('port'),() => console.log('servidor on'))