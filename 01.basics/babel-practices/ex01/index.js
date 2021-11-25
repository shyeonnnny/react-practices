const babel = request('@babel/core');
const result = babel.transform("const fn = () => 1;", {})