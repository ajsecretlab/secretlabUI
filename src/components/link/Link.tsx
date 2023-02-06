import { ReactNode, forwardRef } from "react";

export interface IAnchor {
    children: ReactNode;
    to: string;
    classes?: string;
    onClick?: () => void;
}

export type Ref = HTMLAnchorElement;

export const Link = forwardRef<Ref, IAnchor>(
    ({ children, to, classes, onClick }, ref) => {
        return (
            <a ref={ref} onClick={onClick} href={to} className={classes}>
                {children}
            </a>
        );
    }
);

Link.displayName = "Link";
