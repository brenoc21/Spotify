import React from "react";
import { ButtonPrimary, ButtonSecondary, ButtonTerciary } from './styles'
export default function Button(props) {
    if (props.type == undefined || props.type == 0) {
        props.type = 0;
        return (
            <ButtonPrimary>
                {props.text}
            </ButtonPrimary>
        );
    } else if (props.type == 1) {
        return (
            <ButtonSecondary>
                {props.text}
            </ButtonSecondary>
        );
    } else if (props.type == 2) {
        return (
            <ButtonTerciary>
                {props.text}
            </ButtonTerciary>
        );
    }
}