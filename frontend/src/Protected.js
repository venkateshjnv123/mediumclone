import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
const Protected = ({children }) => {
    const isLoggedIn = useSelector((state) => state.loggedin.value);
    console.log(isLoggedIn);
  if (!localStorage.getItem('jwtToken')) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};
export default Protected;