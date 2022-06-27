import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src="/images/Logo.svg" alt="Logo" />
        <h1>
          <NavLink to="/">Svelte Hacker News</NavLink>
        </h1>
        <ul>
          <li>
            <button>
              <img src="/images/icon_theme.png" alt="Chage theme mode" />
            </button>
          </li>
          <li>
            <NavLink to="/about">
              <img src="/images/icon_about.png" alt="go to about" />
            </NavLink>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/top">Top</NavLink>
          </li>
          <li>
            <NavLink to="/new">New</NavLink>
          </li>
          <li>
            <NavLink to="/show">Show</NavLink>
          </li>
          <li>
            <NavLink to="/ask">Ask</NavLink>
          </li>
          <li>
            <NavLink to="/job">Job</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
