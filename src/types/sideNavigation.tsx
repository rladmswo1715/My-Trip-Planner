type TUrlPath =
  | 'my-planners'
  | 'dibs-planners'
  | 'storage'
  | 'my-comments'
  | 'inquiry';

type TListItem = {
  title: string;
  urlPath: TUrlPath;
  order: number;
};

export type TNAV_OPTIONS = {
  category: string;
  listItems: TListItem[];
};
