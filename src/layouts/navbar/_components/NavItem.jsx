import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => {
  if (to.startsWith("#")) {
    return (
      <Link
        to={to.substring(1)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={cn(
          "cursor-pointer transition-colors hover:text-foreground",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "transition-colors",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};