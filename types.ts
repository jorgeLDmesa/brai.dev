export type PostStatus = "draft" | "published";
export type PostType = "novedad" | "guia";

export interface Post {
  id: string;
  type: PostType;
  status: PostStatus;
  title: string;
  slug: string;
  excerpt: string | null;
  content_md: string;
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  canonical_url: string | null;
  noindex: boolean;
  published_at: string | null; // ISO
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: Post;
        Insert: Omit<Post, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Post, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      post_status: PostStatus;
      post_type: PostType;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}