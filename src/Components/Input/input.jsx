import './input.scss'
function Input() {
  return(
   <>
    	<section className="input-section">
					<div className="container">
						<p className="input-text">Keyingi ko’rsatuvlarimizda <strong className="input-strong"><br/>ko’rishni xohlaysiz?</strong> </p> 
						<form className="input-form" >
							<input className="input-name" type="text" name="user_text" placeholder="John Doe"/>
							<input className="input-textarea" type="text" name="user_textarea" id="" cols={30} rows={10} placeholder="Nima sababdan shu fikrdasiz"/>
							<button className="input-button" type="submit">yukla</button>
						</form>
					</div>
				</section>
   </>
  )
}
export default Input
