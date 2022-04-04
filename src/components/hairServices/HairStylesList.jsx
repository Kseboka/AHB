import HairStyleItem from './HairStyleItem'
import HairServiceData from '../../Data/HairServiceData'
import './hair-styles.css'

const HairStylesList = ({ data }) => {
  return (
    <div className='styles-container align-layout align-y'>
      <table>
        <tr className='styles-header'>
          <th>Styles</th>
          <th>Prices</th>
        </tr>
        {HairServiceData.map((style, index) => {
          return <HairStyleItem styleName={style.name} stylePrice={style.price} />
        })}
      </table>
    </div>
  )
}

export default HairStylesList
