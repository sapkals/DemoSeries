import { Link } from 'react-router-dom'
import './TitleType.css'

function TitleType({ type, helpText, link }) {

    return (
            <div id="myDiv" className="main">
                <Link className="container" to={link}>
                    <span>{type}</span>
                </Link>
                <span className='samu'>{helpText}</span>
            </div>
    )
}

export default TitleType