import "./titleMeta.styles.scss";

const TitleMeta = ({title, meta}) => {
    return (
        <div className="title_meta_container">
            <h1>{title}</h1>
            <p>{meta}</p>
        </div>
    )
}

export default TitleMeta;