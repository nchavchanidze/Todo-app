import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';



function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon className="faicons" icon="trash" onClick={() => props.deleteItem(item.key)} />
                    </span>
                </p>
            </div>
        )
    })
    return (
        <div className="list_items">
            <FlipMove duration={500} easing="ease-in-out">
            {listItems}
            </FlipMove>
            </div>
    )
}


export default ListItems;