import React, { Component } from "react";
// import Divider from "./Divider";
import "./Navbar.css";
import SongsGif from './SongsGif.gif';
import { Link } from "react-router-dom";

export class NavbarSongs extends Component {


  SuggestMusic = [
    {
      "id" : 1,
      "Title" : "Satyameva Jayate 2",
      "Image" : "https://a10.gaanacdn.com/images/albums/9/2183909/crop_480x480_1533114795_2183909.jpg",
      "Film_url" : "https://gaana.com/album/satyameva-jayate-2-hindi",
      "Genre" : "Romance"
  
  },
  {
      "id" : 2,
      "Title" : "Brahmastra",
      "Image" : "https://c.ndtvimg.com/2022-07/a2h7ekag_alia_625x300_17_July_22.jpg",
      "Film_url" : "https://pagalworld.com.se/kesariya-mp3-song-download.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 3,
      "Title" : "Ek Villain Return",
      "Image" : "https://m.media-amazon.com/images/M/MV5BNmY5ZDM2MjMtNzQ3OS00NDJiLWIzZjEtMjVhOGRjZDEwZDdkXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg",
      "Film_url" : "https://pagalworld.com.se/album/ek-villain-returns-2022/1.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 4,
      "Title" : "Pushpa",
      "Image" : "https://www.koimoi.com/wp-content/new-galleries/2022/01/allu-arjuns-popularity-made-amazon-prime-video-shift-the-release-date-of-the-hindi-version-of-pushpa-the-rise-001.jpg",
      "Film_url" : "https://www.pagalworld.pw/saami-saami-hindi-pushpa-mp3-song/download.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 5,
      "Title" : "Kgf",
      "Image" : "https://im.rediff.com/movies/2022/apr/14kgf4.jpg",
      "Film_url" : "https://gaana.com/album/kgf-chapter-1-hindi",
      "Genre" : "Romance"
  
  },
  {
      "id" : 6,
      "Title" : "KGF-2",
      "Image" : "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
      "Film_url" : "https://pagalnew.com/album/kgf-chapter-02-hindi-2022.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 7,
      "Title" : "Beast",
      "Image" : "https://www.filmibeat.com/img/2022/05/x1-1651664905.jpg.pagespeed.ic.lxFtPfa9zj.jpg",
      "Film_url" : "https://pagalnew.com/album/beast-2022.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 8,
      "Title" : "Liger",
      "Image" : "https://i.ytimg.com/vi/4XmgqWXBnRA/hqdefault.jpg",
      "Film_url" : "https://pagalworld.com.se/album/liger-2022/1.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 9,
      "Title" : "half girlfriend",
      "Image" : "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-2494/list/halfgirlfriend1170x658.jpg",
      "Film_url" : "https://wynk.in/music/album/half-girlfriend/zm_ZMC00493",
      "Genre" : "Romance"
  
  },
  {
      "id" : 10,
      "Title" : "Chandni Chowk to China",
      "Image" : "https://m.media-amazon.com/images/M/MV5BMjEwOTc5MDEzOF5BMl5BanBnXkFtZTgwNTAxNTczMzE@._V1_.jpg",
      "Film_url" : "https://www.pagalworld.pw/chandni-chowk-to-china-2/files.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 11,
      "Title" : "KUCH NAA KAHO",
      "Image" : "https://m.media-amazon.com/images/I/61zS8nQby0L._SL1200_.jpg",
      "Film_url" : "https://www.jiosaavn.com/song/kuch-naa-kaho/EiwkCBxhWmw",
      "Genre" : "Romance"
  
  },
  {
      "id" : 12,
      "Title" : "piku",
      "Image" : "https://www.bollywoodhungama.com/wp-content/uploads/2021/05/5-Unknown-facts-about-the-Deepika-Padukone-Irrfan-Khan-Amitabh-Bachchan-starrer.jpg",
      "Film_url" : "https://www.jiosaavn.com/song/journey-song/NiRTXR5RBVs",
      "Genre" : "Romance"
  
  },
  {
      "id" : 13,
      "Title" : "Om Shanti Om",
      "Image" : "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/12/deepika-padukone-1609146911.jpg",
      "Film_url" : "https://wynk.in/music/album/om-shanti-om/hu_271591",
      "Genre" : "Romance"
  
  },
  {
      "id" : 14,
      "Title" : "Yalgaar",
      "Image" : "https://m.media-amazon.com/images/M/MV5BM2NlNzUyODUtZDgyNS00ZjU3LWI5NGUtOWFkYmQwMGVlNGRmXkEyXkFqcGdeQXVyMTE2MTc3MzU1._V1_.jpg",
      "Film_url" : "https://pagalfree.com/album/yalgaar-1992.html",
      "Genre" : "Romance"
  
  }, 
  {
      "id" : 15,
      "Title" : "Laal Singh Chaddha",
      "Image" : "https://c.ndtvimg.com/2022-02/jokps36_aamir-khan_625x300_15_February_22.jpg",
      "Film_url" : "https://pagalworld.com.se/album/laal-singh-chaddha-2022/1.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 16,
      "Title" : "Bhool Bhulaiyaa 2",
      "Image" : "https://images.hindustantimes.com/img/2022/05/20/1600x900/Bhool_Bhulaiyaa_2_1653020103317_1653020129793.jpg",
      "Film_url" : "https://pagalworld.com.se/bhool-bhulaiyaa-2-title-track-mp3-song-download.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 17,
      "Title" : "Bhool Bhulaiyaa",
      "Image" : "https://images.hindustantimes.com/img/2022/01/09/1600x900/Vidya_Balan_1641710054338_1641710070842.jpeg",
      "Film_url" : "https://www.jiosaavn.com/album/bhool-bhulaiyaa/jybR1H5X8aA_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 18,
      "Title" :"Jug Jugg Jeeyo",
      "Image" : "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/jugg-jeeyo-poster.jpg",
      "Film_url" : "https://pagalworld.com.se/album/jug-jugg-jeeyo-2022/1.html_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 19,
      "Title" : "OM",
      "Image" : "https://www.pinkvilla.com/imageresize/aditya_sanjana_om_song_main.jpg?width=752&format=webp&t=pvorg",
      "Film_url" : "https://www.pagalworld.pw/om-2022-mp3-songs/files.html",
      "Genre" : "Romance"
  
  },
  {
      "id" : 20,
      "Title" : "Major",
      "Image" : "https://www.telugu360.com/wp-content/uploads/2022/06/Major-Movie-Review.jpg",
      "Film_url" : "https://wynk.in/music/album/major-telugu/zm_ZMC04910_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 21,
      "Title" : "Bachchhan Paandey",
      "Image" : "https://c.ndtvimg.com/2022-03/p5lj94io_akshay-kumar_625x300_19_March_22.jpg",
      "Film_url" : "https://pagalworldl.com/files/bachchan-pandey-2022-mp3-songs/1.html_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 22,
      "Title" : "Dasvi",
      "Image" : "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1649337448.jpg",
      "Film_url" : "https://www.jiosaavn.com/album/dasvi/ege7Zd12nx4_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 23,
      "Title" : "Attack",
      "Image" : "https://images.indianexpress.com/2022/04/john-abraham.jpg",
      "Film_url" : "https://wynk.in/music/album/attack/zm_ZMC05084",
      "Genre" : "Romance"
  
  },
  {
      "id" : 24,
      "Title" : "Gangubai ",
      "Image" : "https://deadline.com/wp-content/uploads/2022/02/5.jpg",
      "Film_url" : "https://pagalnew.com/album/gangubai-kathiawadi-2022.html_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 25,
      "Title" : "Dhaakad ",
      "Image" : "https://images.indianexpress.com/2022/05/Dhaakad-review-1200.jpg",
      "Film_url" : "https://gaana.com/lyrics/dhaakad-title-song_",
      "Genre" : "Romance"
  
  },
  {
      "id" : 26,
      "Title" : "Dhokha",
      "Image" : "https://c.ndtvimg.com/2022-02/6b319q4g_dhokha_625x300_10_February_22.jpg",
      "Film_url" : "https://www.jiosaavn.com/album/dhokha/1qakm3mWrUc_",
      "Genre" : "sad songs"
  
  },
  {
      "id" : 27,
      "Title" : "Dilwale  Dhulhania ",
      "Image" : "https://www.bollywoodhungama.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-20-at-12.21.43-PM-1.jpeg",
      "Film_url" : "https://gaana.com/album/dilwale-dulhania-le-jayenge",
      "Genre" : "Romance,sad songs"
  
  },
  {
      "id" : 28,
      "Title" : "Fanaa ",
      "Image" : "https://i.ndtvimg.com/i/2016-05/fanaa_640x480_51464260257.jpg",
      "Film_url" : "https://www.jiosaavn.com/album/fanaa/k,TIgv1ORbc__",
      "Genre" : "Romance"
  
  },
  {
      "id" : 29,
      "Title" : "Hum Dil De Chuke  Sanam  ",
      "Image" : "https://musicart.xboxlive.com/6/cfa5f41e-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080",
      "Film_url" : "https://wynk.in/music/album/hum-dil-de-chuke-sanam/hu_346019",
      "Genre" : "Romance"
  
  },
  {
      "id" : 30,
      "Title" : "Love Aaj Kal",
      "Image" : "Love Aaj Kal",
      "Film_url" : "https://pagalsong.in/love-aaj-kal-2009-mp3-album.html",
      "Genre" : "Romance"
  
  }

  ]
    constructor(props) {
    super(props);
    this.state = {
      Music : this.Music,
      SongsItem : [],
  }
}
  
