$(document).ready(function(){
    'use strict';
    console.log('main.js を読み込み中．．．')

    paper.install(window);   //paperの準備
    paper.setup(document.getElementById('mainCanvas'));   //mainCanvasをキャンパスに

    let tool = new Tool();

    let c = Shape.Circle(200, 200, 50);   //中心の円
    c.fillColor = 'black';

    let text = new PointText(200, 200);   //新しいテキストを領域中央に
    text.justification = 'center';
    text.fillColor = 'White';
    text.fontSize = 14;
    text.content = 'Hello World';

    //イベントハンドラ
    tool.onMouseDown = function(event){
        let c = Shape.Circle(event.point,20);
        c.fillColor = 'green';
    }

});
