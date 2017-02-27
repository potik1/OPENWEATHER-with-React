var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">In {location} is {temp} °C now!</h3>
    );
};

module.exports = WeatherMessage;