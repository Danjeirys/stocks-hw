import { Link } from 'react-router-dom'
import data from '../data'

export default function Dashboard () {
    return (
        <div>
            <h2>Portfolio</h2>
            {
                data.map((stock) => {
                    const {name, symbol } = stock 

                    return (
                        <Link key={symbol} to={`/stocks/${symbol}`}>
                            <h3>{name}</h3>
                        </Link>
                    )
                })
            }
        </div>
    )
}