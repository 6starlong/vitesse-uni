function warpPromiseOptions<T = any>(
  opts: T,
  resolve: (res: any) => any,
  reject: (err: any) => any,
) {
  let { fail, success, complete } = opts as any

  fail = fail || ((err: any) => err)
  success = success || ((res: any) => res)
  complete = complete || (() => {})

  return {
    ...opts,
    success: (res: any) => resolve(success(res)),
    fail: (err: any) => reject(fail(err)),
    complete,
  }
}

/** 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
function switchTab(options: UniNamespace.SwitchTabOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    uni.switchTab(warpPromiseOptions(options, resolve, reject))
  })
}

/** 保留当前页面，跳转到应用内的某个页面 */
function navigateTo(options: UniNamespace.NavigateToOptions) {
  return new Promise((resolve, reject) => {
    uni.navigateTo(warpPromiseOptions(options, resolve, reject))
  })
}

/** 关闭当前页面，跳转到应用内的某个页面 */
function redirectTo(options: UniNamespace.RedirectToOptions) {
  return new Promise((resolve, reject) => {
    uni.redirectTo(warpPromiseOptions(options, resolve, reject))
  })
}

/** 关闭所有页面，打开到应用内的某个页面 */
function reLaunch(options: UniNamespace.ReLaunchOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    uni.reLaunch(warpPromiseOptions(options, resolve, reject))
  })
}

/** 关闭当前页面，返回上一页面或多级页面 */
function navigateBack(options?: UniNamespace.NavigateBackOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    uni.navigateBack(warpPromiseOptions(options || {}, resolve, reject))
  })
}

/**
 * 路由操作的封装
 * @see https://uniapp.dcloud.net.cn/api/router.html
 */
export function useRouter() {
  /** 获取当前页面栈信息 */
  const pages = getCurrentPages()
  /** 获取当前页信息 */
  const currPage = pages?.[pages.length - 1]
  /** 获取前一页信息 */
  const prevPage = pages.length > 1 ? pages[pages.length - 2] : pages?.[pages.length - 1]

  return {
    /** 获取当前页面栈信息 */
    pages,

    /** 获取当前页信息 */
    currPage,

    /** 获取前一页信息 */
    prevPage,

    /** 切换 tabbar 页面。 */
    switchTab,

    /** 路由跳转 */
    navigateTo,
    push: navigateTo,

    /** 路由重定向 */
    redirectTo,

    /** 重定向，并清空当前页面栈 */
    reLaunch,

    /** 后退 */
    navigateBack,
    back: navigateBack,
  }
}
