import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // window.location.pathname - current path that is currently displayed inside the address bar

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    // listen for 'popstate' event - to detect the fact that a user goes back and forward using browser buttons
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    // window.history.pushState({}, ‘’, ‘/path-name’); - function is designed to update the address bar,
    // but it doesn’t cause a full refresh or the page.
    // It also automatically makes the back button work as expected without full page refresh.
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
