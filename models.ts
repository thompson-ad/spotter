export enum WeightUnit {
  KG = "kg",
  LB = "lb",
}

export interface Movement {
  name: string;
}

export interface Progression {
  date: string;
  weight: number;
  weightUnit: WeightUnit;
  reps: number;
  sets: number;
}
