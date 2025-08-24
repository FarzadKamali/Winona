interface Page {
  title: string;
  body: string;
  dateModified: string;
  reviewer: {
    credentials: string;
    name: string;
  };
  seo?: {
    title?: string;
    description?: string;
  };
}