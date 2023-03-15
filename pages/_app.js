import '@/styles/globals.css'
import Navbar from './components/shared/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover min-h-screen">
    <Navbar></Navbar>
    <Component {...pageProps} />
    <ToastContainer />
  </div>

}
