import { buildSchema } from "type-graphql";
import { join } from "path";

export const getSchema = () => {
  return buildSchema({
    resolvers: [join(__dirname, "../modules/**/*.resolver.*")],
    emitSchemaFile: join(__dirname, "../../schema.gql"),
  });
};