import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HederContainer = styled.header`
  .header__logo-container {
    background-color: ${({ theme }) => theme.headerBg};
    .inner__wrapper {
      height: 43px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header__title {
        width: 100%;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
      }
      .header__submenu {
        width: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          cursor: pointer;
        }
        li:last-child {
          margin-left: 11px;
        }
      }
    }
  }
  .header__gnb {
    ul {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 100%;
        text-align: center;
        font-weight: bold;
        color: #727272;
        cursor: pointer;
        a {
          width: 100%;
          padding: 10px;

          &:hover {
            border-bottom: 3px solid #ed702d;
            color: ${({ theme }) => theme.fontColor};
          }

          &.active {
            border-bottom: 3px solid #ed702d;
            color: ${({ theme }) => theme.fontColor};
          }
        }
      }
    }
  }
`;

const Header = ({ toggleTheme }) => {
  return (
    <HederContainer>
      <div className="header__logo-container">
        <div className="inner__wrapper">
          <img src="/images/Logo.svg" alt="Logo" />
          <h1 className="header__title">
            <NavLink to="/">Svelte Hacker News</NavLink>
          </h1>
          <ul className="header__submenu">
            <li>
              <button onClick={toggleTheme}>
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
      </div>
      <nav className="header__gnb">
        <ul className="inner__wrapper">
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
    </HederContainer>
  );
};

export default Header;
