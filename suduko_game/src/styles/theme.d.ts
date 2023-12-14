import 'styled-components';

import {theme}  from 'typeof-theme';

declare module 'styled-component'{
    export interface defaulttheme extends theme()
}

