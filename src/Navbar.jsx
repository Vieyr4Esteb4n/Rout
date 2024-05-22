import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<nav>
							<Link to='/dashboard'>Dashboard</Link>
							<Link to='/private1'>Private 1</Link>
							<Link to='/private2'>Private 2</Link>
							<Link to='/private3'>Private 3</Link>
						</nav>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/public1'>Public 1</Link>
						<Link to='/public2'>Public 2</Link>
						<Link to='/public3'>Public 3</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};