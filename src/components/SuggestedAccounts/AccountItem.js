import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Images/Images';
import styles from './SuggestedAccount.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy
            interactive
            placement="bottom"
            delay={[800, 0]}
            offset={[-16, 2]}
            appendTo={() => document.body}
            render={(attrs) => (
                <div className={cx('account-preview')} tabIndex="-1" {...attrs}>
                    <AccountPreview />
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src="" />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>tiin.vn</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Tiin.vn</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
