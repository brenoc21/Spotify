import React from "react";
import { ButtonPrimary, ButtonSecondary } from './styles'
export default function Button(props){
    if (props.type == undefined) {
        props.type = 0;
    }
    return (
        props.type == 0 
        ?<ButtonPrimary>
            {props.text}
        </ButtonPrimary>
        :<ButtonSecondary>
            {props.text}
        </ButtonSecondary>
    )
}