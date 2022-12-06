import "./requirement.component.scss";

const Requirement = ({requirementTitle, rest=[]}) => {
    return (
        <div className="requirement_container">
            <h2>{requirementTitle}</h2>
            <ul>
                {rest.map((data, i) => {
                    return <li key={i}>{data}</li>
                })}
            </ul>
        </div>
    )
}

export default Requirement;