import { useContext, createContext } from "react";

interface AppContextType {
   isAuthenticated: boolean; 
   userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | null>(null)

export function useAppContext() {
  return useContext(AppContext);
}