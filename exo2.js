document.querySelector('.exo1').style.display = "none"; 

////////////////////////////////////////////////////////////////////////////

                                // PARTIE 1 // 

////////////////////////////////////////////////////////////////////////////

// document.querySelector('.container2').style.display = "none";


// var diaporama = {
//     imageAfficher: null,
//     image: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
//     temps: 1000,
//     indice: 0,
//     start: function () {
//         this.imageAfficher.src = this.image[this.indice++];
//         if (this.indice >= this.image.length)
//             this.indice = 0;
//         setTimeout(() => {
//             this.start()
//         }, this.temps);
//     },
// };

// // diaporama.imageAfficher = document.querySelector('img');
// diaporama.start();

////////////////////////////////////////////////////////////////////////////

                                // PARTIE 2 // 

////////////////////////////////////////////////////////////////////////////

document.querySelector('.container').style.display = "none";
container2 = document.querySelector('.container2');

function Diaporama(imageAfficher, image, temps) {
    this.imageAfficher = imageAfficher;
    this.image = image;
    this.temps = temps;
    this.indice = 0;
    this.start = function () {
        this.imageAfficher.src = this.image[this.indice++];
                if (this.indice >= this.image.length)
                    this.indice = 0;
                setTimeout(() => {
                    this.start()
                }, this.temps);
             };
}

function createImage() {
    const image = document.createElement('img');
    container2.appendChild(image);
    return image;
}



const mesDiapos = [
    new Diaporama(createImage(), ["img/1.jpg", "img/2.jpg", "img/3.jpg"], 1000),
    new Diaporama(createImage(), ["img/4.jpg", "img/5.jpg", "img/6.jpg"], 1000)
];


for (const diaporama of mesDiapos) {
    diaporama.start();
}