import './Titles.css'

import Title from './Title'

function Titles({ data }) {

    return (
        <div className="titles-main">
            {data.map(record => {
                return <Title details={record} />
            })}
        </div>
    )
}

export default Titles