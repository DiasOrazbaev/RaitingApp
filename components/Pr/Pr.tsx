import {PrProps} from "./Pr.props";
import styles from './Pr.module.css';

const classNames = require('classnames');

export const Pr = ({size = 'm', children, className, ...props}: PrProps): JSX.Element => {
    return (
        <p className={classNames(className, {
            [styles.l]: size == 'l',
            [styles.m]: size == 'm',
            [styles.s]: size == 's',
        })}
           {...props}
        >
            {children}
        </p>
    );
}
