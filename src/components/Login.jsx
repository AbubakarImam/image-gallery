import { useState } from 'react';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";


const Login = ({ setIsAuthenticated, setIsLoadingContent }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setIsLoadingContent(true);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in:", user);
            setIsAuthenticated(true);
            setIsLoadingContent(false);
        } catch (error) {
            alert("Error logging in");
            console.error("Error logging in:", error);
            setIsLoadingContent(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white shadow-lg rounded-lg p-8 space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

Login.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
    setIsLoadingContent: PropTypes.func.isRequired
};

export default Login;
