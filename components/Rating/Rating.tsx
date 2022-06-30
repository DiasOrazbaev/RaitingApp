import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import {useEffect, useState, KeyboardEvent} from "react";

import StartIcon from './Start.svg';

const classNames = require('classnames');

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const changeDisplay = (i: number) => {
        if (!isEditable)
            return;
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating)
            return;
        setRating(i);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };


    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={classNames(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}

                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StartIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    );
};
