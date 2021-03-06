import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list.js'

const API_KEY = 'AIzaSyBoepjixgBmT19gd4-aTjetHd8PpJiInss';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      // this.setState({ videos: videos })
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
