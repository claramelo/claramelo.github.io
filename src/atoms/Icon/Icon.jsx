import React from 'react';
import { string } from 'prop-types';

import IconContainer from './Icon.styled';

function Icon(props) {
    const { src, alt } = props;
    return (
        <IconContainer src={src} alt={alt}/>
    );
}

Icon.propTypes = {
    src: string.isRequired,
    alt: string.isRequired
}

export { Icon as default };