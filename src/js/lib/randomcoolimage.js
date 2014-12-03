'use strict'

var IMAGES = [
  'https://ununsplash.imgix.net/uploads/1412825195419af52b492/8bc72ed7?q=75&fm=jpg&s=4f35827a6dc766d393fc51fce493d85d',
  'https://unsplash.imgix.net/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?q=75&fm=jpg&s=4aa1f8be0ed2abcc17d87554f9d55ad6',
  'https://unsplash.imgix.net/uploads/14120938606568dde6e2b/c9e42240?q=75&fm=jpg&s=30cfed70f59bbfce34b374e629bb5f84',
  'https://ununsplash.imgix.net/reserve/D8ijGd3CSGq4BxJ9EzTf_13976945916_fa0ce84ee3_o.jpg?q=75&fm=jpg&s=2fce49d5652813cba428a0f1cc28c5e8',
  'https://ununsplash.imgix.net/reserve/wPCyys8TPCHY3GXm2N2D_ssp_inthewoods_1.jpg?q=75&fm=jpg&s=3b3d9ee14e903890db2ebe5962a8b72f',
  'https://ununsplash.imgix.net/reserve/tdedkQnQGCgIhk9eoEkP_DSC_0983.JPG?q=75&fm=jpg&s=6a5691b52e0f3dcb148472b085d938c3',
  'https://ununsplash.imgix.net/reserve/xpdPwXTASnOUXFpIPgDs_IMG_1460_edt.jpg?q=75&fm=jpg&s=14f08c0d844035df3c9fea8705d4c38c',
  'https://unsplash.imgix.net/reserve/Y1hediOeRoya666XCjYg_forest.jpg?q=75&fm=jpg&s=005a5782dc5648a3acb4ae1fc0c8380c',
  'https://ununsplash.imgix.net/reserve/fawrXCzwSsOUMmJr9GGD_alcatraz.jpg?q=75&fm=jpg&s=581307737e7c9f8b24e46d7e770f5769',
  'https://ununsplash.imgix.net/reserve/9Fx2auQ4yoHM8OpWA8qw__MG_5265.jpg?q=75&fm=jpg&s=b9f8e1ee1ac0d3c4a2d10aaccdd3e987',
  'https://ununsplash.imgix.net/reserve/de9uL9L7RSmzV4SAoAO5_Lauren%20and%20Winona%20Under%20a%20pass-1.jpg?q=75&fm=jpg&s=c0435c5678a4cece85eaa8449ab34b96',
  'https://unsplash.imgix.net/reserve/YFdIoUsRJCAehcoUnQaS_Straw.jpg?q=75&fm=jpg&s=d70af56d44f1ce6ae2b12dd7923e9e2a',
  'https://unsplash.imgix.net/reserve/vNE8214NS9GOvXOy7DCu_DSC_0266.JPG?q=75&fm=jpg&s=5a1c16d91c91f4917ebef4c8d52e460b',
  'https://unsplash.imgix.net/reserve/QGXfT1CkRpmvlwtPpgul_IMG_0558.jpg?q=75&fm=jpg&s=25c25f99c3faba09b92aacf40a9e9de5',
  'https://ununsplash.imgix.net/reserve/oMRKkMc4RSq7N91OZl0O_IMG_8309.jpg?q=75&fm=jpg&s=bf347fd1b4268fd372a2ca782c84b3e2',
  'https://ununsplash.imgix.net/reserve/P6A1ZZ8nRPYKZHXbLikA_2014-07-11%2017.39.15-1.jpg?q=75&fm=jpg&s=83d1ffb31e2274d5871068f4d43733ba'
]

var random = require('unique-random')(0, IMAGES.length - 1)

module.exports = function() {
  return IMAGES[random()]
}
