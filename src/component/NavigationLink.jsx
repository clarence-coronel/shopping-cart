import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationLink({ to = "/", text = "", children = null }) {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === to) setActive(true);
    else setActive(false);
  }, [location.pathname]);

  return (
    <Link
      to={to}
      className={`group relative p-1 text-lg ${
        active && "font-semibold text-purple-600"
      }`}
    >
      <span className="group-hover:text-purple-600 duration-200">
        {children ? children : text}
      </span>
      <div className="group-hover:w-full absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 duration-200"></div>
    </Link>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default NavigationLink;
