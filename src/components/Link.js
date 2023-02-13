import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    // prevent browser's normal behavior of total page refresh when clicking on <a> element
    event.preventDefault();

    // instead we want to use navigate function from the context
    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
