import { Link } from 'react-router-dom'
import './TitleType.css'

function TitleType({ type, helpText, link }) {

    return (
        <div>
            <Link className="container" to={link}>
                <span>{type}</span>
            </Link>
            <span>{helpText}</span>
        </div>
    )
}

export default TitleType