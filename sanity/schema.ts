import { type SchemaTypeDefinition } from 'sanity'

import blog from './schemas/blog'
import block from './schemas/blockContent';
import content from './schemas/content';
import annonce from './schemas/annonce';
import valeurs from './schemas/valeurs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,block,content,annonce,valeurs],
}
