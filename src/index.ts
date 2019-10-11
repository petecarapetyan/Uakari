import { GraphQLSchema } from 'graphql';
import { PluginFunction, Types } from '@graphql-codegen/plugin-helpers';

type ContentType = string | string[] | { [index: string]: string };

export const plugin: PluginFunction = async (schema: GraphQLSchema, documents: Types.DocumentFile[], config): Promise<Types.PluginOutput> => {
  return {
    content: 'ja'
  };
};
