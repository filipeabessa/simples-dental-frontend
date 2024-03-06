type Album = {
  userId: number;
  id: number;
  title: string;
  url?: string;
  thumbnailUrl?: string;
};

type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type { Album, Photo };
