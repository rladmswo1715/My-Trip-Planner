type TUrlPath = 'my-planners' | 'dibs-planners' | 'my-comments' | 'inquiry';

type TListItem = {
  title: string;
  urlPath: TUrlPath;
};

export type TNAV_OPTIONS = {
  category: string;
  listItems: TListItem[];
};
