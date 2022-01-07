import './sahifa.scss'

import Instagram from '../../Assets/imgs/instagram.svg'
import Telgram from '../../Assets/imgs/telgram.svg'
import Tiktok from '../../Assets/imgs/tiktok.svg'
function Sahifa() {
  return(
   <>
    	<section className="internet">
				<div className="container">
					<p className="internet-text">Bizni ijtimoiy tarmoqlarda <br />
						<strong className="internet-strong">kuzatib boring</strong> </p>
						<ul className="internet-itme" >
							<li className="internet-list">
								<img className="internet-list-img" src= {Instagram} alt="instagram" width={48.49} height={49.21}/>
								<a className="internet-list-link" href="https://www.instagram.com/osmondagibolalarr/"> <strong className="internet-list-link-strong">Instagram</strong><br/>@osmondagi_bolalarr</a>
							</li>
							<li className="internet-list" >
								<img className="internet-list-img" src= {Telgram} alt="telgram" width={48.49} height={49.21} />
								<a className="internet-list-link" href="https://t.me/osmondagibolalarr"><strong className="internet-list-link-strong">Telegram</strong><br/>@osmondagi_bolalar_rasmiy  </a>
							</li>
							
							<li className="internet-list">
								<img className="internet-list-img" src= {Tiktok} alt="tiktok" width={48.49} height={49.21} />
								<a className="internet-list-link" href="https://www.tiktok.com/@osmondagibolalarr?"><strong className="internet-list-link-strong">Tiktok</strong><br/>@osmondagibolalarr</a>
							</li>
						</ul>
					</div>
				</section>
   </>
  )
}
export default Sahifa