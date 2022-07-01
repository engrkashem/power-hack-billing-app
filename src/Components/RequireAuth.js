import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isUser = sessionStorage.getItem('isUser');
    // console.log(user)
    const location = useLocation();

    useEffect(() => {
        if (isUser) {
            setIsLoading(false);
        }
    }, [isUser])

    if (isLoading) {
        return <button className="btn btn-square loading"></button>
    }

    if (!isUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;