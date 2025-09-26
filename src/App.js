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

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Http />
      </div>
    </QueryClientProvider>

  );
}

export default App;
