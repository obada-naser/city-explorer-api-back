




class Forcast {
  constructor(value) {
    this.date = value.valid_date;
    this.description = value.weather.description;
  }

}

module.exports = Forcast;



