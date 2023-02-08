import { AuthPage, ChatPage } from '@/pages';
import { Root } from '@/components';
import './App.scss'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
 } from 'react-router-dom';
import useWebSocket from 'react-use-websocket';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_SERVER_URL}/get-rooms`).then(res => console.log(res.data));
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<AuthPage />} />
        <Route path='chat' element={<ChatPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
