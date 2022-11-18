import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={`/controler/`}>media controler版</Link>
      </li>
      <li>
        <Link to={`/hooks/`}>hooks版</Link>
      </li>
    </ul>
  )
}

export default Home
