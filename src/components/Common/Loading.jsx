import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SuperLoader({ show, message = "Confirming your order..." }) {
  if (!show) return null;

  return (
    <div className="fixed  w-full inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-1/2 md:w-1/4 p-4   rounded-2xl shadow-2xl flex flex-col items-center gap-4"
      >
        {/* Loader animation */}
        <motion.div
          className= " w-12 h-12  md:w-20 md:h-20 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Confirmation text */}
        <p className="text-xs  text-center  md:text-lg font-semibold text-gray-700">{message}</p>
      </motion.div>
    </div>
  );
}
