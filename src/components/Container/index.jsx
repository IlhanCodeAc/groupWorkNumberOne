import styles from "./style.module.scss"
import PropTypes from "prop-types"



const Container = ({children}) => {
  return (
    <div className={styles.Container}>{children}</div>
  )
}

Container.propTypes ={
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Container