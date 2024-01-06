import { motion, easeInOut } from 'framer-motion';

const RouteTransition = ({ children, compKey }: { children: React.ReactNode; compKey: string }) => {
  return (
    <motion.div
      layout
      key={compKey}
      initial={{ x: '100%', opacity: 1 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
      exit={{ x: '-100%', opacity: 0.5, transition: { duration: 0.5, ease: easeInOut } }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <div className="h-full overflow-y-auto w-full pb-8">
        <main>{children}</main>
      </div>
    </motion.div>
  );
};

export default RouteTransition;
