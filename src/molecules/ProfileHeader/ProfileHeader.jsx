import React from 'react';
import { string, shape} from 'prop-types';

import { 
    ProfileHeaderContainer,
    ProfileName,
} from './ProfileHeader.styled';

import Icon from '../../atoms/Icon';

function ProfileHeader(props) {
    const { generalInfo } = props;
    return(
        <ProfileHeaderContainer>
            <Icon src={generalInfo.image} alt={generalInfo.name}/>
            <ProfileName>{generalInfo.name}</ProfileName>
        </ProfileHeaderContainer>
    );
}

ProfileHeader.propTypes = {
    generalInfo: shape({
        name: string.isRequired,
        image: string.isRequired,
    }).isRequired,
}

export { ProfileHeader as default};