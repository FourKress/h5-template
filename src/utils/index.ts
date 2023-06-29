export function typeCheck(param: any) {
  return Object.prototype.toString.call(param);
}

/**
 * 批量修改stage
 */
export function mutateState(state: Record<string, any>, payload: Record<string, any>) {
  if (typeCheck(state) === '[object Object]' && typeCheck(payload) === '[object Object]') {
    for (const key in payload) {
      state[key] = payload[key];
    }
  } else {
    console.error('expected plain Object');
  }
}

export const judgeClient = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //判断是否是 android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是否是 iOS终端
  if (isAndroid) {
    return 'Android';
  } else if (isIOS) {
    return 'iOS';
  } else {
    return 'Wap';
  }
};

export function getUrlParams2(url) {
	const urlStr = url.split('?')[1]
	const urlSearchParams = new URLSearchParams(urlStr)
	const result = Object.fromEntries(urlSearchParams.entries())
	return result
}