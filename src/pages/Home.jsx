import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Main from '../Components/Main/Main'
import { connect } from 'react-redux'



function Home(props) {
  let dis;
  const [AlbumArtisteName, setAlbumArtisteName] = useState([])

  const [album, setAlbum] = useState([])
  const [albumSearch, setSearch] = useState([])

  useEffect(() => {
    axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json')
      .then(res => {
        setAlbum(res.data.feed.results);
        console.log(res.data.feed.results);
      })

  }
    , [])

  function search() {
    for (let i = 0; i < album.length; i++) {
      if (album[i].artistName == inputVal) {
        AlbumArtisteName.push(album[i])
      }
    }
    
    props.dispatch({
      type: 'Add'
      })

  }

  const [inputVal, setInputVal] = useState('');
  const getValue = (e) => {
    setInputVal((e.target.value))

  }
  return (
    <div>
      <Navbar search={search} getValue={getValue} type="text" inputVal={inputVal} />
      {AlbumArtisteName.map((ele) => (<Main key={ele.id} artisteName={ele.artistName} />))}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    AlbumArtisteName: state.AlbumArtisteName
  }
}

export default connect(mapStateToProps)(Home);