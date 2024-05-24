export const Estate = ({ title, text, city, contact, photo }) => {
  return (
    <>
      <div className ="content">
        <div className ="desc">
          <h2>{title}</h2>
            <p>{text}</p>
            <p>Kde budete bydlet: {city}</p>
          
            <h3>Kontakt</h3>
            <ul>
              <li>
                {contact.name}
              </li>
              <li>
                {contact.email}
              </li>
              <li>
                {contact.phone}
              </li>
            </ul>
        </div>

        <div className ="img">
          <img src={photo} alt="Nemovitost"></img>
        </div>
      </div> 
    </>
  )
}