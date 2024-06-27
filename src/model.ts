const Decorator = (extConfig?) => {
  return (Cls) => {
    console.log("Cls: ", Cls);
    return class extends Cls {};
  };
};

const Log = (target, key, descriptor) => {
  const originMethod = descriptor.value;

  descriptor.value = function (...params) {
    console.log("in log decorator...");
    originMethod.apply(this, params);
  };

  return descriptor;
};

@Decorator(Main)
class Main {
  @Log
  test() {}
}

// @ts-ignore
window.Test = new Main();
