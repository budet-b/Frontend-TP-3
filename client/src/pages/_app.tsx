import NavBar from '@/components/NavBar';

import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
      <Component {...pageProps} />
    </div>
  );
}
