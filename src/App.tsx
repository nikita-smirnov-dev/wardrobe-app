import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/AppRoutes/AppRoutes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
