import { getAuth, getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { Button } from '@mui/joy';
import { db } from './firebase';

export default function Login() {
	async function onLogin() {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		// This will trigger a full page redirect away from your app
		await signInWithRedirect(auth, provider);
		// After returning from the redirect when your app initializes you can obtain the result
		await getRedirectResult(auth);
		// const result = await getRedirectResult(auth);
		// if (result) {
		// 	// This is the signed-in user
		// 	const user = result.user;
		// 	// This gives you a Google Access Token.
		// 	const credential = GoogleAuthProvider.credentialFromResult(result)!;
		// 	const token = credential.accessToken;
		// 	// console.log(provider, auth, result, credential, token);
		// }
	}
	if ('' !== db.UserId) {
		return <></>
	}
	else {
		return (
			<Button onClick={onLogin}>Login</Button>
		);
	}
}