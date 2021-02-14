import { Settings } from 'http2';
import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    onClick: (name: string) => void;
}

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => {
//     return <div>Hello, {name} {mark}!</div>;
// }

function Greetings({ name, mark, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
    <div>
        Hello, {name} {mark}!
        <div>
            <button onClick={handleClick }>Click me</button>
        </div>
    </div>);
}

Greetings.defaultProps = {
    mark: '!',
}

export default Greetings;