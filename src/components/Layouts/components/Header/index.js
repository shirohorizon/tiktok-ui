import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import PopperMenu from '~/components/Popper/PopperMenu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut'
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([]);
    }, [])

    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>

            <img src={images.logo} alt="Tiktok" />

            <Tippy
                visible={searchResult.length > 0}
                interactive
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder='Search accounts and videos'
                        spellCheck='false'
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('sreach-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>
                    Upload
                </Button>
                <Button primary >
                    Log in
                </Button>
                <PopperMenu
                    items={MENU_ITEMS}
                >
                    <button className={cx('more-button')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </PopperMenu>
            </div>
        </div>
    </header>);
}

export default Header;