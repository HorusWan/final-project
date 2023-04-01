'use client'

import { signIn } from 'next-auth/react'
import { CSSProperties } from 'react';

const buttonStyles: CSSProperties = {
  backgroundColor: 'green',
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
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100px',
    paddingRight: '20px',
  };

export default function Login() {
  return (
    <div style={containerStyles}>
      <button style={buttonStyles} onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}