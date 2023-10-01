import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "./components/Layouts/HomeLayout";
import LoginLayout from "./components/Layouts/LoginLayout";
import AuthOverseer from "./components/Shared/Utils/AuthOverseer";

function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthOverseer>
          <HomeLayout></HomeLayout>
        </AuthOverseer>
      ),
    },
    {
      path: "/login",
      element: <LoginLayout></LoginLayout>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
