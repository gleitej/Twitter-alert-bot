class Filter {
    constructor(){}

    ward(data){
        const arr =[];
        data.forEach((data) => {
            if(data.ward == 11){
                arr.push(data)
            }
        })

        return arr;
    };
    
    month(data, month){
        const arr = [];
        data.forEach((data) => {
            if(data.month_number == month){
                arr.push(data)
            }
        })

        return arr
    };
    
    day(data, day){
        const arr = [];

        data.forEach((data) => {
            let x = data.dates.split(',');
                if(x[0] == day || x[1] == day){
                    arr.push(data)
                }
        })
    
        return arr
    };

}

module.exports = Filter;