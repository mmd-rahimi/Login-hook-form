import { createContext, FC, ReactNode, useState } from "react";
export interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleClose: () => void;
}

export interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);;

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};


