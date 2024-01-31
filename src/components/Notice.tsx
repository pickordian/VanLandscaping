import { useContext, useState, createContext, ReactNode } from "react";
import { FaX, FaCheck } from "react-icons/fa6";

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationContext = createContext<{
  (message: string, type: boolean): void;
} | null>(null);

export const setNotification = () => {
  const showNotification = useContext(NotificationContext);
  if (!showNotification) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return showNotification;
};
export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: boolean;
  } | null>(null);

  const showNotification = (message: string, type: boolean): void => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      <div className={`notice ${notification ? "appear" : ""}`} role="alert">
        {notification && (
          <>
            <span>{notification.message}</span>
            <span>
              {notification.type ? (
                <FaCheck color="green" />
              ) : (
                <FaX color="red" />
              )}
            </span>
          </>
        )}
      </div>
    </NotificationContext.Provider>
  );
};
