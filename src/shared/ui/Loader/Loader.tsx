import { classNames } from 'shared/lib/classNames/classNames';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(s.lds_roller, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
