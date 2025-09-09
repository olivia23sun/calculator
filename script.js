class Cauculator{
    panel = $(".panel");
    history = $(".history");
    output = $(".output");

    data="0";
    prev_data="";
    operator="";

    update(){
        this.output.html(this.data); 
        //當我們點擊數字鍵時，我們會把number加到data上，並顯示出來
        this.history.html(this.prev_data + " " + this.operator);
    }

    constructor(){
        // constructor() 是 class 的建構函式。
        // 當你 new Calculator() 時，JS 會自動執行裡面的程式。
        
        // 這裡 constructor 裡呼叫 this.update() 是為了初始化畫面，讓一開始 output 就顯示 "0"。
        this.update()
    }
    numberclick(number){//把資料傳進去data裡，並顯示出來

        // 實務上都用三個等號，表示不做型別轉換
        // 0不等於false (數字、布林值)
        // 5不等於"5" (數字、字串)
        if(this.data === "" && number === "."){ return; }
        if(this.data.includes(".") && number === "."){return; }
        if(this.data[0] === "0"){
            this.data = number ;
            this.update();
            return
        }

        // 當輸出結果為空，不加新的數字。
        // 當輸出裡有小數點，不加新的數字。
        // 當第一個輸出的第一個字為 0 時直接替代數字。
        // 當條件成立時，這裡使用return直接跳出function。

        this.data += number;
        //如果 this.data 是數字 → 就是數值相加
        //如果 this.data 是字串 → 就是字串拼接。 
        this.update();  
    }

    setOperator(operator){ 
        if(this.prev_data.length === 0){
            this.prev_data = this.data;
            this.data = "0" ; 
        }
        this.operator = operator;
        this.update();
    }

    add(){
        this.setOperator("+");
    }
    minus () { 
        this.setOperator("-");
    }
    times () { 
        this.setOperator("*");
    }
    division () { 
        this.setOperator("/");
    }
    equal () { 
        switch(this.operator){
            // switch 語句是一種 條件判斷 的方式，適合用在 單一變數有多種可能值 時，比寫一堆 if...else if 更清楚。
            case "+":
                console.log("+");
                this.data = parseFloat(this.prev_data) + parseFloat(this.data);
                // parseFloat(string)
                // 字符串中的首個字符是否是數字。
                // 如果是，則對字符串進行解析，直到到達數字的末端為止，然後以數字返回該數字，而不是作為字符串。
                // 把字串轉成數字，並返回一個浮點數
                break;
            case "-":
                console.log("-");
                this.data = parseFloat(this.prev_data) - parseFloat(this.data);
                break;
                // break 用來跳出 switch，避免「貫穿」到下一個 case。
                // 如果沒寫 break，會繼續執行下面的 case。
            case "*":
                console.log("*");
                this.data = parseFloat(this.prev_data) * parseFloat(this.data);
                break;
            case "/":
                console.log("/");
                this.data = parseFloat(this.prev_data) / parseFloat(this.data);
                break;
        }
        this.data = this.data.toString();
        // 別的函示會做字串相加，所以要轉回去字串
        this.prev_data = "";
        this.operator = "";
        this.update();
    }

    delete() { 
        if(this.data.length>1){
            this.data = this.data.slice(0,-1);
            // 字串的 slice → 會回傳「從 start 到 end-1 的子字串」
            // 0 → 從第一個字元開始。
            // -1 → 表示「倒數第一個之前的位置」
        }else{
            this.data = "0" ;
        }
        this.update();
    }
    clear() { 
        this.data="0";
        this.prev_data="";
        this.operator="";
        this.update();
    }
    
}

calculator = new Cauculator()