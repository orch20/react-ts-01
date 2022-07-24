import css from './TransactionHistory.module.scss'

export const TransactionHistory = ({ items }) => {
    console.log(items);
    return <table className={css.transactionHistory}>
  <thead>
    <tr >
      <th className={css.headerTab}>Type</th>
      <th className={css.headerTab}>Amount</th>
      <th className={css.headerTab}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {
                items.map(item => 
    <tr className={css.bodyRow} key={item.id}>
      <td className={css.bodyTab}>{item.type}</td>
      <td className={css.bodyTab}>{item.amount}</td>
      <td className={css.bodyTab}>{item.currency}</td>
    </tr>)
            }
    
    
  </tbody>
</table>
}


// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти