import cl from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={cl.container}>
      Created by&nbsp;
      <a className={cl.link} href="https://github.com/1unemployedcoder">&copy;1unemployedcoder</a>
    </footer>
  );
};
