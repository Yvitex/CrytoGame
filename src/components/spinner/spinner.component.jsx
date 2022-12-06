import "./spinner.styles.scss";

const Spinner = ({textLoading="Loading..."}) => {
    return (
        <div className="spinner">
            <div className="lds-circle"><div></div></div>
            <p>{textLoading}</p>
        </div>
    )
}

export default Spinner;