import './about.scss'
import Youtobe from '../../Assets/imgs/photo.png'
function About() {
 return(
  <>
  <section className="about-Us" id="biz-haqimizda">
  <div className="container">
  <div className="about-Us-bag-one">
  <img className="about-Us-bag-one-photo" src= {Youtobe} alt="osmonadagi bolalar" width={621} height={350}/>
  <div className="about-Us-bag-two">
  <h2 className="about-Us-bag-two-heading">BIZ HAQIMIZDA</h2>
  <p className="about-Us-bag-two-onetext"><strong>Osmondagi bolalar</strong>  — hayotning past-balandiga qaramasdan o‘z g‘ayrati bilan yuqori marralarni zabt eta olgan, yoshlar uchun motivatsiya rolini bajarayotgan insonlarni samimiy suhbat orqali o‘zida jam qilgan yangi interaktiv ko‘rsatuv.</p>
  <p className="about-Us-bag-two-twotext">Osmondagi bolalar ko‘rsatuvining aktual missiyasi katta natijalarni qo‘lga kiritgan yoshlarni ommaga tanitish va ularni bu yo‘ldagi xato, qiyinchiliklar, to‘plangan tajribalarini jamiyat bilan bo‘lishishdan iborat</p>            
  <a className="about-Us-bag-two-link" href="#link" target="_blank">  batafsil</a>    
  </div>
  </div>
  </div>
  </section>
  
  </>
  )
 }

 export  default About