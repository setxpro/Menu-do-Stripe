import React, { useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Context } from './Provider';
import { DropdownSection } from './Section';

const refDuration = .22;

export  function DropdownRoot() {

    const { options, cachedId, getOptionById, targetId } = useContext(Context);

    const cacheOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById])

    let [width, height, x] = [0, 0, 0];

    if (cacheOption) {
        const { optionCenterX, contentDimensions } = cacheOption;

        width = contentDimensions?.width;
        height = contentDimensions?.height;
        x = optionCenterX - width / 2;
    }

    const [hovering, setHovering] = useState(false);

    const isActive = targetId !== null || hovering;

    // First interaction
    const [hasInteracted, setHasInterected] = useState(false);
    const isFirstInteraction = isActive && !hasInteracted;

    if (isFirstInteraction) {
        setTimeout(() => {
            if (!hasInteracted) setHasInterected(true);
        }, 15)
    }

    // Active TimeOut

    useEffect(() => {
        if (isActive) return;

        let timeout = setTimeout(
            () => setHasInterected(false),
            refDuration * 1000 * 0.9,
        );

        return () => clearTimeout(timeout);
    }, [isActive])


  return (
    <div style={{ perspective: 2000 }}>
        <motion.div 
            className='dropdown-root'
            animate={{
                opacity: isActive ? 1 : 0,
                rotateX: isActive ? 0 : -15,
            }}
            transition={{
                opacity: {duration: refDuration, delay: 0.05},
                rotateX: {duration: refDuration, delay: 0.05},
            }}
        >
            <motion.div 
                className='dropdown-container'
                animate={{
                    x,
                    width,
                    height,
                    pointerEvents: isActive ? 'unset' : 'none',
                }}    
                transition={{
                    ease: 'easeInOut',
                    x: isFirstInteraction ? { duration: 0 } : refDuration,
                    width: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
                    height: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
                    pointerEvents: { delay: 0.05 }
                }}
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
            >

                
                <DropdownBackground/> { /* Bugando a Aplicação  */}

                <motion.div
                    animate={{
                        x: -x,
                    }}
                    transition={{
                        x: isFirstInteraction ? { duration: 0 } : undefined,
                    }}
                >
                  {options.map(item => <DropdownSection key={item.id} option={item}/>)}
                </motion.div>
            </motion.div>
        <DropdownArrow isFirstInteraction={isFirstInteraction}/>
      </motion.div>
    </div>
  );
}

function DropdownArrow ({isFirstInteraction}) {
    const { cachedId, getOptionById } = useContext(Context);

    const cacheOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById]);

    const x = cacheOption ? cacheOption.optionCenterX : 0; 
    return (
        <motion.div 
            className='dropdown-arrow'
            initial={{
                opacity: 0,
            }}
            animate={{
                x,
                pointerEvents: 'none',
                opacity: x > 0  ? 1 : 0,
            }}
            transition={{
                ease: 'easeInOut',
                x: {duration: isFirstInteraction ? 0 : refDuration},
            }}
        />
    );
}

export function DropdownBackground() {
    const { cachedId, getOptionById } = useContext(Context);

    const cacheOption = useMemo(() => getOptionById(cachedId), [cachedId, getOptionById])

    const backgroundHeight = cacheOption?.backgroundHeight || 0;
    return (
        <motion.div
            className='dropdown-background'
            animate={{
                height: backgroundHeight, // OBS.: ./nav/index
            }}
            transition={{
                ease: 'easeInOut',
                duration: refDuration
            }}
        />
    );
}

export default DropdownRoot;