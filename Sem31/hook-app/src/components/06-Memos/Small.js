import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Volví a ser llamado :C');

    return (
            <small>{ value }</small>
    )
}
)
