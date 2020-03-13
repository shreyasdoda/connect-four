// +1 for RED, +2 for YELLOW
var gameOver = false;
var isRED = false;
var dropdiv;
var leftM, topM;
var layout = [ [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] ];
var map = [['ta','tb','tc','td','te','tf','tg'],['ba','bb','bc','bd','be','bf','bg'],['ca','cb','cc','cd','ce','cf','cg'],['da','db','dc','dd','de','df','dg'],['ea','eb','ec','ed','ee','ef','eg'],['fa','fb','fc','fd','fe','ff','fg'],['aa','ab','ac','ad','ae','af','ag']]
var maxDepth = [ 6 , 6 , 6 , 6 , 6 , 6 , 6 ];
var shadowMap = [ ['ra','rb','rc','rd','re','rf','rg'] , ['ya','yb','yc','yd','ye','yf','yg'] ];

function showShadow(column){
    if(isRED){
        let item = document.getElementById(shadowMap[0][column]);
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById(shadowMap[1][column]);
        item.style.display = 'block';
    }  
}

function hideShadow(column){
    let item = document.getElementById(shadowMap[0][column]);
    item.style.display = 'none';
    
    item = document.getElementById(shadowMap[1][column]);
    item.style.display = 'none';
}

function initCoin(col){
    dropdiv = document.createElement("div");

    dropdiv.style.width = '80px';
    dropdiv.style.height = '80px';
    dropdiv.style.borderRadius = '50%';
    dropdiv.style.display = 'block';
    dropdiv.style.margin = '20px 20px';

    if(isRED){
        dropdiv.style.backgroundColor='#ff3d33';
    } else {
        dropdiv.style.backgroundColor='#fffc4f';
    }

    let parent = document.getElementById(map[maxDepth[col]][col]);    
    parent.appendChild(dropdiv);

    
}

function checkState(){
    let count;
    //HORIZONTAL CHECK
    for(let i=0; i<6; i++){
        count=1;
        for(let j=0; j<6; j++){
            if(layout[j][i] == layout[j+1][i]){
                count++;

                if(count==4){
                    if(layout[j][i]==2 || layout[j][i]==1){
                        console.log(layout);
                        gameOver = true;
                        if(isRED){
                            alert("Red is the winner!!!");
                        } else {
                            alert("Yellow is the winner!!!");
                        }
                        location.reload();
                    } else {
                        count = 1;
                    }
                }
            } else {
                count=1;
            }
        }
    }
    //VERTICAL CHECK
    if(!gameOver){
        for(let i=0; i<7; i++){
            count=1;
            for(let j=0; j<5; j++){
                if(layout[i][j] == layout[i][j+1]){
                    count++;
    
                    if(count==4){
                        if(layout[i][j]==2 || layout[i][j]==1){
                            console.log(layout);
                            gameOver = true;
                            if(isRED){
                                alert("Red is the winner!!!");
                            } else {
                                alert("Yellow is the winner!!!");
                            }
                            location.reload();
                        } else {
                            count = 1;
                        }
                    }
                } else {
                    count=1;
                }
            }
        }
    }
    //DIAGONAL CHECK
    if(!gameOver){
        for(let i=3; i<=5; i++){
            let t;
            let u;
            count = 1;
            for(t=0, u=i; t<i, u>0; t++, u--){
                if(layout[t][u] == layout[t+1][u-1]){
                    count++;

                    if(count==4){
                        if(layout[t][u]==2 || layout[t][u]==1){
                            console.log(layout);
                            gameOver = true;
                            if(isRED){
                                alert("Red is the winner!!!");
                            } else {
                                alert("Yellow is the winner!!!");
                            }
                            break;
                        } else {
                            count = 1;
                        }
                    }
                } else {
                    count=1;
                }
            }
        }
    }


    if(!gameOver){
        for(let i=0; i<=2; i++){
            let t;
            let u;
            for(u=i, t=6; u<5, t>i+1; u++, t--){
                if(layout[t][u] == layout[t-1][u+1]){
                    count++;

                    if(count==4){
                        if(layout[t][u]==2 || layout[t][u]==1){
                            console.log(layout);
                            gameOver = true;
                            if(isRED){
                                alert("Red is the winner!!!");
                            } else {
                                alert("Yellow is the winner!!!");
                            }
                            //break;
                            location.reload();
                        } else {
                            count = 1;
                        }
                    }
                } else {
                    count=1;
                }
            }
        }
    }

    isRED = !isRED;
    console.log(layout);

}

function alertMaxLimit(){
    alert("This column is full");
}

function dropCoin(col){
    if(maxDepth[col]>0){
        initCoin(col);

        if(isRED){
            layout[col][maxDepth[col]-1]++;
        } else {
            layout[col][maxDepth[col]-1]++;
            layout[col][maxDepth[col]-1]++;
        }
        maxDepth[col]--;
        checkState();
    } else {
        alertMaxLimit();
    }
}