import './Title.css'
function Title({ details }) {
    let title = details.title
    let releaseYear = details.releaseYear

    return (
        <div className="title-main">
            <label>{title}</label>
            <br />
            {/* <img src={details.images["Poster Art"].url}  alt={details.description}/> */}
            <label>{releaseYear}</label>
            <br />
            <label>{details.programType}</label>
            <br />
        </div>
    )
}

export default Title