import './Titles.css'

import Title from './Title'

function Titles({ data,name }) {

    return (
        <div>
            <div className="title">Popular {name}</div>
            <div className="titles-main">
                {data.map(record => {
                    return <Title details={record} />
                })}
            </div>
        </div>
    )
}

export default Titles