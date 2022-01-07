
import './footer.scss'


import imgLogo from '../../Assets/imgs/logo.png'
function Footer() {
  return(
   <>
   	<footer className="footer">
				<div className="container">
					<div className="footer-bag">
						<img className="footer-bag-img" src= {imgLogo} alt="logo" width={85} height={52}/>
						<p className="footer-text">“Osmondagi bolalar” 2021. Barcha huquqlar himoyalangan</p>
					</div>
				</div>
			</footer>
   
   </>
  )
}

export default Footer