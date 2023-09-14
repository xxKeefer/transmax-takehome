export type RampData = {
  id: `ramp-${number}`;
  algorithm: (typeof algorithmLabels)[number];
};

const algorithmLabels = [
  'Algorithm 1',
  'Algorithm 2',
  'Algorithm 3',
  'Algorithm 4',
  'Algorithm 5',
] as const;
/**
 * A mock api to get ramp information
 *
 * This returns a list of ramps and their current
 * running algorithm, for use in the ramp chart
 */
function getRampAlgorithms(onUpdate: (ramps: RampData[]) => void) {
  const count = 50;
  setInterval(() => {
    const ramps: RampData[] = [];
    for (let i = 0; i < count; i++) {
      ramps.push({
        id: `ramp-${i}`,
        algorithm: algorithmLabels[Math.floor(Math.random() * 5)],
      });
    }
    onUpdate(ramps);
  }, 500);
}
export default getRampAlgorithms;
/*
Example:
import getRampAlgorithms from "./api";
 getRampAlgorithms((ramps) => {
 console.log(ramps);
});
*/
