import React, { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi: string = import.meta.env.VITE_HANKO_API_URL;

const Login: React.FC = () => {
	const navigate = useNavigate();
	const hanko = useMemo(() => new Hanko(hankoApi), []);
	
	const generateUserID = (): string => Math.random().toString(36).substring(2, 10);

	const redirectAfterLogin = useCallback(() => {
		localStorage.setItem("loggedIn", "true");
		if (!localStorage.getItem("u_id")) {
			localStorage.setItem("u_id", generateUserID());
		}
		navigate("/");

	}, [navigate]);

	useEffect(
		() =>
			hanko.onAuthFlowCompleted(() => {
				redirectAfterLogin();		
			}),
		[hanko, redirectAfterLogin]
	);

	useEffect(() => {
		register(hankoApi)
			.catch((error: Error) => {
				console.log({error});
			});
	}, []);

	return (
		<div className='login_container'>
			<hanko-auth />
		</div>
	);
};

export default Login;