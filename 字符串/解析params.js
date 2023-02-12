const getUrlParams = (url) => {
  const res = {};
  url.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2) => {
    res[$1] = decodeURIComponent($2);
  });
  return res;
};

let url = 'https://www.baidu.com?a=1&b=2';
console.log(getUrlParams(url));
