import PhoneCard from './PhoneCard';


export default function phoneList (props) {
  const { phones } = props;
  

  return (
    <div>
      <ul>
        {phones.map(phone => (
          <PhoneCard key={phone.id} {...phone} />
        ))}
      </ul>
     
    </div>
  );
}