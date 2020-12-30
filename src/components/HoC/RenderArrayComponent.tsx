import React from 'react';

const withExistsRenderer = <T extends object>( WrappedComponent: React.FC<T> ): React.FC<T> => 
    ( props : T ) => 
    {
        //console.log(props)
        if(Object.keys(props).length !== 0) {
            return <WrappedComponent {...props as T } />;
        }
        else {
            return null;
        }
    }

export default withExistsRenderer