import React from 'react'
import Icon from '@mdi/react';

const MDIcon = ({size, color, icon}) => {
    return <Icon path={icon} size={size} color={color} />
}

export default MDIcon