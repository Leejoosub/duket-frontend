export const isAgeBetween = (
  ageFilterMin: number,
  ageFilterMax: number,
  age: number
) => {
  return (
    (isNaN(ageFilterMin) && isNaN(ageFilterMax)) ||
    (isNaN(ageFilterMin) && age <= ageFilterMax) ||
    (ageFilterMin <= age && isNaN(ageFilterMax)) ||
    (ageFilterMin <= age && age <= ageFilterMax)
  );
};
