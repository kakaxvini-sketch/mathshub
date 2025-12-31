
export interface Formula {
  id: string;
  title: string;
  expression: string;
  description: string;
  explanation: string;
  category: string;
}

export interface ClassData {
  grade: number;
  label: string;
  topics: {
    name: string;
    formulas: Formula[];
  }[];
}

export enum ViewState {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  CLASS_DETAIL = 'CLASS_DETAIL'
}
