import React from 'react';

function NewComp(props){
    const { stateFromParent } = props;
    return (
        <div>
          <ul>
            {stateFromParent && stateFromParent.map(user => (
              <li key={user.Id}>
                {user.FirstName} {user.LastName}
                <img src={user.Picture} alt={`${user.FirstName} ${user.LastName}`} />
              </li>
            ))}
          </ul>
        </div>
      );
}
export default NewComp;
