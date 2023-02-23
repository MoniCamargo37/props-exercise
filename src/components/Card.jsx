const Card = (props) => {
const  {client, children } = props;

    return (
      <div className={`card ${client.isPremium ? 'premium' : ''}`}>
        <div className="greeting">
          {(() => {
            switch (client.country) {
              case 'de':
                return <h2>Hallo</h2>;
              case 'en':
                return <h2>Hello</h2>;
              case 'fr':
                return <h2>Bonjour</h2>;
              case 'es':
                return <h2>Hola</h2>;
              default:
                return null;
            }
          })()}
        </div>
        <h3>{children}</h3>
        <p>Age: {client.age}</p>
        <p>Is it a Premium client: {client.isPremium ? 'yes' : 'no'}</p>
      </div>
    );
  };

export default Card;

