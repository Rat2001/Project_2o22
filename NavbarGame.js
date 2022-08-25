import React, { Component } from "react";
import Divider from "./Divider";
import GameG  from './GameCart.gif';
import "./Navbar.css";
import { Link } from "react-router-dom";

export class NavbarGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dummy: this.Dummy,

      GamesItem: [],
    };
  }
  
  handleClick = async () => {
    let min = 0;
    let max = 357;
    let rand = Math.floor(Math.random() * (max - min));
    console.log(rand);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12bdad0117msh6a455b2a42318b6p179ef2jsn52763d71304d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${rand}`;
    let data = await fetch(url, options);
    let parsedData = await data.json();
    console.log(parsedData);

    if (parsedData.status != 0) {
      this.setState((this.state.GamesItem[0] = parsedData)) 
      this.setState(( GameG = ""));
    }
  };
  render() {
    return (
      <div>
        <div class="d-flex justify-content-between ">
          <div class="d-flex flex-row bd-highlight mb-4 container">
            <div className="p-2 bd-highlight ">
              <Link to='/'><button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 my-2"
              >
                Home
              </button>
              </Link>
            </div>

            <div className="p-2 bd-highlight ">
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 my-2"
                onClick={this.handleClick}
              >
                SuggestGame
              </button>
            </div>
            <div className="p-2 bd-highlight ">
              <Link to='/movies'>
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 my-2"
              >
                Movies
              </button>
              </Link>
            </div>
            <div className="p-2 bd-highlight ">
              <Link to='/songs'>
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-4 my-2"
              >
                Songs
              </button>
              </Link>
            </div>
            
          </div>
        </div>
        <hr className="Heading"></hr>
        <div className="container">
          <div className=" my-2 mx-9 ">
            {
              <ul>
                {Object.keys(this.state.GamesItem || []).map((ele, id) => {
                  return (
                    <div className="col-md-4 my-3 container " key={id}>
                      <div>
                        <div className="container">
                        <h4 className="text-white">
                            <b>{this.state.GamesItem[0].title}</b>
                          </h4>
                          <img src={this.state.GamesItem[0].thumbnail}></img>
                          
                        </div>
                      </div>
                      <section>
                        <ul className="my-3">
                          <li>
                            <h6 className="text-warning">
                              {this.state.GamesItem[0].short_description}
                            </h6>
                          </li>
                          <li>
                            <pre className="text-warning">
                              Genre/Platform : {this.state.GamesItem[0].genre}/
                              {this.state.GamesItem[0].platform}
                            </pre>
                          </li>
                          <li><pre className="text-warning">Publisher/Developer : {this.state.GamesItem[0].publisher}/{this.state.GamesItem[0].developer}</pre></li>
                          <li >
                            <a
                              href={this.state.GamesItem[0].game_url}
                              class="btn btn-light  glow-on-hover text-info"
                            >
                             Play_Game
                            </a>
                          </li>
                        </ul>
                      </section>
                      <hr className="Heading"></hr>
                    </div>
                  );
                })}
              </ul>
            }
          </div>
          <div className="container my-3 ">
          <img class = "MoveGameGif"src={GameG}></img>
        </div>
        </div>

        
      </div>
    );
  }
}
export default NavbarGame;
