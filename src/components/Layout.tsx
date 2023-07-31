import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <div className="absolute w-full bg-slate-900 z-10">
            <Link className="px-2" to="/">
              About Me
            </Link>
            <Link className="px-2" to="/past-works">
              Past Works
            </Link>
            <a className="px-2" href="/college">
              College Projects
            </a>
            <a className="px-2" href="/side-projects">
              Side Projects
            </a>
          </div>
        </nav>
      </header>
      <section>{children}</section>
    </>
  );
}
export default Layout;
