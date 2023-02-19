import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import s from "./PageLoader.module.scss";

interface pageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: pageLoaderProps) => {
  return (
    <div className={classNames(s.page_loader, {}, [className])}>
      <Loader />
    </div>
  );
};
