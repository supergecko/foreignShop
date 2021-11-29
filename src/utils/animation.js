/**
 * slowAnimation: 缓动动画函数
 * ele: 要移动的元素
 * target: 移动的终点
 * speed: 移动的速度
 * step: 每次移动的距离
 */
export function slowAnimation(ele, target, speed) {
    clearInterval(ele.timer)
    var position = ele.offsetLeft
    ele.timer = setInterval(() => {
        var step = position > target ? Math.floor((target - position) / 10) : Math.ceil((target - position) / 10)
        position += step
        ele.style.left = position + 'px'
        if (position == target) {
            ele.style.left = target + 'px'
            clearInterval(ele.timer)
        }
    }, speed)
}
