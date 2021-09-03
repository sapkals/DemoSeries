import { Link } from 'react-router-dom'
import './TitleType.css'

function TitleType({type, helpText, link}) {

    return (
        <div className="container">
            <Link to={link}>{type}</Link>
            <span>{type}</span>
            <span>{helpText}</span>
        </div>
    )
}

export default TitleType