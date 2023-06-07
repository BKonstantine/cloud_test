import { FC, memo } from "react";
import cn from "classnames";
import PointIcon from "../../../icons/point-icon";
import ArrowIcon from "../../../icons/arrow-icon";
import style from "./steps.module.css";

type Props = { step: number };

const Steps: FC<Props> = memo(({ step }) => {
  const checkStep = (step: number) => {
    return step === 2
      ? style.step_active_50
      : step === 3
      ? style.step_active_100
      : undefined;
  };

  return (
    <div className={style.steps}>
      <div className={style.circle}>
        <div className={style.circle__item}></div>
        <span className={style.circle__number}></span>
      </div>
      <div className={cn(style.step, checkStep(step))}></div>
    </div>
  );
});

export default Steps;
