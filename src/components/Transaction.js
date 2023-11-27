import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    
  return (
    (<li className= {transaction.amount < 0 ? 'minus' : 'plus'}>
      
        <div class="right">
            {transaction.text} 
        </div>
        <div class="lefttop">
            {sign}R{Math.abs(transaction.amount)}
        </div>
        
        <div class="leftbottom">
        {transaction.formattedDate}
        </div>

    <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
    </li>
    
     )
    )
}