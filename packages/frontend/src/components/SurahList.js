import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SurahList extends Component {
  static displayName = SurahList.name;

  constructor(props) {
    //load surah names
    super(props);
    this.state = {};
    const url = "http://api.alquran.cloud/v1/meta";


    fetch(url)
    .then((response) => {
     return response.json();
    })
    .then((json) => {
      this.setState({
        surahs: json.data.surahs.references
      });

    });
  }

  render() {
    if (typeof(this.state.surahs) == typeof('undefined') || this.state.surahs == null)
    {
      return null;
    }

    var surahs = this.state.surahs.map((surah, key) => 
      <Link to={"/ayah/" + surah.number}><li key={surah.number}>{surah.number} {surah.name}</li></Link>
    );

    return (
      <div>
        <ul>
        {surahs}
        </ul>
      </div>
    );
  }
}
