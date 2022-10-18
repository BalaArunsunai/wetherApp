export const ApiKey = 'acea6bafea682fab9ab9b2b6a164c633'

export const getDay = date => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date(date);
    return weekday[d.getDay()];
}

export const kelvinToCelcius = kelvin => Math.round(kelvin - 273.15 )