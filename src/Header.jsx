import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/incomes">Incomes</NavLink>
        </li>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
