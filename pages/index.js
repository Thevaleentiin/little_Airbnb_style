// pages/index.js
import { Component } from 'react'
import Head from 'next/head'
import { config } from '../components/Config.js'
import Layout from '../components/MyLayout.js'
import AppartmentList from '../components/AppartmentList.js'
import Searchbar from '../components/SearchBar.js'
import "../style.css"

const fetch = require("node-fetch");

class Index extends Component {
  state = {
    showAll: false,
    searchValue: '',
    isLoading: false,
    appartments: [],
    favorites: [],
  }
  async componentWillMount() {
    this.setState({
      isLoading: true
    })
    const apiUrl = config.apiUrl
    const req = await fetch(apiUrl) 
    const appartments = await req.json()
    this.setState({
      isLoading: false,
      appartments 
    })
  }
  toggleShow = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }
  handleInputText = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  toggleFavorite = (e, id) => {
    const favs = this.state.favorites
    if (favs.includes(id)) {
      const index = favs.indexOf(id)
      favs.splice(index, 1)
      this.setState({
        favorites: favs
      })
    } else {
      favs.push(id)
      this.setState({
        favorites: favs
      })
    }
  }
  render () {
    const { showAll, searchValue, isLoading, appartments, favorites } = this.state

    const filteredAppartments = appartments.filter(el => el.title.rendered.toLowerCase().includes(searchValue))
    const availableAppartments = showAll ? filteredAppartments : filteredAppartments.filter(el => {
      if (el.acf.available) {
        return el
      } else {
        return false
      }
    })
    return (
      <div>
      <Head>
      <title>Liste d'appartements</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <div className="container-all">
          <div className="search-container">
            <h1>Nos appartements disponible:</h1>
            <button className="btn-Show" onClick={this.toggleShow}>
              {showAll ? 'Show only available' : 'ShowAll'}
            </button><br/>
            <Searchbar
              searchValue={searchValue}
              handleInputText={this.handleInputText}
              found={availableAppartments.length}
              total={appartments.length}
              />
          </div>
          <div className="result-search">
            {isLoading ?
              <p>Loading ...</p>
              :
              <AppartmentList
                appartments={availableAppartments}
                favorites={favorites}
                toggleFav={this.toggleFavorite}
              />
            }
          </div>
        </div>
      </Layout>
      </div>
    )
  }
}
export default Index