const styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-рол");
console.log(styles);
styles.splice((styles.length - 1) / 2, 1, "Классика");
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
