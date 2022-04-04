import '../address/findus.css'

const FindUs = () => {
  return (
    <div className='find-us'>
      <h2>Find Us</h2>
      <table className='find-us-table'>
        <tr>
          <td>Call Us</td>
          <td>
            <a
              href='tel:+1 612-499-0719
'
            >
              612-499-0719
            </a>
          </td>
        </tr>
        <tr>
          <td>Email Us</td>
          <td>
            <a href='mailto:abayshairbraiding@gmail.com'>abayshairbraiding@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>1931 S 5th St, Minneapolis, MN 55454</td>
        </tr>
      </table>
    </div>
  )
}

export default FindUs
