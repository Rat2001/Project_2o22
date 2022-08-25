import React from "react";

import "./Games.css";


import { NavbarGame } from "./NavbarGame";
import Divider from './Divider';
class Games extends React.Component {
  Dummy = [
    {
      id: 1,
      title: "Dauntless",
      thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
      short_description:
        "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
      game_url: "https://www.freetogame.com/open/dauntless",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Phoenix Labs",
      developer: "Phoenix Labs, Iron Galaxy",
      release_date: "2019-05-21",
      freetogame_profile_url: "https://www.freetogame.com/dauntless",
    },
    {
      id: 2,
      title: "World of Tanks",
      thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
      short_description:
        "If you like blowing up tanks, with a quick and intense game style you will love this game!",
      game_url: "https://www.freetogame.com/open/world-of-tanks",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Wargaming",
      developer: "Wargaming",
      release_date: "2011-04-12",
      freetogame_profile_url: "https://www.freetogame.com/world-of-tanks",
    },
    {
      id: 3,
      title: "Warframe",
      thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
      short_description:
        "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
      game_url: "https://www.freetogame.com/open/warframe",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Digital Extremes",
      developer: "Digital Extremes",
      release_date: "2013-03-25",
      freetogame_profile_url: "https://www.freetogame.com/warframe",
    },
    {
      id: 4,
      title: "CRSED: F.O.A.D.",
      thumbnail: "https://www.freetogame.com/g/4/thumbnail.jpg",
      short_description:
        "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
      game_url: "https://www.freetogame.com/open/crsed",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Distribution KFT",
      developer: "Darkflow Software",
      release_date: "2019-12-12",
      freetogame_profile_url: "https://www.freetogame.com/crsed",
    },
    {
      id: 5,
      title: "Crossout",
      thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
      short_description: "A post-apocalyptic MMO vehicle combat game! ",
      game_url: "https://www.freetogame.com/open/crossout",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Targem",
      developer: "Gaijin",
      release_date: "2017-05-30",
      freetogame_profile_url: "https://www.freetogame.com/crossout",
    },
    {
      id: 6,
      title: "Blade and Soul",
      thumbnail: "https://www.freetogame.com/g/6/thumbnail.jpg",
      short_description:
        "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
      game_url: "https://www.freetogame.com/open/blade-and-soul",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "NCSoft",
      developer: "NCSoft",
      release_date: "2016-01-19",
      freetogame_profile_url: "https://www.freetogame.com/blade-and-soul",
    },
    {
      id: 7,
      title: "Armored Warfare",
      thumbnail: "https://www.freetogame.com/g/7/thumbnail.jpg",
      short_description:
        "A modern team-based MMO tank game from Obsidian Entertainment.",
      game_url: "https://www.freetogame.com/open/armored-warfare",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "My.com (Mail.ru Group)",
      developer: "Obsidian Entertainment",
      release_date: "2015-10-08",
      freetogame_profile_url: "https://www.freetogame.com/armored-warfare",
    },
    {
      id: 8,
      title: "Trove",
      thumbnail: "https://www.freetogame.com/g/8/thumbnail.jpg",
      short_description:
        "A free to play Sandbox massively multiplayer online role-playing game! ",
      game_url: "https://www.freetogame.com/open/trove",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Trion Worlds",
      developer: "Trion Worlds",
      release_date: "2015-07-09",
      freetogame_profile_url: "https://www.freetogame.com/trove",
    },
    {
      id: 9,
      title: "World of Warships",
      thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
      short_description:
        "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
      game_url: "https://www.freetogame.com/open/world-of-warships",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Wargaming",
      developer: "Wargaming",
      release_date: "2015-07-02",
      freetogame_profile_url: "https://www.freetogame.com/world-of-warships",
    },
    {
      id: 10,
      title: "ArcheAge",
      thumbnail: "https://www.freetogame.com/g/10/thumbnail.jpg",
      short_description:
        "A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.",
      game_url: "https://www.freetogame.com/open/archeage",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Kakao Games",
      developer: "XL Games",
      release_date: "2014-09-04",
      freetogame_profile_url: "https://www.freetogame.com/archeage",
    },
    {
      id: 11,
      title: "Neverwinter",
      thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
      short_description:
        "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
      game_url: "https://www.freetogame.com/open/neverwinter",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Perfect World Entertainment",
      developer: "Cryptic Studios",
      release_date: "2013-12-06",
      freetogame_profile_url: "https://www.freetogame.com/neverwinter",
    },
    {
      id: 12,
      title: "War Thunder",
      thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
      short_description:
        "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
      game_url: "https://www.freetogame.com/open/war-thunder",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Entertainment",
      developer: "Gaijin Entertainment",
      release_date: "2013-08-15",
      freetogame_profile_url: "https://www.freetogame.com/war-thunder",
    },
    {
      id: 13,
      title: "Guild Wars 2",
      thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
      game_url: "https://www.freetogame.com/open/guild-wars-2",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "NCsoft",
      developer: "ArenaNet",
      release_date: "2012-08-28",
      freetogame_profile_url: "https://www.freetogame.com/guild-wars-2",
    },
    {
      id: 14,
      title: "Star Trek Online",
      thumbnail: "https://www.freetogame.com/g/14/thumbnail.jpg",
      short_description:
        "A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.",
      game_url: "https://www.freetogame.com/open/star-trek-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Perfect World Entertainment",
      developer: " Cryptic Studios",
      release_date: "2010-02-02",
      freetogame_profile_url: "https://www.freetogame.com/star-trek-online",
    },
    {
      id: 15,
      title: "Crossfire",
      thumbnail: "https://www.freetogame.com/g/15/thumbnail.jpg",
      short_description:
        "A first person tactical shooter with a huge selection of game modes!",
      game_url: "https://www.freetogame.com/open/crossfire",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Neowiz Games",
      developer: "SmileGate",
      release_date: "2007-05-03",
      freetogame_profile_url: "https://www.freetogame.com/crossfire",
    },
    {
      id: 16,
      title: "Roblox",
      thumbnail: "https://www.freetogame.com/g/16/thumbnail.jpg",
      short_description:
        "A free to play sandbox MMO with lots of creation options.",
      game_url: "https://www.freetogame.com/open/roblox",
      genre: "MMO",
      platform: "PC (Windows)",
      publisher: "Roblox Corporation",
      developer: "Roblox Corporation",
      release_date: "2006-12-22",
      freetogame_profile_url: "https://www.freetogame.com/roblox",
    },
    {
      id: 17,
      title: "Entropia Universe",
      thumbnail: "https://www.freetogame.com/g/17/thumbnail.jpg",
      short_description:
        "A 3D MMO Multi Virtual World Real Cash Economy Experience with RPG elements. ",
      game_url: "https://www.freetogame.com/open/entropia-universe",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "MindArk",
      developer: "MindArk",
      release_date: "2003-01-30",
      freetogame_profile_url: "https://www.freetogame.com/entropia-universe",
    },
    {
      id: 18,
      title: "Second Life",
      thumbnail: "https://www.freetogame.com/g/18/thumbnail.jpg",
      short_description:
        "A free to play 3D online virtual world with a huge reputation! ",
      game_url: "https://www.freetogame.com/open/second-life",
      genre: "Social",
      platform: "PC (Windows)",
      publisher: "Linden Lab",
      developer: "Linden Lab",
      release_date: "2003-06-23",
      freetogame_profile_url: "https://www.freetogame.com/second-life",
    },
    {
      id: 19,
      title: "Minion Masters",
      thumbnail: "https://www.freetogame.com/g/19/thumbnail.jpg",
      short_description:
        "A free-to-play strategic minion brawler from Danish developer Betadwarf. ",
      game_url: "https://www.freetogame.com/open/minion-masters",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Betadwarf",
      developer: "Betadwarf",
      release_date: "2019-05-24",
      freetogame_profile_url: "https://www.freetogame.com/minion-masters",
    },
    {
      id: 20,
      title: "Splitgate: Arena Warfare",
      thumbnail: "https://www.freetogame.com/g/20/thumbnail.jpg",
      short_description:
        "A free-to-play multiplayer shooter developed and published by 1047 games. ",
      game_url: "https://www.freetogame.com/open/splitgate-arena-warfare",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "1047 Games",
      developer: "1047 Games",
      release_date: "2019-05-22",
      freetogame_profile_url:
        "https://www.freetogame.com/splitgate-arena-warfare",
    },
    {
      id: 21,
      title: "Destiny 2",
      thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
      short_description:
        "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
      game_url: "https://www.freetogame.com/open/destiny-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Bungie",
      developer: "Bungie",
      release_date: "2019-10-01",
      freetogame_profile_url: "https://www.freetogame.com/destiny-2",
    },
    {
      id: 22,
      title: "Wild Terra Online",
      thumbnail: "https://www.freetogame.com/g/22/thumbnail.jpg",
      short_description:
        "A medieval sandbox MMO designed with core players in mind. ",
      game_url: "https://www.freetogame.com/open/wild-terra-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Juvty Worlds Ltd.",
      developer: "Juvty Worlds Ltd.",
      release_date: "2017-12-18",
      freetogame_profile_url: "https://www.freetogame.com/wild-terra-online",
    },
    {
      id: 23,
      title: "Apex Legends",
      thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
      short_description:
        "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
      game_url: "https://www.freetogame.com/open/apex-legends",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Electronic Arts",
      developer: "Electronic Arts",
      release_date: "2019-02-04",
      freetogame_profile_url: "https://www.freetogame.com/apex-legends",
    },
    {
      id: 24,
      title: "Counter-Strike: Global Offensive",
      thumbnail: "https://www.freetogame.com/g/24/thumbnail.jpg",
      short_description: "The popular multiplayer shooter from Valve. ",
      game_url:
        "https://www.freetogame.com/open/counter-strike-global-offensive",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Valve",
      developer: "Valve, Hidden Path Entertainment",
      release_date: "2012-08-21",
      freetogame_profile_url:
        "https://www.freetogame.com/counter-strike-global-offensive",
    },
    {
      id: 25,
      title: "Bless Online",
      thumbnail: "https://www.freetogame.com/g/25/thumbnail.jpg",
      short_description:
        "A free-to-play fantasy MMORPG featuring field battles, monster taming, and large 100v100 realm vs realm battles. ",
      game_url: "https://www.freetogame.com/open/bless-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Neowiz",
      developer: "Neowiz Bless Studio",
      release_date: "2018-05-30",
      freetogame_profile_url: "https://www.freetogame.com/bless-online",
    },
    {
      id: 26,
      title: "MapleStory 2",
      thumbnail: "https://www.freetogame.com/g/26/thumbnail.jpg",
      short_description: "Sequel to Nexon's successful MMORPG, Maplestory! ",
      game_url: "https://www.freetogame.com/open/maplestory-2",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Nexon",
      developer: "Wizet",
      release_date: "2018-10-10",
      freetogame_profile_url: "https://www.freetogame.com/maplestory-2",
    },
    {
      id: 28,
      title: "Spacelords",
      thumbnail: "https://www.freetogame.com/g/28/thumbnail.jpg",
      short_description: "A free-to-play 4v1 sci-fi shooter. ",
      game_url: "https://www.freetogame.com/open/spacelords",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: " MercurySteam Entertainment",
      developer: "MercurySteam",
      release_date: "2018-09-22",
      freetogame_profile_url: "https://www.freetogame.com/spacelords",
    },
    {
      id: 29,
      title: "Ring of Elysium",
      thumbnail: "https://www.freetogame.com/g/29/thumbnail.jpg",
      short_description:
        "A free-to-play battle royale developed and published by Tencent Games. ",
      game_url: "https://www.freetogame.com/open/ring-of-elysium",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Tencent Games",
      developer: "Tencent Games",
      release_date: "2018-09-19",
      freetogame_profile_url: "https://www.freetogame.com/ring-of-elysium",
    },
    {
      id: 30,
      title: "Quake Champions",
      thumbnail: "https://www.freetogame.com/g/30/thumbnail.jpg",
      short_description:
        "Quake Champions is a callback to the early days of the Quake IP, featuring the fast-paced action that made the IP popular over two decades ago. ",
      game_url: "https://www.freetogame.com/open/quake-champions",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Bethesda Softworks",
      developer: "id Software",
      release_date: "2017-08-22",
      freetogame_profile_url: "https://www.freetogame.com/quake-champions",
    },
    {
      id: 31,
      title: "Cosmos Invictus",
      thumbnail: "https://www.freetogame.com/g/31/thumbnail.jpg",
      short_description:
        "A strategic collectible card game developed and published by Pegnio Ltd. ",
      game_url: "https://www.freetogame.com/open/cosmos-invictus",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Pegnio Ltd",
      developer: "Pegnio Ltd",
      release_date: "2018-06-27",
      freetogame_profile_url: "https://www.freetogame.com/cosmos-invictus",
    },
    {
      id: 32,
      title: "Champions Of Titan",
      thumbnail: "https://www.freetogame.com/g/32/thumbnail.jpg",
      short_description: "A free-to-play sci-fi MMORPG from IDC/Games. ",
      game_url: "https://www.freetogame.com/open/champions-of-titan",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "IDC/Games",
      developer: "Insel Games",
      release_date: "2017-12-14",
      freetogame_profile_url: "https://www.freetogame.com/champions-of-titan",
    },
    {
      id: 33,
      title: "Caller\u2019s Bane",
      thumbnail: "https://www.freetogame.com/g/33/thumbnail.jpg",
      short_description:
        "The free-to-play reboot of Mojang's card/board game Scrolls. ",
      game_url: "https://www.freetogame.com/open/callers-bane",
      genre: "Card Game",
      platform: "PC (Windows)",
      publisher: "Mojang AB",
      developer: "Mojang AB",
      release_date: "2018-06-21",
      freetogame_profile_url: "https://www.freetogame.com/callers-bane",
    },
    {
      id: 35,
      title: "Defiance 2050",
      thumbnail: "https://www.freetogame.com/g/35/thumbnail.jpg",
      short_description:
        "A re-imagining of Trion Worlds' sci-fi shooter Defiance. \r\n",
      game_url: "https://www.freetogame.com/open/defiance-2050",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Trion Worlds ",
      developer: "Trion Worlds ",
      release_date: "2018-06-12",
      freetogame_profile_url: "https://www.freetogame.com/defiance-2050",
    },
    {
      id: 36,
      title: "Realm Royale",
      thumbnail: "https://www.freetogame.com/g/36/thumbnail.jpg",
      short_description:
        "A free-to-play fantasy-themed battle royale game based on Hi-Rez Studio's team shooter Paladins. ",
      game_url: "https://www.freetogame.com/open/realm-royale",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Hi-Rez Studios",
      developer: "Hi-Rez Studios",
      release_date: "2018-06-05",
      freetogame_profile_url: "https://www.freetogame.com/realm-royale",
    },
    {
      id: 37,
      title: "Crusaders Of Light",
      thumbnail: "https://www.freetogame.com/g/37/thumbnail.jpg",
      short_description:
        "A cross-platform MMORPG available on PC and mobile devices. ",
      game_url: "https://www.freetogame.com/open/crusaders-of-light",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Hong Kong Netease Interactive Entertainment Limited",
      developer: "Hong Kong Netease Interactive Entertainment Limited",
      release_date: "2017-04-20",
      freetogame_profile_url: "https://www.freetogame.com/crusaders-of-light",
    },
    {
      id: 39,
      title: "Darwin Project",
      thumbnail: "https://www.freetogame.com/g/39/thumbnail.jpg",
      short_description:
        "A free-to-play 10-player battle royale game set just prior to an impeding ice age.",
      game_url: "https://www.freetogame.com/open/darwin-project",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Scavengers Studio",
      developer: "Scavengers Studio",
      release_date: "2020-01-14",
      freetogame_profile_url: "https://www.freetogame.com/darwin-project",
    },
    {
      id: 42,
      title: "Spellsworn",
      thumbnail: "https://www.freetogame.com/g/42/thumbnail.jpg",
      short_description:
        "A free-to-play arena battle game developed and published by Frogsong Studios AB. ",
      game_url: "https://www.freetogame.com/open/spellsworn",
      genre: "MOBA",
      platform: "PC (Windows)",
      publisher: "Frogsong Studios AB",
      developer: "Frogsong Studios AB",
      release_date: "2018-03-13",
      freetogame_profile_url: "https://www.freetogame.com/spellsworn",
    },
    {
      id: 43,
      title: "Z1 Battle Royale",
      thumbnail: "https://www.freetogame.com/g/43/thumbnail.jpg",
      short_description:
        "A highly competitive free-to-play battle royale shooter.",
      game_url: "https://www.freetogame.com/open/z1-battle-royale",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Daybreak Game Company",
      developer: "Daybreak Game Company",
      release_date: "2018-02-28",
      freetogame_profile_url: "https://www.freetogame.com/z1-battle-royale",
    },
    {
      id: 44,
      title: "Tale Of Toast",
      thumbnail: "https://www.freetogame.com/g/44/thumbnail.jpg",
      short_description:
        "A free-to-play open world MMO inspired by classic, core MMOs. ",
      game_url: "https://www.freetogame.com/open/tale-of-toast",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Toasty Leaf AB",
      developer: "Toasty Leaf AB",
      release_date: "2018-02-23",
      freetogame_profile_url: "https://www.freetogame.com/tale-of-toast",
    },
    {
      id: 45,
      title: "SoulWorker",
      thumbnail: "https://www.freetogame.com/g/45/thumbnail.jpg",
      short_description:
        "A free to play anime action MMO based on the popular anime of the same title. ",
      game_url: "https://www.freetogame.com/open/soulworker",
      genre: "Fighting",
      platform: "PC (Windows)",
      publisher: "Gameforge",
      developer: "Lion Games",
      release_date: "2018-02-27",
      freetogame_profile_url: "https://www.freetogame.com/soulworker",
    },
    {
      id: 47,
      title: "Bombtag",
      thumbnail: "https://www.freetogame.com/g/47/thumbnail.jpg",
      short_description: "A free-to-play multiplayer Bomberman-inspired game.",
      game_url: "https://www.freetogame.com/open/bombtag",
      genre: "Strategy",
      platform: "PC (Windows)",
      publisher: "David Schneider",
      developer: "David Schneider",
      release_date: "2018-02-12",
      freetogame_profile_url: "https://www.freetogame.com/bombtag",
    },
    {
      id: 48,
      title: "Ironsight",
      thumbnail: "https://www.freetogame.com/g/48/thumbnail.jpg",
      short_description:
        "A free-to-play futuristic shooter published by Aeria Games. ",
      game_url: "https://www.freetogame.com/open/ironsight",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Aeria Games",
      developer: "Wiple Games",
      release_date: "2018-02-01",
      freetogame_profile_url: "https://www.freetogame.com/ironsight",
    },
    {
      id: 49,
      title: "Dead Maze",
      thumbnail: "https://www.freetogame.com/g/49/thumbnail.jpg",
      short_description: "A free-to-play 2D isometric MMO full of zombies. ",
      game_url: "https://www.freetogame.com/open/dead-maze",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "801",
      developer: "801",
      release_date: "2018-02-13",
      freetogame_profile_url: "https://www.freetogame.com/dead-maze",
    },
    {
      id: 51,
      title: "Global Adventures",
      thumbnail: "https://www.freetogame.com/g/51/thumbnail.jpg",
      short_description:
        "A free-to-play MMORPG developed by PixelSoft and Published by SubaGames. ",
      game_url: "https://www.freetogame.com/open/global-adventures",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "SubaGames",
      developer: "PixelSoft",
      release_date: "2017-12-29",
      freetogame_profile_url: "https://www.freetogame.com/global-adventures",
    },
    {
      id: 52,
      title: "Closers",
      thumbnail: "https://www.freetogame.com/g/52/thumbnail.jpg",
      short_description:
        "A free-to-play episodic anime beat-em-up developed \r\nby Naddic Games and published by \r\nEn Masse Entertainment. ",
      game_url: "https://www.freetogame.com/open/closers",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "En Masse Entertainment",
      developer: "Naddic Games",
      release_date: "2017-12-19",
      freetogame_profile_url: "https://www.freetogame.com/closers",
    },
    {
      id: 55,
      title: "Deceit",
      thumbnail: "https://www.freetogame.com/g/55/thumbnail.jpg",
      short_description:
        "A free-to-play multiplayer first-person shooter set \r\nin an asylum! ",
      game_url: "https://www.freetogame.com/open/deceit",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Automaton",
      developer: "Automaton",
      release_date: "2017-05-03",
      freetogame_profile_url: "https://www.freetogame.com/deceit",
    },
    {
      id: 56,
      title: "Grimoire: Manastorm",
      thumbnail: "https://www.freetogame.com/g/56/thumbnail.jpg",
      short_description: "A free-to-play multiplayer FPS... with wizards. ",
      game_url: "https://www.freetogame.com/open/grimoire-manastorm",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Omniconnection",
      developer: "Omniconnection",
      release_date: "2015-02-04",
      freetogame_profile_url: "https://www.freetogame.com/grimoire-manastorm",
    },
    {
      id: 57,
      title: "Fortnite",
      thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
      short_description:
        "A free-to-play, standalone mode of Epic Game's Fortnite. ",
      game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Epic Games",
      developer: "Epic Games",
      release_date: "2017-09-26",
      freetogame_profile_url:
        "https://www.freetogame.com/fortnite-battle-royale",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      Dummy: this.Dummy,
      erorr: null,
      loading: false,
      GamesItem: [],
    };
  }
  // componentDidMount() {}
  handleShooter = async () => {
    console.log("Clicked shooter");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12bdad0117msh6a455b2a42318b6p179ef2jsn52763d71304d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`;
    let data = await fetch(url, options);
    let parsedData = await data.json();
    console.log(parsedData);

    if (parsedData.status != 0) {
      this.setState((this.state.Dummy = parsedData));
    }
  };

  Platform = async () => {
    console.log("Clicked shooter");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12bdad0117msh6a455b2a42318b6p179ef2jsn52763d71304d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`;
    let data = await fetch(url, options);
    let parsedData = await data.json();
    console.log(parsedData);

    if (parsedData.status != 0) {
      this.setState((this.state.Dummy = parsedData));
    }
  };

