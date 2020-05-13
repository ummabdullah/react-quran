import React, { Component } from 'react';

export class AyahList extends Component {
  static displayName = AyahList.name;

  constructor(props) {
    //load surah names
    super(props);
    this.state = { number: props.surahNumber };
    const url = "http://api.alquran.cloud/v1/surah/" + props.surahNumber;


    fetch(url)
    .then((response) => {
     return response.json();
    })
    .then((json) => {
      this.setState({
        ayahs: json.data.ayahs
      });

    });
  }

  render() {
    if (typeof(this.state.ayahs) == typeof('undefined') || this.state.ayahs == null)
    {
      return null;
    }

    var ayahs = this.state.ayahs.map((ayah, key) => 
      <li key={ayah.number}>{ayah.numberInSurah} {ayah.text}</li>
    );

    return (
      <div>
        <h1>Surah #{this.state.number}</h1>
        {ayahs}
      </div>
    );
  }
}
