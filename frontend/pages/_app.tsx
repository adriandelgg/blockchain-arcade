import type { AppProps } from 'next/app';
import '@styles/globals.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import Web3Provider from 'context/Web3Context';
import Layout from 'context/Layout';
import { store } from '@redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Web3Provider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Web3Provider>
		</Provider>
	);
}

export default MyApp;
