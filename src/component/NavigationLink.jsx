import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavigationLink({ to = "/", text = "", children = null }) {
  return (
    <Link to={to} className="group relative p-1">
      <span className="font-semibold">{children ? children : text}</span>
      <div className="group-hover:w-full absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-700 duration-200"></div>
    </Link>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default NavigationLink;
