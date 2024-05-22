import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	PublicPage1,
	PublicPage2,
	PublicPage3,
	PrivatePage1,
	PrivatePage2,
	PrivatePage3,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='public1' element={<PublicPage1 />} />
					<Route path='public2' element={<PublicPage2 />} />
					<Route path='public3' element={<PublicPage3 />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='private1'
						element={
							<PrivateRoute>
								<PrivatePage1 />
							</PrivateRoute>
						}
					/>
					<Route
						path='private2'
						element={
							<PrivateRoute>
								<PrivatePage2 />
							</PrivateRoute>
						}
					/>
					<Route
						path='private3'
						element={
							<PrivateRoute>
								<PrivatePage3 />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};