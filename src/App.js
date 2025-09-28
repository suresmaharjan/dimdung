import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';
// import TestContextProvider from './context/Testcontext';
// export const TestContext = createContext();
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Http } from "./component/Htttp";
import Demo from './component/Demo';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Demo />
      </div>
    </QueryClientProvider>

  );
}

export default App;
