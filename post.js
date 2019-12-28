const imgArr = require('./imagesObject.js');
const twitter = require('./twitter.js');

class Post {
    constructor(){}


    merge (data){
        const arr = [];

            // nested loops account for multiple street cleaning on the same day
        data.forEach((data) => {
            imgArr.forEach((imgArr) => {
                if(data.section == imgArr.section){
                    arr.push({
                        img: imgArr.img,
                        section:imgArr.section,
                    })
                }
            })
        })
        return arr
    };

    create(data, time){
        const arr = []
        if(0 < data.length){
            data.forEach((data) => {
                arr.push({
                    message: `Bridgeport street cleaning ${time} in section ${data.section} \n #chicago #streetcleaning`,
                    img: data.img 
                })
            })
        }else{
            arr.push({
                img: "img/Smile.png",
                message: `There is no street cleaning in Bridgeport ${time}`
            })
        }
        return arr;
    };
    
    post (data) {

        data.forEach((data) => {
            twitter(data.message, data.img)
        })
    };

    error(){
        twitter("Uh oh! Something is wrong.  I don't why I'm not working.  I should be up in running soon in the meantime vist the City Of Chicago's website https://www.chicago.gov/city/en/depts/streets/provdrs/streets_san/svcs/street_sweeping.html", "img/errpic.png")
    };

};

module.exports = Post;