import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink className={({ isActive }) => cx('menu-item', { active: isActive })} to={to} end>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    activeIcon: PropTypes.object.isRequired,
};

export default MenuItem;
