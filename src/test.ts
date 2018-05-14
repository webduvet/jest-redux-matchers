type Tp = {
  type: string;
};

const ts = (d: Tp) => {
  console.log(d);
};

ts({ type: "sef" });

const some: (str: string) => number = (str: string) => Number(str);
