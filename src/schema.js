export default `

    type Car {
        _id: String!
        name: String
        color: String
        model: String
    }

    type Query {
        allCars: [Car!]!
    }

    type Mutation {
        createCar(name: String!, color: String, model: String!): Car!
    }


`

