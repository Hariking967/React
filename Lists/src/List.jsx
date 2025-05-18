import propTypes from 'prop-types'

function List(props)
{
    const category = props.category;
    const items = props.item;
    
    const itemList = items.map(item=><li key={item.id}>{item.name}:{item.calories}</li>);
    return(
        <>
            <h3 className='list-category'>{category}</h3>
            <ul className='list-item'>{itemList}</ul>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    calories: propTypes.number,
    id: propTypes.number
}

export default List;