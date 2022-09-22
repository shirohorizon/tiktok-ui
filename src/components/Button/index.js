import classNames from "classnames/bind";
import styles from './Button.module.scss';


const cx = classNames.bind(styles);

function Button({ children }) {

    let Type = 'button';

    return (
        <Type >
            {children}
        </Type>
    );
}

export default Button;