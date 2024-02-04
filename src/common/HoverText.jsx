import { Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function HoverText(props) {




    return (
        <Text
            className='uppercase pl-14 font-black text-black mb-5 relative'
            _after={{
                content: '""',
                position: "absolute",
                width: '50px',
                height: "2px",
                bgColor: '#000',
                left: '0px',
                bottom: '10px'
            }}
        >
            {props.Text}
        </Text>
    )
}
