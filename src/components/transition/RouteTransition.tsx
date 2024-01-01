import { motion } from 'framer-motion'

const RouteTransition = ({children, compKey}) => {
  return (
    <motion.div
    layout
    key={compKey}
    initial={{ x: 460, opacity: 0 }}
    animate={{ x: 0, opacity: 1, transition: { duration: 0.3 }}}
    exit={{ x: -460, opacity: 0, transition: { duration: 0.3 }}}
    className='pb-16'
    style={{position: 'absolute', top: 0, left: 0, width: '100%'}}

    >
      {children}
    </motion.div>
  )
} 

export default RouteTransition