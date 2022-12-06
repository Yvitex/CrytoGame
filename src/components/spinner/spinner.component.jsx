import "./spinner.styles.scss";

const Spinner = () => {
    return (
        <div>
            <div className="lds-circle"><div></div></div>
            <p>Loading...</p>
        </div>
    )
}

export default Spinner;