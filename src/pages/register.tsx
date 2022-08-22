import React from "react";
import { Register as RegisterComponent } from '../components/Register'
import Head from "next/head";



export default function Register() {
    return (
        <>
        <RegisterComponent/>
        <Head>
        <title>Inscrever-se - Spotify</title>
        </Head>
        </>
    );
}