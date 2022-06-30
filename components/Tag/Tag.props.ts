import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'm' | 's';
    children: React.ReactNode;
    color: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}