 SuggestSong = () =>{
  let min = 0;
  let max = 30;
  let rand = Math.floor(Math.random() * (max - min));
  console.log("Clicked SuggestSong")
  console.log(rand);
  
      this.setState ((this.state.SongsItem[0] = this.SuggestMusic[rand]))
      console.log(this.SuggestMusic[rand]);
      console.log(this.state.SongsItem)
   this.setState(( SongsGif= ""));
  
    
 }
    
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
                onClick={this.SuggestSong}
              >
                SuggestSong
              </button>
            </div>
            <div className="p-2 bd-highlight ">
              <Link to='/movies'><button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 my-2"
              >
                Movies
              </button>
              </Link>
            </div>
            <div className="p-2 bd-highlight ">
              <Link to = '/games'><button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-4 my-2"
              >
                Games
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
                {Object.keys(this.state.SongsItem || []).map((ele, id) => {
                  return (
                    <div className="col-md-4 my-3 container " key={id}>
                      <div>
                        <div className="container">
                        <h4 className="text-white">
                            <b>{this.state.SongsItem[0].Title}</b>
                          </h4>
                          <img class = 'ImageItem'src={this.state.SongsItem[0].Image}></img>
                          
                        </div>
                      </div>
                      <section>
                        <ul className="my-3">
                          
                          <li>
                            <pre className="text-warning">
                              Genre : {this.state.SongsItem[0].Genre}
                              
                            </pre>
                          </li>
                          <li>
                            <a
                              href={this.state.SongsItem[0].Film_url}
                              class="btn btn-light  glow-on-hover text-info"
                            >
                             Listen_Song
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
          <div className="container">
                <img src={SongsGif} alt=''></img>
            </div>
            <div className="contaiener" >
                

            </div>
        </div>

        
      </div>
    );
  }
}
export default NavbarSongs;
