import React, { useEffect, useState } from "react";
import analyze from 'rgbaster';
import img01 from '../../../public/img/img01.jpeg'
/**
 * 实现效果：
 *    1. 能够左右滑动卡片
 *    2. 当前的背景颜色为卡片的主题色
 * 
 */
function GoodSlideCard() {
  const [bgTheme, setBgTheme] = useState({ one: '', two: ''});

  useEffect(() => {
    getImageColor();
  })

  async function getImageColor() {
    const result = await analyze(img01);
    console.log('result', result);
    console.log('bg theme color', result[0].color, 'bg color count', result[0].count);
    setBgTheme({
      one: result[0].color,
      two: result[1].color,
    });
  }

  return (
    <div style={{
      backgroundColor: bgTheme,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '800px',
      background: `radial-gradient(ellipse at top, ${bgTheme.one}, transparent),radial-gradient(ellipse at bottom, ${bgTheme.two}, transparent)`
    }}>
      <div style={{ width: '400px', height: '400px'}}>
        <img src={img01} alt="" />
      </div>
    </div>
  )
}

export default GoodSlideCard;