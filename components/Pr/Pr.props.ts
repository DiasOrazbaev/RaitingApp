import React, {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PrProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'm' | 'l' | 's';
    children: React.ReactNode;
}
