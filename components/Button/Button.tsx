import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";
const classNames = require('classnames');
import ArrowIcon from './Arrow.svg';

export const Button = ( { appearance, arrow = 'none', children, className, ...props }:ButtonProps ): JSX.Element => {
    return (
        <button className={classNames(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
        })} {...props}> {children}  {arrow != "none" &&
            <span className={classNames(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon/>
            </span>} </button>
    );
}