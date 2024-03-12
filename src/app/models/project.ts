export interface Project {
  id: string;
  name: string;
  imgPath: string;
  snapshotImgPaths: string[];
  shortDescription: string;
  longDescription: string;
  category_ids: number[];
  tag_ids: number[];
  highlights: string[];
}
