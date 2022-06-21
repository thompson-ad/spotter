export enum WeightUnit {
  KG = "kg",
  LB = "lb",
}

export interface Movement {
  movementName: string;
}

export interface Progression {
  date: string;
  weight: number;
  weightUnit: WeightUnit;
  reps: number;
  sets: number;
}

export interface MovementHistory extends Movement {
  progressions: Progression[];
}
