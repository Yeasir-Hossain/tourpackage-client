import Navbar from '@/src/components/shared/Navbar';
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover min-h-screen">
    <Navbar></Navbar>
    <Component {...pageProps} />
    <ToastContainer />
  </div>

}
