import React, {useState} from 'react';
import Card from './Card';
import CardButtonsUpDown from './CardButtonsUpDown';

const UpOrDownCard = ()=>{
  const [isReturn, setIsReturn] = useState<string>('');
  const [confirm, setConfirm] = useState<boolean>(false);
  const [choise, setChoice] = useState<string>('');

  const handleTurn = (e:any)=>{
    setIsReturn(e.target.value)
  }

  return(
    <Card 
    setConfirm={setConfirm} 
    setChoice={setChoice} 
    isAuth 
    setIsReturn={setIsReturn} 
    isReturn={isReturn} 
    active={true}
  >
    <CardButtonsUpDown 
      choise={choise} 
      confirm={confirm} 
      handleTurn={handleTurn} />
  </Card>
  )
};

export default UpOrDownCard;
