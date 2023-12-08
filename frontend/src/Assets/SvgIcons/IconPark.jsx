import React from 'react'
import { Icon } from '@iconify/react';

const IconPark = ({path, color, size}) => {
    return <Icon icon={path} color={color} width={size} height={size}/>
}

export default IconPark