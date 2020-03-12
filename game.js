// +1 for RED, +2 for YELLOW
var gameOver = false;
var isRED = false;
var dropdiv;
var layout = [ [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] , [0,0,0,0,0,0] ];
var maxDepth = [ 6 , 6 , 6 , 6 , 6 , 6 , 6 ];


function showTA(){
    if(isRED){
        let item = document.getElementById('ra');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('ya');
        item.style.display = 'block';
    }
}
function hideTA(){
    if(isRED){
        let item = document.getElementById('ra');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('ya');
        item.style.display = 'none';
    }
}

function showTB(){
    if(isRED){
        let item = document.getElementById('rb');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('yb');
        item.style.display = 'block';
    }
}
function hideTB(){
    if(isRED){
        let item = document.getElementById('rb');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('yb');
        item.style.display = 'none';
    }
}

function showTC(){
    if(isRED){
        let item = document.getElementById('rc');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('yc');
        item.style.display = 'block';
    }
}
function hideTC(){
    if(isRED){
        let item = document.getElementById('rc');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('yc');
        item.style.display = 'none';
    }
}

function showTD(){
    if(isRED){
        let item = document.getElementById('rd');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('yd');
        item.style.display = 'block';
    }
}
function hideTD(){
    if(isRED){
        let item = document.getElementById('rd');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('yd');
        item.style.display = 'none';
    }
}

function showTE(){
    if(isRED){
        let item = document.getElementById('re');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('ye');
        item.style.display = 'block';
    }
}
function hideTE(){
    if(isRED){
        let item = document.getElementById('re');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('ye');
        item.style.display = 'none';
    }
}

function showTF(){
    if(isRED){
        let item = document.getElementById('rf');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('yf');
        item.style.display = 'block';
    }
}
function hideTF(){
    if(isRED){
        let item = document.getElementById('rf');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('yf');
        item.style.display = 'none';
    }
}

function showTG(){
    if(isRED){
        let item = document.getElementById('rg');
        item.style.display = 'block';
        //alert("SHOULDN'T BE CALLED");
    } else {
        let item = document.getElementById('yg');
        item.style.display = 'block';
    }
}
function hideTG(){
    if(isRED){
        let item = document.getElementById('rg');
        item.style.display = 'none';
    } else {
        let item = document.getElementById('yg');
        item.style.display = 'none';
    }
}

function initCoin(dropped){
    dropped.style.width = '80px';
    dropped.style.height = '80px';
    dropped.style.margin = '20px 20px';
    dropped.style.borderRadius = '50%';
    dropped.style.display = 'block';


    if(isRED){
        dropped.style.backgroundColor='#ff3d33';
    } else {
        dropped.style.backgroundColor='#fffc4f';
    }
    
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

function dropTA(){
    
    if(maxDepth[0]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('ta');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[0][maxDepth[0]-1]++;
        } else {
            layout[0][maxDepth[0]-1]++;
            layout[0][maxDepth[0]-1]++;
        }

        maxDepth[0]--;

        checkState();
    } else {
    alertMaxLimit();
    }
}

function dropTB(){
    if(maxDepth[1]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('tb');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[1][maxDepth[1]-1]++;
        } else {
            layout[1][maxDepth[1]-1]++;
            layout[1][maxDepth[1]-1]++;
        }

        maxDepth[1]--;

        checkState();
    } else {
        alertMaxLimit();    
    }
}

function dropTC(){
    
    if(maxDepth[2]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('tc');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[2][maxDepth[2]-1]++;
        } else {
            layout[2][maxDepth[2]-1]++;
            layout[2][maxDepth[2]-1]++;
        }

        maxDepth[2]--;

        checkState();
    } else {
        alertMaxLimit();
    }    
}

function dropTD(){
    
    if(maxDepth[3]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('td');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[3][maxDepth[3]-1]++;
        } else {
            layout[3][maxDepth[3]-1]++;
            layout[3][maxDepth[3]-1]++;
        }

        maxDepth[3]--;

        checkState();
    } else {
        alertMaxLimit();
    }
}

function dropTE(){
    
    if(maxDepth[4]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('te');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[4][maxDepth[4]-1]++;
        } else {
            layout[4][maxDepth[4]-1]++;
            layout[4][maxDepth[4]-1]++;
        }

        maxDepth[4]--;

        checkState();
    } else {
        alertMaxLimit();
    }
}

function dropTF(){
    
    if(maxDepth[5]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('tf');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[5][maxDepth[5]-1]++;
        } else {
            layout[5][maxDepth[5]-1]++;
            layout[5][maxDepth[5]-1]++;
        }

        maxDepth[5]--;

        checkState();
    } else {
        alertMaxLimit();
    }
}

function dropTG(){
    
    if(maxDepth[6]>0){
        dropdiv = document.createElement("div");
        initCoin(dropdiv);

        let parent = document.getElementById('tg');
        parent.appendChild(dropdiv);


        if(isRED){
            layout[6][maxDepth[6]-1]++;
        } else {
            layout[6][maxDepth[6]-1]++;
            layout[6][maxDepth[6]-1]++;
        }

        maxDepth[6]--;

        checkState();
    } else {
        alertMaxLimit();
    }
}