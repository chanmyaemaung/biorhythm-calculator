import { calculateBiorhythms } from './calculations';

it('calculates the physical biorhythm', () => {
	const { physical } = calculateBiorhythms('1997-04-21', '2021-05-10');
	expect(physical).toBeCloseTo(0.5196);
});
it('calculates the emotional biorhythm', () => {
	const { emotional } = calculateBiorhythms('1997-04-21', '2021-05-10');
	expect(emotional).toBeCloseTo(-0.9010);
});
it('calculates the intellectual biorhythm', () => {
	const { intellectual } = calculateBiorhythms('1997-04-21', '2021-05-10');
	expect(intellectual).toBeCloseTo(0.8146);
});
