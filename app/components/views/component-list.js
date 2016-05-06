import React from 'react';
import ComponentItem from './component-item';

export default function(props) {
  return (
    <ul className="component-list">
      {props.items.map(item => {
        return (
            <ComponentItem key={item.id} name={item.name} experience={item.experience}/>
        );
      })}
    </ul>
  );
}
