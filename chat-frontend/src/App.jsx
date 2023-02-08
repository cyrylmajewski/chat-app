import { AuthPage, ChatPage } from '@/pages';
import { Root } from '@/components';
import './App.scss'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
 } from 'react-router-dom';
 
function App() {

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
