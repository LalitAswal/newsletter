import React from 'react'
import './Styles/News.css';
import Image1 from '../Images/Games/Deathloop.jpeg'
import Image2 from '../Images/Games/FarCry6.jpeg'
import Image3 from '../Images/Games/GranTurismo7.jpeg'
import Image4 from '../Images/Games/ResidentEvil.jpeg'

function news(){
    return(
        <div id='news'> 
            <div>
                <h3 className='newsHeading'>TO THE WORLD OF GAMES</h3>
                <div className='news-intro'>
                    <p className='first-line'>It is good to be at home to be safe but it can turn out to be boring as well but it turns out for the gamers of babel we have a list of new games coming up this month.</p>
                    <p className='second-line'>Be ready with your snacks, drinks, consoles and screens to play these games at your home no need to step outside in this pandemic just chill at your place so let’s catch up on your coming entertainment</p>
                </div>                
            </div>
            <div className='News'>
                <div className='news'>
                    <h5 className='news-head'>Deathloop</h5>
                    <img className='news-img' alt='star wars' src={Image1} />
                    <p className='news-des'>
                    Deathloop has the player in the role of Colt, an assassin who is stuck in a time loop, waking up on a beach at the island of Blackreef. The other residents of Blackreef, a former army base where strange experiments had once been held, have invested in the island and have gathered for this night to hold a party that seemingly lasts forever, as at the end of each night, the island resets to the start of the party in that time loop. Because of this reset, the partygoers pay no heed to their actions or deeds since they wake up at the start of the loop with no memories or effects of the previous loop. While Colt is part of this loop, he retains memories from each loop, learning the behaviors and patterns of the partygoers with each loop.
                     </p>
                     <p>
                     Platforms: Microsoft Windows, PlayStation 5
                     </p>
                     <p>
                     Release date: 14 September 2021
                     </p>
                     <p>
                     Mode(s): Single-player, multiplayer
                     </p>
                </div>
                <div className='news'>
                    <h5 className='news-head'>Far Cry 6</h5>
                    <img className='news-img' alt='Judgment' src={Image2} />
                    <p className='news-des'>
                    Far Cry 6 is an action-adventure first-person shooter game. Gameplay follows from previous Far Cry games, with players using makeshift weapons, vehicles, and hiring Amigos, the new "Fangs for Hire" system, to topple the tyrannical regime
                    </p>
                    <p>
                    Platforms: PlayStation 4, Amazon Luna, PlayStation 5, Xbox One, Xbox Series X and Series S, Google Stadia, Microsoft Windows
                    </p>
                    <p>
                    Release date: 7 October 2021
                    </p>
                    <p>
                    Mode(s): Single-player, multiplayer
                    </p>
                </div> 
                <div className='news'>
                    <h5 className='news-head'>Gran Turismo 7</h5>
                    <img className='news-img' alt='star wars' src={Image3} />
                    <p className='news-des'>
                    During the gameplay trailer, the game's main menu was revealed to be similar to that of the menu style of Gran Turismo 4. This game brings the return of the GT Simulation Mode, encompassing the long-established and definitive single player campaign feature. Other classic features were shown such as the return of traditional racing tracks and vehicles, Special Events, Championships, Driving School, Tuning Parts Shop, Used Cars dealership, GT Auto while still retaining the new GT Sport Mode, Brand Central and Discover that were introduced in Gran Turismo Sport.

                     </p>
                     <p>
                     Platform: PlayStation 5
                     </p>
                     <p>
                     Initial release date: 2022
                     </p>
                     <p>
                     Mode(s): Single-player, multiplayer
                     </p>
                </div>
                <div className='news'>
                    <h5 className='news-head'>Resident Evil: Village</h5>
                    <img className='news-img' alt='star wars' src={Image4} />
                    <p className='news-des'>
                    Resident Evil Village is a survival horror game developed and published by Capcom. The sequel to Resident Evil 7: Biohazard, players control Ethan Winters, who is searching for his kidnapped daughter; after a fateful encounter with Chris Redfield, he finds himself in a village filled with mutant creatures.
                     </p>
                     <p>
                     Platforms: PlayStation 4, Xbox One, Google Stadia, PlayStation 5, Xbox Series X and Series S, Microsoft Windows
                     </p>
                     <p>
                     Developer: Capcom
                     </p>
                     <p>
                     Release : 1st week of May
                     </p>
                </div>             
            </div>
        </div>
    )
}

export default news;