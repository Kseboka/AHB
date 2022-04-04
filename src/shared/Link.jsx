import '../shared/shared.css'
const Link = ({ link, children, type }) => {
  return (
    <a className={type} href={link}>
      {children}
    </a>
  )
}

export default Link
