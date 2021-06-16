/// <reference types="react" />
import { AccProps } from '../types';
declare const Header: {
    ({ isAuth, accName }: AccProps): JSX.Element;
    defaultProps: {
        isAuth: boolean;
    };
};
export default Header;
