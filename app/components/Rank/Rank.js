import React from 'react';

const Rank = ({ name, entries }) => {
    return(
        <div className='p3'>
            <div className='white center'>
                <p className='m0 f2'>
                    {`${name}, your current entry count is...`}
                </p>
            </div>
            <div className="white f1 center">
                <p className='m0'>
                    {entries}
                </p>
            </div>
        </div>
    )
}

export default Rank;