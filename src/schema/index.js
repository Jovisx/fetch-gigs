import { gql } from 'apollo-server-express'

import jobSchema from './job'

const linkSchema = gql`
  scalar Date

	type Query {
    _: Boolean
	}

	type Mutation {
    _: Boolean
	}
`
export default [linkSchema, jobSchema]
