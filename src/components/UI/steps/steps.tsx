import { FC, memo } from "react";
import cn from "classnames";
import PointIcon from "../../../icons/point-icon";
import ArrowIcon from "../../../icons/arrow-icon";
import style from "./steps.module.css";

type Props = { step: number; className?: string };

const Steps: FC<Props> = memo(({ step, className }) => {
  const checkTextColor = (position: number, step: number) => {
    if (position <= step) {
      return style.circle__number_active;
    }
  };

  const checkIconColor = (position: number, step: number) => {
    if (position <= step) {
      return style.circle__item_active;
    }
  };

  const checkIcon = (position: number, step: number) => {
    if (position === step) {
      return <PointIcon />;
    }
    if (position < step) {
      return <ArrowIcon />;
    }
  };

  const checkStep = (step: number) => {
    return step === 2
      ? style.step_active_50
      : step === 3
      ? style.step_active_100
      : undefined;
  };

  return (
    <div className={cn(style.steps, className)}>
      <div className={cn(style.circle, style.circle_position_left)}>
        <div className={cn(style.circle__item, checkIconColor(1, step))}>
          {checkIcon(1, step)}
        </div>
        <span
          className={cn(
            style.circle__number,
            style.circle__number_position_left,
            checkTextColor(1, step)
          )}
        >
          1
        </span>
      </div>
      <div className={cn(style.circle, style.circle_position_center)}>
        <div className={cn(style.circle__item, checkIconColor(2, step))}>
          {checkIcon(2, step)}
        </div>
        <span
          className={cn(
            style.circle__number,
            style.circle__number_position_center,
            checkTextColor(2, step)
          )}
        >
          2
        </span>
      </div>
      <div className={cn(style.circle, style.circle_position_right)}>
        <div className={cn(style.circle__item, checkIconColor(3, step))}>
          {checkIcon(3, step)}
        </div>
        <span
          className={cn(
            style.circle__number,
            style.circle__number_position_right,
            checkTextColor(3, step)
          )}
        >
          3
        </span>
      </div>
      <div className={cn(style.step, checkStep(step))}></div>
    </div>
  );
});

export default Steps;
