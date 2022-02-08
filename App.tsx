import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
