import React from "react";
import './index.css'
import img01 from '../../../public/img/img01.jpeg'
import img02 from '../../../public/img/img02.jpeg'
import img03 from '../../../public/img/img03.webp'
import img04 from '../../../public/img/img04.jpeg'

/**
 * 实现效果
 * 1. 从左至右，自上往下顺序排列
 * 2. 从左顺序向下，再从右顺序向下
 * 3. 使得页面瀑布两栏尽可能高度协调
 *  
 * 注意点：
 * 1. 图片高度处理
 *    - 按图片高度等比缩放。
 *    - 给定两种不同高度的盒模型。
 */
const IMG = [
  img01,
  img02,
  img03,
  img04,
  img03,
  img01,
  img02,
  img03,
  img02,
  img01,
  img02,
  img03,
];

function MasonryLayouts() {

  return (
    <>
      <Demo1 />
    </>
  )
}

export default MasonryLayouts;

/**
 * 1. 使用flex布局
 * 
 */
function Demo1() {
  const leftData = [];
  const rightData = [];
  const imgHeight = [];
  const img = new Image();
//   [
//     667,
//     399,
//     642,
//     150,
//     642,
//     667,
//     399,
//     642,
//     399,
//     667,
//     399,
//     642
//    ]
  IMG.map(item => {
    img.src = item;
    imgHeight.push(img.height)

    return imgHeight;
  })

  console.log('img', img);
  console.log('imgHeight', imgHeight);
  function computeData() {

    
    IMG.map((item, index) => {
      if ((index + 1) % 2 !== 0) {
        leftData.push(item)      
      } else {
        rightData.push(item)
      }

      return { leftData, rightData }
    })
    
    // for ( let i = 0; i < IMG.length / 2; i+2) {
    //   let currentMax = Math.max(imgHeight[i], imgHeight[i+1]) === imgHeight[i] ? 'left' : 'right';

    //   if (currentMax === 'left') {
    //     leftData.push(IMG[i]);
    //   } else {
    //     rightData.push(IMG[i + 1]);
    //   }
    // }

    // return {
    //   leftData,
    //   rightData
    // }
  }

  computeData()

  return (
    <div className="demo1">
      <>
        <div className="left">
          {
            leftData.map(item => {
              return (
                <div className="item">
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </div>

        <div className="right">
          {
            rightData.map(item => {
              return (
                <div className="item">
                  <img src={item} alt="" />
                </div>
              )
            })
          }          
        </div>
      </>
    </div>
  )
}
