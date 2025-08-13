import React, { useEffect, useState } from 'react';

const SakuraAnimation = () => {
  const [sakuras, setSakuras] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createSakuras = () => {
      const newSakuras = [];
      for (let i = 0; i < 15; i++) {
        newSakuras.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
        });
      }
      setSakuras(newSakuras);
    };

    createSakuras();
  }, []);

  return (
    <div className="sakura-container">
      {sakuras.map((sakura) => (
        <div
          key={sakura.id}
          className="sakura"
          style={{
            left: `${sakura.left}%`,
            animationDelay: `${sakura.delay}s`,
            animationDuration: `${sakura.duration}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default SakuraAnimation;
