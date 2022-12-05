import "./titleMeta.styles.scss";

const TitleMeta = ({title, meta}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{meta}</p>
        </div>
    )
}

export default TitleMeta;