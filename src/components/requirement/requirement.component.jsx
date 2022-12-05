import "./requirement.component.scss";

const Requirement = ({requirementTitle, rest=[]}) => {
    return (
        <div className="requirement_container">
            <h2>{requirementTitle}</h2>
            <ul>
                {rest.map((data) => {
                    return <li>{data}</li>
                })}
            </ul>
        </div>
    )
}

export default Requirement;