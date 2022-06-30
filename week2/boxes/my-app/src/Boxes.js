

function Card({ title, subtitle, description}) {

    return (
        <div
            className="card">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h4 >{description}</h4>
        </div>
    )
}

export default Card