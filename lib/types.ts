// lib/types.ts


export interface Service {
  id: number;
  title: string;
  desc: string;
}
export interface Portfolio {
  title: string;
  date: string;
  img: any; // Can be refined if you use TypeScript image modules
  category: string;
}

export interface SearchData {
  title: string;
  url: string;
}