  SortGames = async () => {
    console.log("Clicked shooter");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12bdad0117msh6a455b2a42318b6p179ef2jsn52763d71304d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`;
    let data = await fetch(url, options);
    let parsedData = await data.json();
    console.log(parsedData);

    if (parsedData.status != 0) {
      this.setState((this.state.Dummy = parsedData));
    }
  };

  componentDidMount() {
    document.body.style.backgroundColor = "black";
  }
  
  render() {
    return (
      <div className="">
        <NavbarGame></NavbarGame>
        
        <div class="d-flex justify-content-around">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 " onClick={this.SortGames}
              >
                SortGames
              </button>
            </div>
            <div class="p-2 bd-highlight">
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 " onClick={this.handleShooter}
              >
                Shooter
              </button>
            </div>
            <div class="p-2 bd-highlight">
              <button
                type="button"
                class="btn btn-light text-white glow-on-hover mx-3 " onClick={this.Platform}
              >
                Windows/PC
              </button>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="container">
            <h1 className="text-white">Popular_Games</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.Dummy.map((ele) => {
              return (
                <div className="col-md-2 my-3" key={ele.id}>
                  <div class="box">
                    <div class="imgBox">
                      
                      <a href={ele.game_url}><img src={ele.thumbnail} alt={ele.title} /></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Divider></Divider>
      </div>
    );
  }
}

export default Games;
