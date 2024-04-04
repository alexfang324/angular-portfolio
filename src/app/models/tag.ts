import { Category } from './category';

export interface Tag {
  id: number;
  name: string;
  slug: string;
  category_id: number;
  category?: Category;
}
