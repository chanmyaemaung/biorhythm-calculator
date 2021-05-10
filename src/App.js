import { useState } from 'react';
import { useLocalStorage } from './hooks';
import {
	IonApp,
	IonContent,
	IonDatetime,
	IonHeader,
	IonItem,
	IonLabel,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import BiorhythmCard from './components/BiorhythmCard';

export default function App() {
	const [birthDate, setBirthDate] = useLocalStorage('birthDte', '');
	const [targetDate, setTargetDate] = useState(new Date().toISOString());

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Biorhythms</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				{birthDate && (
					<BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
				)}
				<IonItem>
					<IonLabel position='fixed'>Date of Birth:</IonLabel>
					<IonDatetime
						value={birthDate}
						displayFormat='DD MMM, YYYY'
						onIonChange={(e) => setBirthDate(e.detail.value)}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position='fixed'>Target Date: </IonLabel>
					<IonDatetime
						value={targetDate}
						displayFormat='DD MMM, YYYY'
						onIonChange={(e) => setTargetDate(e.detail.value)}
					/>
				</IonItem>
				<small
					style={{ textAlign: 'center', display: 'block', margin: '10px' }}
				>
					Developed by PJK-DEV. {new Date().getFullYear()}
				</small>
			</IonContent>
		</IonApp>
	);
}
