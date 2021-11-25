function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = args.join(',');

    const idx = cache.findIndex((item)=> {
      return item.hash === hash
    });

    if(idx !== -1) {
      return `Из кэша: ${cache[idx].value}`
    }

    const result = func(...args);

    cache.push({
      hash,
      value: result
    })

    if(cache.length > 5) {
      cache.shift()
    }

    return `Вычисляем: ${result}`;
  }
}

//задача №2
function debounceDecoratorNew(func, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}


// задача №3
function debounceDecorator2(func, ms) {
  let isCooldown = false;

  const wrapper = function () {
    if (isCooldown) return;

    func.apply(this, arguments);

    wrapper.count += 1;

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };

  wrapper.count = 0
  return wrapper
}

