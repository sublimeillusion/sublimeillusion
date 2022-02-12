const text = "@sublime_illusion";
const textDeux = "sblm.illusion@gmail.com";
const pUn = document.getElementById("pUn");
const pDeux = document.getElementById("pDeux");
    let index = 0;

        function autoWrite(){
            pUn.innerText = text.slice(0, index);
            pDeux.innerText = textDeux.slice(0, index);

            index++;

            if(index > textDeux.length){
            index = 0;
        }

        }

        setInterval(autoWrite, 100);