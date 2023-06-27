import React from 'react';

const Create = () => {
    return (
        <div className='create' >
            <form method='post' action="http://localhost:5000/data/create">
                title : <input type="text" name='title' id='title' /> <br />
                description : <input type="text" name='title' id='title' /> <br />
                <input type="submit" value="create" />
            </form>
        </div>
    );
}

export default Create;
