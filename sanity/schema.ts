import { type SchemaTypeDefinition } from 'sanity'

import blog from './schemas/blog'
import block from './schemas/blockContent';
import content from './schemas/content';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,block,content],
}
