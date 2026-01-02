
export interface Formula {
  id: string;
  title: string;
  expression: string;
  description: string;
  explanation: string;
  category: string;
  isAdvanced?: boolean;
}

export interface Topic {
  name: string;
  formulas: Formula[];
}

export interface ClassData {
  grade: number;
  label: string;
  topics: Topic[];
}

export interface AppSettings {
  darkMode: boolean;
  advancedMode: boolean;
}

export enum ViewState {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  CLASS_DETAIL = 'CLASS_DETAIL'
}
