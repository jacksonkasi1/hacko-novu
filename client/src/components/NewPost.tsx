import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { addNewPost, formatDate } from "@utils";

const hankoApi: string = "<YOUR_HANKO_API_KEY>";

const NewPost: React.FC = () => {
	const navigate = useNavigate();
	const hanko = useMemo(() => new Hanko(hankoApi), []);
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		if (!localStorage.getItem("loggedIn")) {
			return navigate("/");
		}
	}, [navigate]);

	const logout = (): void => {
		hanko.user.logout().catch((error: Error) => {
			console.error(error);
		});
	};

	const redirectAfterLogout = useCallback((): void => {
		navigate("/login");
	}, [navigate]);

	useEffect(() => {
		hanko.onUserLoggedOut(() => {
			redirectAfterLogout();
			localStorage.removeItem("loggedIn");
		});
	}, [hanko, redirectAfterLogout]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		addNewPost(
			localStorage.getItem("u_id"),
			title,
			content,
			formatDate(),
			navigate
		);
		setContent("");
		setTitle("");
	};

	return (
		<div>
			<nav className='navbar'>
				<Link to='/' className='logo'>
					<h2>MyBlog</h2>
				</Link>

				<div>
					<button className='newPostBtn logOut' onClick={logout}>
						Log out
					</button>
				</div>
			</nav>
			<main className='main'>
				<h2 className='heading'>Create new post</h2>
				<form className='newPost_form' onSubmit={handleSubmit}>
					<label htmlFor='title' className='label'>
						Title
					</label>
					<input
						type='text'
						className='newPost_title'
						id='title'
						name='title'
						value={title}
						required
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label htmlFor='content' className='label'>
						Content
					</label>
					<textarea
						rows={10}
						className='newPost_content'
						value={content}
						required
						onChange={(e) => setContent(e.target.value)}
					/>
					<button className='newPostBtn submitBtn' type='submit'>
						Create Post
					</button>
				</form>
			</main>
		</div>
	);
};

export default NewPost;