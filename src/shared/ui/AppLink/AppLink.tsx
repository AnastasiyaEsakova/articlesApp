import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className, s[theme]])}
        >
            {children}
        </Link>
    );
};
