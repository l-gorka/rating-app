import { motion, easeInOut, easeOut, MotionProps } from 'framer-motion';

import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';

const DURATION = 0.5

type AnimationType = 'left' | 'right' | 'coverRight'

type Animations = {
  [key in AnimationType]: MotionProps
}

const ANIMATIONS: Animations = {
  right: {
    initial:{ x: '100%', opacity: 1 },
    animate:{ x: 0, opacity: 1, transition: { duration: DURATION, ease: easeInOut } },
    exit:{ x: '-100%', opacity: 1, transition: { duration: DURATION, ease: easeInOut } }
  },
  left: {
    initial:{ x: '-100%', opacity: 1 },
    animate:{ x: 0, opacity: 1, transition: { duration: DURATION, ease: easeInOut } },
    exit:{ x: '100%', opacity: 1, transition: { duration: DURATION, ease: easeInOut } }
  },
  coverRight: {
    initial:{ x: '100%', opacity: 1 },
    animate:{ x: 0, opacity: 1, transition: { duration: DURATION, ease: easeOut } },
    exit:{ x: 1, opacity: 1, transition: { duration: DURATION, ease: easeInOut } }
  },
}

const RouteTransition = ({ children, transitionKey }: { children: React.ReactNode; transitionKey: string }) => {
  const animation = useSelector((state: IRootState) => state.routeAnimation);

  return (
    <motion.div
    layout
    key={transitionKey}
    {...ANIMATIONS[animation as AnimationType]}
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  >
      <div className="h-full  overflow-y-auto w-full pb-20 bg-black">
        <main>{children}</main>
      </div>
    </motion.div>
  );
};

export default RouteTransition;
