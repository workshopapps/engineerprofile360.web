import skriptlogo from "./assets/Skriptlogo.png"
import successfulImg from "./assets/successful.png"
import styled from "styled-components";
import {Button} from "../../../../styles/reusableElements.styled"

export default function ResetSuccessful(){
    return(
        <div className="reset-successful-page">
            <div className="successful-header">
                <img src={skriptlogo} alt="skript logo" />
            </div>
            <div className="successful-body">
                <img src={successfulImg} alt="reset successful" />
                <h1>Successful passsworg reset!</h1>
                <p>You can now use your new password to log in to your account</p>
            </div>
            <div>
                <Button $size="lg">
                    Login
                </Button>
            </div>
        </div>
    )
}