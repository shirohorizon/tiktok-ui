import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './PopperMenu.module.scss';
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);


function PopperMenu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={attrs => (
                <div className={cx('list-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default PopperMenu;