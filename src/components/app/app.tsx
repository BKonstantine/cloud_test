import { FC } from "react";
import { Outlet } from "react-router-dom";
import style from "./app.module.css"

const App: FC = () => {
  return <div className={style.app}><Outlet /></div>
};

export default App;
