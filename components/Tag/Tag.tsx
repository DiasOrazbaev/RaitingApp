import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';

const classNames = require('classnames');

export const Tag = ({size = 'm', children, color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={classNames(className, styles.tag, {
            [styles.l]: size == 's',
            [styles.m]: size == 'm',
            [styles.ghost]: color == 'ghost',
            [styles.primary]: color == 'primary',
            [styles.grey]: color == 'grey',
            [styles.red]: color == 'red',
            [styles.green]: color == 'green',
        })}
             {...props}
        >
            {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
}
