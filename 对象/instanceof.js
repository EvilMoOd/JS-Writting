// instanceOf
// 检测constructor的prototype是否在obj的原型上
const instanceOf = function (obj, constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};
