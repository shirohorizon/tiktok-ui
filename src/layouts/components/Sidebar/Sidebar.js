import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title={'For You'}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.following}
                        title={'Following'}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.live}
                        title={'LIVE'}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>

                <SuggestedAccounts label={'Suggested accounts'} />
                <SuggestedAccounts label={'Following accounts'} />
            </div>
        </aside>
    );
}

export default Sidebar;
