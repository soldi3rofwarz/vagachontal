import React from 'react';
import useFirestore from './useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

    console.log('docsGrid', docs)
  return (
    <>
    <div style={{height:'50px'}}></div>
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url, doc.descripcion)}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{ delay: 1 }}
          />
          <motion.h1
            style={{zIndex:1000, position:'relative',marginTop:'36%', color: 'white', background:'rgba(0,0,0,0.7)'}}
          >
            {doc.descripcion 
            
            }

          </motion.h1>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default ImageGrid;