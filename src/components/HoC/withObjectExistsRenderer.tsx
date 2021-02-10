// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';

/*
    This HoC wants a React component as parameter and returns the same React component
    if it matches a certain condition.

    In this case, this component must have a prop which is atleast an Object, which should not be empty.
    Note: Arrays are also Objects

    Usage is primarily for Titles and Subtitles
*/

const withObjectExistsRenderer = <T extends object>(WrappedComponent: React.FC<T>): React.FC<T> =>
    (props: T) => {
        if (Object.keys(props).length !== 0) {
            return <WrappedComponent {...props as T} />;
        }
        else {
            return null;
        }
    }

export default withObjectExistsRenderer