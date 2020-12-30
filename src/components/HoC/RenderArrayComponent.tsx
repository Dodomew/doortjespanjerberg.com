import React from 'react';

// First we need to add a type to let us extend the incoming component.
interface RenderArrayComponentProps {
    data: [
        {
            text: string
        }
    ]
};

type RCT<P> = React.ComponentType<P>;
type RAD = RenderArrayComponentProps;

const withArrayRenderer = <P extends object>( Component: RCT<P> ): React.FC<P & RAD> => ({
    data, ...props } : 
    RenderArrayComponentProps) => {
      if(data.length > 0) {
          return <Component {...props as P} data={data} />;
      }
      else {
          return <h1>Loading...</h1>
      }
  }

export default withArrayRenderer;