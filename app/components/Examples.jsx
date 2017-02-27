var React = require('react');
var {Link}=require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p> Here are a few examples of locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Katowice'>Katowice, Polska</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazylia</Link>
                </li>
            </ol>
        </div>

    )
};

module.exports = Examples;