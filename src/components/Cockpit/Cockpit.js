import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    toggleButtonRef.current.click();
    
  }, []);

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson) {
      btnClass= classes.Red;  
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if(props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div className={'Cockpit'}>
           <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
            ref={toggleButtonRef} 
            className={btnClass} 
            onClick={props.toggle} >Toggle Persons</button> 
        </div>
        
    );
};

export default cockpit;