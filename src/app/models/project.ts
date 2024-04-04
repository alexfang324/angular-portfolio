import { Category } from './category';
import { Tag } from './tag';
export interface Project {
  id: string;
  name: string;
  mainImgPath: string;
  sliderImgPath: string;
  snapshotImgPaths: string[];
  shortDescription: string;
  longDescription: string;
  category_ids: number[];
  categories?: Category[];
  tag_ids: number[];
  tags?: Tag[];
  highlights: string[];
}
