import { useRef } from 'react';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TransitionItem({result,selectName,...props}){
    const nodeRef = useRef();
    console.log(props,"Props")
    return (      
        <CSSTransition
          nodeRef={nodeRef}
          {...props}
          classNames="result"
          timeout={{ enter: 500, exit: 300 }}
        >
          <li ref={nodeRef} className="nameLi" onClick={selectName}>
            {result}
          </li>
        </CSSTransition>
    );
}

export default TransitionItem;