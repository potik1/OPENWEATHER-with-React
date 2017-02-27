var React = require('react');


var About = ()=> {
    return (
        <div>
        <h1 className="text-center page-title">About</h1>
            <p>
                This is weather application built in React
            </p>
            <p>
               To built it  I used succeeding tools:
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react" >React</a> - JavaScript Framework
                    </li>
                    <li>
                        <a href="https://openweathermap.org">Open Weather Map</a> - Current Weather in your city
                    </li>
                    <li>
                        <a href="http://foundation.zurb.com">Foundation</a> - CSS style
                    </li>
                </ul>
            </p>
        </div>
    );
};

module.exports = About;