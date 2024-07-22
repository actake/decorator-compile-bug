const Decorator = (targetClass, config?) => {
  // maybe use targetClass to do something
  return (Cls) => {
    return class extends Cls {};
  };
};

// will show runtime error
@Decorator(Main)
class Main {}
