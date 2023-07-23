import { type SchemaTypeDefinition } from 'sanity'

import blog from './schemas/blog'
import block from './schemas/blockContent';
import content from './schemas/content';
import annonce from './schemas/annonce';
import valeurs from './schemas/valeurs';
import presrntation from './schemas/presrntation';
import courses_scolaire from './schemas/courses_scolaire';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,block,content,annonce,valeurs,presrntation,courses_scolaire],
}
