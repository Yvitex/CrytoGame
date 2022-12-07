import Timeline from "../components/timeline/timeline.component";

const RoadMap = () => {
    return (
        <div>
            <Timeline date="November 10 - 15" text="Initial Planning and Feasibility Studies" />
            <Timeline date="November 16 - 30" text="System Design, Feature and Interface Planning" />
            <Timeline date="December 1 - 31" text="Software Development and Research" />
            <Timeline date="January 1 - 3" text="Debug and Testing" />
            <Timeline date="January 4 - 5" text="Deployment" />
            <Timeline date="January 6 - onwards" text="Maintenance and Update" />
        </div>
    )
}

export default RoadMap;