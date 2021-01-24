import React from 'react';

const withClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default withClass;

// use as alternative to div or aux in a component