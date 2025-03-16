export interface BlogPost {
  slug: string;
  metadata?: {
    title?: string;
    date?: string;
    description?: string;
  };
}
