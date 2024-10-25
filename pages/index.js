import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Redux Toolkit Counter</h1>
    <h2>{count}</h2>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>
  );
}
