type MuscleGroup = 'ARMS' | 'SHOULDERS' | 'CHEST' | 'BACK' | 'CORE' | 'THIGHS' | 'CALVES';

type ExerciseCategory = 'DUMBBELL' | 'BARBELL' | 'CABLE' | 'MACHINE';

export type Exercise = {
  id: string;
  name: string;
  category: ExerciseCategory;
  mainMuscleGroup: MuscleGroup;
  subMuscleGroups: MuscleGroup[];
  instructions: string[];
};
