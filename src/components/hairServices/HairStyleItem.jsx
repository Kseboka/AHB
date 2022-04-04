import '../hairServices/hair-styles.css'

const HairStyleItem = ({ styleName, stylePrice }) => {
  return (
    <tr className='styles-content'>
      <td>{styleName}</td>
      <td>{stylePrice}</td>
    </tr>
  )
}

export default HairStyleItem
