import '@/styles/globals.css'
import Navbar from './components/shared/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <ToastContainer />
  </>

}
