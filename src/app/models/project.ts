import { Category } from './category';
import { Tag } from './tag';
import { Theme } from './theme';
export interface Project {
  id: string;
  name: string;
  mainImgPath: string;
  sliderImgPath: string;
  snapshotImgPaths: string[];
  shortDescription: string;
  longDescription: string;
  theme_ids: number[];
  themes?: Theme[];
  tag_ids: number[];
  tags?: Tag[];
  highlights: string[];
}
