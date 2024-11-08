// h2 My application
// p #{foo}
// h3 #{bar}
// each val, index in items
//   p #{val['name']}
// img(
//     src='images/'+val['image']
//     class= "test"
// )
import React from 'react';

const App = () => {
    // Пример данных
    const foo = "Значение foo";
    const bar = "Значение bar";


    return (
        <div>
            <h2>My application</h2>
            <p>{foo}</p>
            <h3>{bar}</h3>
            <div>
                {items.map((val, index) => (
                    <div key={index}>
                        <p>{val.name}</p>
                        <img src={`images/${val.image}`} alt={val.name} className="test" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
