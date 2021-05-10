import dayjs from 'dayjs';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	ReferenceLine,
	CartesianGrid,
} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';
import './BiorhythmChart.css';

function formatDate(isoString) {
	return dayjs(isoString).format('DD MMM');
}

// Mock data
/* const data = [
	{ date: '1997-04-21', physical: 0.99, emotional: 0.5, intellectual: -0.25 },
	{ date: '1997-04-21', physical: 0.35, emotional: -0.35, intellectual: -0.42 },
	{ date: '1997-04-21', physical: 0.65, emotional: 0.98, intellectual: 0.25 },
];
 */

export default function BiorhythmChart({ birthDate, targetDate }) {
	const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
	const data = calculateBiorhythmSeries(
		birthDate,
		startDate,
		31
	).map((item) => ({ ...item, date: formatDate(item.date) }));

	return (
		<ResponsiveContainer className='biorhythm-chart' width='100%' height={200}>
			<LineChart data={data}>
				<XAxis
					dataKey='date'
					ticks={[data[3].date, data[15].date, data[27].date]}
				/>
				<CartesianGrid vertical={false} strokeDasharray='3 3' />
				<ReferenceLine x={data[15].date} />
				<Line
					type='natural'
					dot={false}
					dataKey='physical'
					className='physical'
				/>
				<Line
					type='natural'
					dot={false}
					dataKey='emotional'
					className='emotional'
				/>
				<Line
					type='natural'
					dot={false}
					dataKey='intellectual'
					className='intellectual'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
