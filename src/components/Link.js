import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

  const handleClick = (event) => {
    // if user holds down the 'ctrl' ('command') key and then clicks on the link,
    // it should be open in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // otherwise
    // prevent browser's normal behavior of total page refresh when clicking on <a> element
    event.preventDefault();

    // instead we want to use navigate function from the context
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
