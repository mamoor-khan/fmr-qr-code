import '../design/CardDesign.css'

const CardDesign = () => {
  const cardTitle = 'Improve your front-end skills by building projects'
  const cardDesc =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'

  return (
    <div className='card card-layout'>
      <div className='card-img-container'>
        <img src='assets/img/image-qr-code.png' alt='' />
      </div>
      <div className='card-description'>
        <h4>{cardTitle}</h4>
        <p>{cardDesc}</p>
      </div>
    </div>
  )
}

export default CardDesign
