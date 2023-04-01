'use client'

import Image from "next/image"
import { signOut } from 'next-auth/react'
import { CSSProperties } from 'react';
import Link from "next/link";


const buttonStyles: CSSProperties = {
  backgroundColor: 'red',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '20px 0',
  cursor: 'pointer',
  borderRadius: '5px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const containerStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100px',
    paddingRight: '20px',
};
  

export default function Logged() {
  return (
    <div style={containerStyles}>
      <button style={buttonStyles} onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  )
}
