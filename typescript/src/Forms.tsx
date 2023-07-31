import React, { useState } from 'react';

export default function Forms() {
    const [text, setText] = useState('');
    const changeText = (event: React.FormEvent<HTMLInputElement>) => {
        const val = event.currentTarget.value;
        setText(val);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    console.log(text);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={changeText} />
                <button>submit</button>
            </form>
        </div>
    );
}
