import cl from "./Button.module.css";
export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
}) => {
  return <button className={cl.btn}>{children}</button>;
};
