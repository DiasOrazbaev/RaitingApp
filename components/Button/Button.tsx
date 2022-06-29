import styles from "Button.module.css";
import {ButtonProps} from "./Button.props";
const classNames = require('classnames');

export const Button = ( { appearance, arrow = 'none', children, className, ...props }:ButtonProps ): JSX.Element => {
    return (
        <button className={classNames(appearance, className, arrow)}> {children} </button>
    );
}