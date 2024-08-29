import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Simulação de chamadas de API
const mockApi = {
  post: async (url, data) => {
    if (url === "/auth/login") {
      return {
        data: {
          token: "fake-jwt-token",
          user: { id: 1, name: "John Doe", email: "john@example.com" }
        }
      };
    }
    if (url === "/auth/refresh_token") {
      return {
        data: {
          token: "new-fake-jwt-token",
          user: { id: 1, name: "John Doe", email: "john@example.com" }
        }
      };
    }
    return { data: {} };
  },
  delete: async (url) => {
    if (url === "/auth/logout") {
      return { data: {} };
    }
  }
};

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      if (token) {
        try {
          const { data } = await mockApi.post("/auth/refresh_token");
          localStorage.setItem("token", data.token); // Armazene como string simples
          setIsAuth(true);
          setUser(data.user);
        } catch (err) {
          toast.error("Failed to refresh token");
        }
      }
      setLoading(false);
    })();
  }, []);

  const handleLogin = async (userData) => {
    setLoading(true);
    try {
      const { data } = await mockApi.post("/auth/login", userData);
      localStorage.setItem("token", data.token); // Armazene como string simples
      setUser(data.user);
      setIsAuth(true);
      toast.success("Login successful");
      console.log(data.token)
      navigate("/"); 
    } catch (err) {
      toast.error("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await mockApi.delete("/auth/logout");
      setIsAuth(false);
      setUser({});
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to logout");
    } finally {
      setLoading(false);
    }
  };

  return { isAuth, user, loading, handleLogin, handleLogout };
};

export default useAuth;
