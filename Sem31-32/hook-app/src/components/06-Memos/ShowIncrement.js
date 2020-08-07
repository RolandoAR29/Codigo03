import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    
    console.log('Volví a ser generado :C');
    
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={ () => {
                    increment();
                }}
            >
                incrementar
            </button>
        </div>
    )
}
)