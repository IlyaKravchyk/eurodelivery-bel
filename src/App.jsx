import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { SinglePage } from './components/SinglePage/SinglePage';
import { WhyAreWe } from './components/WhyAreWe/WhyAreWe';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to="euro-delivery" />} />
				<Route path='euro-delivery' element={<Home />} />
				<Route path='euro-delivery/:category' element={<SinglePage />} />
				<Route path='/#scroll' element={<WhyAreWe />} />
			</Routes>
		</>
	);
}

