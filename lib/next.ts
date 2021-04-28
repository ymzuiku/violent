function getElementList(targets?: string | HTMLElement | HTMLElement[]) {
  let list: HTMLElement[] = [];
  if (targets) {
    if (typeof targets === "string") {
      let query = "";
      const _list = targets.split(", ");
      _list.forEach((v, i) => {
        v = v.trim();
        if (i === _list.length - 1) {
          query += `${v}[v-ob], ${v} [v-ob]`;
        } else {
          query += `${v}[v-ob], ${v} [v-ob],`;
        }
      });
      list = document.body.querySelectorAll(query) as any;
    } else if (Object.prototype.toString.call(targets) === "[object Array]") {
      list = [...(targets as any[])];
      (targets as any[]).forEach((e) => {
        list.push(...e.querySelectorAll("*"));
      });
    } else {
      list = [targets as any];
      list.push(...(targets as any).querySelectorAll("*"));
    }
  }
  return list;
}

export const next = (
  focusUpdateTargets?: string | HTMLElement | HTMLElement[],
  ignoreUpdateTargets?: string | HTMLElement | HTMLElement[]
) => {
  if (!focusUpdateTargets) {
    focusUpdateTargets = "*";
    // console.error("aoife.next() need target");
    // return;
  }
  const ignoreList = getElementList(ignoreUpdateTargets);
  const eleList = getElementList(focusUpdateTargets);
  const outElement = [] as HTMLElement[];

  const len = eleList.length;
  for (let i = 0; i < len; i++) {
    const ele = eleList[i] as any;
    if ((ele as any)._events) {
      // 判断元素是否存在
      if (document.body.contains(ele)) {
        // 忽略元素及其子元素的更新
        if (ignoreList.length) {
          const len = ignoreList.length;
          let isUseIgnoreList = false;
          for (let i = 0; i < len; i++) {
            const parent = ignoreList[i] as HTMLElement;
            if (parent === ele || parent.contains(ele)) {
              isUseIgnoreList = true;
              break;
            }
          }
          if (isUseIgnoreList) {
            continue;
          }
        }

        // if (ele.__memo) {
        //   Promise.resolve(ele.__memo()).then((data) => {
        //     const isUpdate = !deepEqual(ele.__memoLast, data);
        //     ele.__memoLast = data;
        //     if (isUpdate) {
        //       ((ele as any).__next as Map<string, Function>).forEach((fn) => {
        //         fn();
        //       });
        //     }
        //   });
        // } else {
        //   ((ele as any).__next as Map<string, Function>).forEach((fn) => {
        //     fn();
        //   });
        // }
        (ele as any)._events.forEach((fn: Function) => {
          fn();
        });
        outElement.push(ele);
      }
    }
  }

  // events.forEach((fn) => fn());

  return outElement;
};
