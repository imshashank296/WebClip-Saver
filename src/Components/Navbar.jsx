import styled from "styled-components";

export function NavBar() {
  return (
    <Containers>
      <header className="bg-dark d-flex justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="titlename" aria-current="page">
              <h1>WebClipSaver</h1>
            </a>
          </li>
        </ul>
      </header>
    </Containers>
  );
}

const Containers = styled.div`
  width: 100%;
  .titlename {
    color: white;
    transition: 0.2s ease-in-out;

    &:hover {
      color: deepskyblue;
    }
  }
`;
