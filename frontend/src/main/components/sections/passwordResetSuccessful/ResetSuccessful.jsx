import skriptlogo from "./assets/Skriptlogo.png"
import successfulImg from "./assets/successful.png"
import "./ResetSuccessful.css"


import {Button , Title , Container} from "../../../../styles/reusableElements.styled"



export default function ResetSuccessful(){
    return(
        <Container>
            <section className="reset-successful-section" >
                <div className="successful-header">
                    <img src={skriptlogo} alt="skript logo" />
                </div>
                <div className="successful-body">
                    <img src={successfulImg} alt="reset successful" />
                    <h1 className="successful-title">Successful passsword reset!</h1>
                    <p className="succeesful-paragraph">You can now use your new password to log in to your account</p>
                </div>
                <div>
                    <Button $size="lg">
                        Login
                    </Button>
                </div>
            </section>
        </Container >
    )
}