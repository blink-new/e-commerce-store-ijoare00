import { motion } from 'framer-motion';

interface ScentPyramidProps {
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export function ScentPyramid({ notes }: ScentPyramidProps) {
  return (
    <div className="py-8">
      <div className="max-w-md mx-auto space-y-8">
        {/* Top Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h4 className="font-cormorant text-lg mb-3">Top Notes</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {notes.top.map((note) => (
              <span
                key={note}
                className="bg-primary/5 px-3 py-1 rounded-full text-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Heart Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h4 className="font-cormorant text-lg mb-3">Heart Notes</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {notes.heart.map((note) => (
              <span
                key={note}
                className="bg-secondary/5 px-3 py-1 rounded-full text-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Base Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h4 className="font-cormorant text-lg mb-3">Base Notes</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {notes.base.map((note) => (
              <span
                key={note}
                className="bg-muted px-3 py-1 rounded-full text-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}