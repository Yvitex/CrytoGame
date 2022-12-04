import "./button.styles.scss"

const Button = ({buttonText, specClass="playButton"}) => {
    return (
        <button className={specClass}>{buttonText}</button>
    )
}

export default Button;