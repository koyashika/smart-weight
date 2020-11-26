
 function calcBMI() {
  var a = document.getElementById("i0").value;
  var b = document.getElementById("i1").value;
  var num1 = parseFloat(b / (a * a) * 10000);
  var num2 = num1 * 10;
  var bmi = Math.ceil(num2) / 10;

  if (bmi < 14) {
      document.getElementById("yase").textContent = "痩せ過ぎて危険！！";
  } else if (bmi < 17) {
      document.getElementById("yase").textContent = "モデル体重 プロでないかぎり真似したらだめ";
  } else if (bmi < 18.5) {
      document.getElementById("yase").textContent = "プリンセス体重 モデル、女優等、芸能人並みの体型です";
  } else if (bmi >= 18.6 && bmi < 20.9) {
       document.getElementById("biyou").textContent = "美容体重 健康も維持しつつスリムな体型です";
  } else if (bmi >= 20.9 && bmi < 25) {
      document.getElementById("hyojun").textContent = "健康体重 健康的で病気になりにくい体型です";
  } else if (bmi >= 25 && bmi <29.9) {
        document.getElementById("himan").textContent = "肥満度１マシュマロ体型です";
  } else if (bmi >= 30 && bmi < 34.9) {
      document.getElementById("himan").textContent = "肥満度2 ぽっちゃり体型です";
  } else if (bmi >= 35 && bmi < 39.9) {
    document.getElementById("himan").textContent = "肥満度3 かなりふくよかな体型です";
  } else if (bmi >= 40) {
        document.getElementById("himan").textContent = "肥満度4 健康に気をつけて！！";
  } 
  document.getElementById("bmi").textContent = bmi ;
  
  var element = document.getElementById("gender") ;
  var radioNodeList = element.sex ;
  var c = radioNodeList.value ;

  if ( c === "woman" && bmi < 14.9) {
      document.getElementById("figure").textContent = "桐谷美玲 (163cm/39kg BMI14)";
  } else if (bmi >= 15 && bmi <= 15.9) {
      document.getElementById("figure").textContent = "長澤まさみ(168cm/43cm BMI15)";
  } else if ( c === "woman" && bmi >= 16 && bmi <= 16.9) {
      document.getElementById("figure").textContent = "飯豊まりえ(167cm/43kg BMI16)";
  } else if ( c === "woman" && bmi >= 17 && bmi <= 17.9) {
      document.getElementById("figure").textContent = "藤田ニコル(165cm/48kg BMI17)";
  } else if ( c === "woman" && bmi >= 18 && bmi <= 18.9) {
      document.getElementById("figure").textContent = "水原希子(163cm/48kg BMI18)";
  } else if ( c === "woman" && bmi >= 19 && bmi <= 19.9) {
      document.getElementById("figure").textContent = "広瀬アリス(164cm/51kg BMI19)";
  } else if ( c === "woman" && bmi >= 20 && bmi <= 20.9) {
      document.getElementById("figure").textContent = "横澤なつこ(169cm/59kg BMI20)";
  } else if ( c === "woman" && bmi >= 21 && bmi <= 21.9) {
      document.getElementById("figure").textContent = "丸山香里奈(162cm/57kg BMI21)";
  } else if ( c === "woman" && bmi >= 22 && bmi <= 22.9) {
      document.getElementById("figure").textContent = "磯山さやか(155cm/53kg BMI22)";
  } else if ( c === "woman" && bmi >= 23 && bmi <= 23.9) {
      document.getElementById("figure").textContent = "まひる（ガンバレルーヤ）(166cm/65kg BMI23)";
  } else if ( c === "woman" && bmi >= 24 && bmi <= 24.9) {
      document.getElementById("figure").textContent = "いとうあさこ(162cm/63kg BMI24)";
  } else if ( c === "woman" && bmi >= 25 && bmi <= 25.9) {
      document.getElementById("figure").textContent = "誠子（尼神インター）(162cm/65kg BMI25)";
  } else if ( c === "woman" && bmi >= 26 && bmi <= 26.9) {
      document.getElementById("figure").textContent = "よしこ(ガンバレルーヤ)(158cm/67kg BMI26)";
  } else if ( c === "woman" && bmi >= 27 && bmi <= 27.9) {
      document.getElementById("figure").textContent = "柳原可奈子(153cm/65kg BMI27)";
  } else if ( c === "woman" && bmi >= 28 && bmi <= 28.9) {
      document.getElementById("figure").textContent = "近藤くみこ(ニッテェ)(152cm/65kg BMI28)";
  } else if ( c === "woman" && bmi >= 29 && bmi <= 29.9) {
      document.getElementById("figure").textContent = "大島美幸(森三中)(166cm/80kg BMI29)";
  } else if ( c === "woman" && bmi >= 30 && bmi <= 30.9) {
      document.getElementById("figure").textContent = "近藤春菜(ハリセンボン)(155cm/73kg BMI30)";
  } else if ( c === "woman" && bmi >= 31 && bmi <= 31.9) {
      document.getElementById("figure").textContent = "バービー(159cm/73kg BMI31)";
  } else if ( c === "woman" && bmi >= 32 && bmi <= 32.9) {
      document.getElementById("figure").textContent = "ゆめっち(153cm/75kg BMI32)";
  } else if ( c === "woman" && bmi >= 33 && bmi <= 36.9) {
      document.getElementById("figure").textContent = "江上敬子(ニッチェ)(156cm/83kg BMI34)";
  } else if ( c === "woman" && bmi >= 37 && bmi <= 40.9) {
      document.getElementById("figure").textContent = "ゆいP(おかずクラブ)(158cm/96kg BMI38)";
  } else if ( c === "woman" && bmi >= 41)  {
      document.getElementById("figure").textContent = "渡辺直美(158cm/107kg BMI42)";
  }
   
  var element = document.getElementById("gender") ;
  var radioNodeList = element.sex ;
  var c = radioNodeList.value ;

  if ( c === "man" && bmi < 15.9) {
      document.getElementById("figure").textContent = "矢部太郎 (158cm/39kg BMI15)";
  } else if ( c === "man" && bmi >= 16 && bmi <= 16.9) {
      document.getElementById("figure").textContent = "山根良顕(アンガールズ）(180cm/54kg BMI16)";
  } else if ( c === "man" && bmi >= 17 && bmi <= 17.9) {
      document.getElementById("figure").textContent = "粗品（霜降り明星(180cm/56kg BMI17)";
  } else if ( c === "man" && bmi >= 18 && bmi <= 18.9) {
      document.getElementById("figure").textContent = "綾野剛(180cm/60kg BMI18)";
  } else if ( c === "man" && bmi >= 19 && bmi <= 19.9) {
      document.getElementById("figure").textContent = "福士蒼汰(176cm/66kg BMI19)";
  } else if ( c === "man" && bmi >= 20 && bmi <= 20.9) {
      document.getElementById("figure").textContent = "櫻井翔(171cm/58kg BMI20)";
  } else if ( c === "man" && bmi >= 21 && bmi <= 21.9) {
      document.getElementById("figure").textContent = "ノブ(千鳥)(173cm/65kg BMI21)";
  } else if ( c === "man" && bmi >= 22 && bmi <= 22.9) {
      document.getElementById("figure").textContent = "山内健司(カマイタチ)(168cm/63kg BMI22)";
  } else if ( c === "man" && bmi >= 23 && bmi <= 23.9) {
      document.getElementById("figure").textContent = "ナダル(コロチキ)(178cm/75kg BMI23)";
  } else if ( c === "man" && bmi >= 24 && bmi <= 24.9) {
      document.getElementById("figure").textContent = "荒川良々(183cm/83kg BMI24)";
  } else if ( c === "man" && bmi >= 25 && bmi <= 25.9) {
      document.getElementById("figure").textContent = "せいや（霜降り明星）(163cm/67kg BMI25)";
  } else if ( c === "man" && bmi >= 26 && bmi <= 26.9) {
      document.getElementById("figure").textContent = "ケンドーコバヤシ(172cm/77kg BMI26)";
  } else if ( c === "man" && bmi >= 27 && bmi <= 27.9) {
      document.getElementById("figure").textContent = "松尾駿（チョコプラ）(169cm/77kg BMI27)";
  } else if ( c === "man" && bmi >= 28 && bmi <= 28.9) {
      document.getElementById("figure").textContent = "斉藤慎二(ジャングルポケット)(176cm/88kg BMI28)";
  } else if ( c === "man" && bmi >= 29 && bmi <= 29.9) {
      document.getElementById("figure").textContent = "内海崇(ミルクボーイ)(168cm/82kg BMI29)";
  } else if ( c === "man" && bmi >= 30 && bmi <= 30.9) {
      document.getElementById("figure").textContent = "日村勇紀(バナナマン)(172cm/90kg BMI30)";
  } else if ( c === "man" && bmi >= 31 && bmi <= 31.9) {
      document.getElementById("figure").textContent = "昴生(ミキ)(164cm853kg BMI31)";
  } else if ( c === "man" && bmi >= 32 && bmi <= 32.9) {
      document.getElementById("figure").textContent = "山崎弘也(163cm/93kg BMI32)";
  } else if ( c === "man" && bmi >= 33 && bmi <= 33.9) {
      document.getElementById("figure").textContent = "木下隆行(TKO)(183cm/113kg BMI33)";
  } else if ( c === "man" && bmi >= 34 && bmi <= 35.5) {
      document.getElementById("figure").textContent = "塚地武雄(ドランクドラゴン)(168cm/98kg BMI34)";
  } else if ( c === "man" && bmi >= 35.6 && bmi <= 37.5) {
      document.getElementById("figure").textContent = "パパイヤ鈴木(174cm/110kg BMI36)";
  } else if ( c === "man" && bmi >= 37.6 && bmi <= 39.5) {
    document.getElementById("figure").textContent = "石塚英彦(175cm/117kg BMI38)";
  } else if ( c === "man" && bmi >= 39.5 && bmi <= 43.5) {
    document.getElementById("figure").textContent = "小杉竜一(ブラックマヨネーズ)(170cm/115kg BMI40)";
  } else if ( c === "man" && bmi >= 43.6)  {
    document.getElementById("figure").textContent = "彦摩呂(172cm/135kg BMI45)";
  }

  var figure1 = parseFloat(a * a * 22 / 10000);
  var num3 = figure1 * 10;
  var health = Math.ceil(num3) /10;
  var figure2 = parseFloat(a * a * 20 / 10000);
  var num4 = figure2 * 10;
  var beauty = Math.ceil(num4) /10;
  var figure3 = parseFloat(a * a * 18 / 10000);
  var num5 = figure3 * 10;
  var model = Math.ceil(num5) /10;
  document.getElementById("health").textContent = health;
  document.getElementById("beauty").textContent = beauty;
  document.getElementById("model").textContent = model;
  var figure1 = 1;
    console.log(figure1.toFixed(1));
}