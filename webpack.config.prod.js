const imagemin = require("imagemin");
const webp = require("imagemin-webp");
const imageminJpegtran = require("imagemin-jpegtran");

(async () => {
  await imagemin(["img/*.jpg"], {
    destination: "img/",
    plugins: [imageminJpegtran()],
  });
  await imagemin(["img/productos/*.jpg"], {
    destination: "img/productos/",
    plugins: [imageminJpegtran()],
  });
  await imagemin(["img/*.{jpg,png}"], {
    destination: "img/",
    plugins: [webp({ quality: 100 })],
  });
  await imagemin(["img/productos/*.{jpg,png}"], {
    destination: "img/productos/",
    plugins: [webp({ quality: 100 })],
  });

  console.log("Optimized");
})();
