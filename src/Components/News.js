import React from 'react'
import './Styles/News.css';
import Image1 from '../Images/Star wars.jpg'
import Image2 from '../Images/Judgment.jpg'
import Image3 from '../Images/Returnal.jpg'
import Image4 from '../Images/PokemonSnap.jpg'

function news(){
    return(
        <div> 
            <div>
                <h3 className='newsHeading'>TO THE WORLD OF GAMES</h3>
                <div className='news-intro'>
                    <p className='first-line'>It is good to be at home to be safe but it can turn out to be boring as well but it turns out for the gamers of babel we have a list of new games coming up this month.</p>
                    <p className='second-line'>Be ready with your snacks, drinks, consoles and screens to play these games at your home no need to step outside in this pandemic just chill at your place so let’s catch up on your coming entertainment</p>
                </div>                
            </div>
            <div className='News'>
                <div className='news'>
                    <h5 className='news-head'>Star Wars Republic Commando (PS4, Switch) – April 6</h5>
                    <img className='news-img' alt='star wars' src={Image1} />
                    <p className='news-des'>
                        Fan-favourite Star Wars game, Republic Commando, is making a coming back to modern consoles. You will play as Delta Squad leader RC-1138, who can command clone troopers to perform tasks like demolitions, door breaches, search and destroy, and more. Although the
                        gameplay will be similar to the classic version, the recreated version’s controls have been optimized for DualShock 4, DualSense, and Joy-Con. The game can also be played on PlayStation 5, thanks to backwards compatibility.
                     </p>
                </div>
                <div className='news'>
                    <h5 className='news-head'>Judgment (PS5, Xbox Series X|S) – April 23</h5>
                    <img className='news-img' alt='Judgment' src={Image2} />
                    <p className='news-des'>
                    Yakuza spinoff, Judgment, is launching on new consoles like PlayStation 5 and Xbox Series X|S with enhanced visuals, faster loading times, and 60 FPS gameplay.
                     The game takes place in the Kamurocho district and follows lawyer-turned-private detective
                     Takayuki Yagami, who is trying to solve a murder mystery. 
                     As expected from Yakuza games, Judgment features action-packed brawler combat and bizarre side quests.
                    </p>
                </div> 
                <div className='news'>
                    <h5 className='news-head'>Returnal (PS5) – April 30</h5>
                    <img className='news-img' alt='star wars' src={Image3} />
                    <p className='news-des'>
                    Returnal is a roguelike shooter that follows Selene on a planet that is constantly changing. 
                    Every time you die in this game, you restart from the beginning with different items and weapons. 
                    The game features ruthless enemies and the story forces you to piece together Selene’s memories to seek out various answers.
                     </p>
                </div>
                <div className='news'>
                    <h5 className='news-head'>New Pokémon Snap (Switch) – April 30</h5>
                    <img className='news-img' alt='star wars' src={Image4} />
                    <p className='news-des'>
                    New Pokémon Snap takes place in the Lental region, where you will explore various Pokémon and vegetation that appear to have a special glow. 
                    Alongside Professor Mirror, you will research these Pokémon to unravel the mystery behind the Illumina phenomenon. 
                    Your pictures will be scored based on Pokémon poses and behaviour that you capture.
                     </p>
                </div>
                
            </div>
        </div>
    )
}

export default news;