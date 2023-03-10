import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <Link to='/'><h1>Single Stocks</h1></Link>
            <ul>
                <Link to='/stocks'><li>Stocks</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </nav>
    )
}