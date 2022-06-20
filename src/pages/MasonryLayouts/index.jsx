import React from "react";
import styles from './index.css'
// import img01 from '../public/img/01.jpeg'
// import img02 from '/img/02.jpeg'
// import img03 from '/img/03.webp'
// import img04 from '/img/04.jpeg'
import {
  img01,
  img02,
  img03,
  img04,
} from '../../../public/img'

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
  
  return (
    <div className={styles.demo1}>
      {
        IMG.map((item, index) => {
          return (
            <>
              <div>
                <img src={IMG[index]} alt="" />
              </div>
              <div>
                <img src={IMG[index + 1]} alt="" />
              </div>
            </>
          )
        })
      }

    </div>
  )
}
