import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const AuthContext = createContext();
export const useGlobalContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
        router.replace("/(tabs)/home");
      }
    };
    loadToken();

  }, []);

    // const loadToken = async () => {
    //   const storedToken = await AsyncStorage.getItem("authToken");
    //   if (storedToken) {
    //     setToken(storedToken);
    //     router.replace("/(tabs)/home");
    //   }
    // };

  const saveToken = async (newToken) => {
    setToken(newToken);
    await AsyncStorage.setItem("authToken", newToken);
    router.replace("/(tabs)/home");
  };
  // useEffect(() => {
  //   const clearToken = async () => {
  //     setToken(null);
  //     await AsyncStorage.removeItem("authToken");
  //     //router.replace("/index");
  //   };
  //   clearToken();
  // }, []);

  const clearToken = async () => {
    setToken(null);
    await AsyncStorage.removeItem("authToken");
    //router.replace("/index");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;