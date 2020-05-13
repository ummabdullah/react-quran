import React, { Component } from 'react';

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
    return (
      <div>
        {this.state.surahs[0].name}
      </div>
    );
  }
}
