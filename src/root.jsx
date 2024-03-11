import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/providers/AuthProvider";

export default function Root() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
