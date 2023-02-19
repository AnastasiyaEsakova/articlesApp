import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>TOGGLE</Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
