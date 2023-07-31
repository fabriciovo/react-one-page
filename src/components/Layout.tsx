function Layout({ children }: any) {
  return (
    <>
      <header>
        <nav>
          <div className="absolute w-1/2 top-0 left-1/2 bg-slate-900 ">
            <a className="px-2" href="#home">
              About Me
            </a>
            <a className="px-2" href="#news">
              Projects
            </a>
            <a className="px-2" href="#contact">
              College Projects
            </a>
            <a className="px-2" href="#about">
              Side Projects
            </a>
          </div>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </>
  );
}
export default Layout;
