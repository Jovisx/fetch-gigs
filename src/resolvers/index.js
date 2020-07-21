import { GraphQLDateTime } from "graphql-iso-date";

import jobResolvers from "./job";

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, jobResolvers];
