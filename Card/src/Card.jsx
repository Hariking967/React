import ProfilePic from './assets/Fiverr.jpg'
import propTypes from 'prop-types'

function Card(props)
{
    return(
        <div className="card">
            <img alt="profile-pic" src={ProfilePic}></img>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

Card.propTypes = {
    name: propTypes.string,
    desc: propTypes.string,
}

Card.defaultProps = {
    name:"Sri Hari",
    desc: "B.Tech in CSE-AI"
}

export default Card;