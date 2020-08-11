
var omikuji = (function (getCookie, setCookie) {
  var save = 31;
  var unList = [
    { src: '1.png', alt: '大吉' },
    { src: '2.png', alt: '吉' },
    { src: '3.png', alt: '凶' },
    { src: '4.png', alt: '大凶' }
  ];

  return function (node) {
    var d = node.ownerDocument;
    var v = d./*@cc_on @if (1) parentWindow @else@*/ defaultView /*@end@*/;

    var today = (new Date).getDate () + '';
    var lastDay = getCookie.call (v, 'day');
    var unsei;
    var no;

    if (today === lastDay)
      unsei = unList [Number (getCookie.call (v, 'un'))];
    
    else {
      no = Math.floor (Math.random() * unList.length);
      unsei = unList[no];
      setCookie.call (v, 'day', today, save);
      setCookie.call (v, 'un', String (no), save);
    }

    node.src = unsei.src;
    node.alt = unsei.alt;
  };
})(
  function () {
    return (function (name) {
      var d = this.document;
      var n = encodeURIComponent (name).replace (/([.*()])/g, '\\$1');
      var v = d.cookie.match (RegExp (n + '\\s*=\\s*(.*?)(?:[\\s;,]|$)'));
      return v ? decodeURIComponent (v[1]) : '';
    }).apply (this, arguments);
  },
  
  function () {
    return (function (name, value, day, path, domain) {
      var d = this.document;
      var t = new Date;
      t.setDate (t.getDate () + (day || 0));
      d.cookie = encodeURIComponent (name) + '=' + encodeURIComponent (value) + ';' +
        'expires=' + t.toUTCString () + ';' +
        (path ? 'path=' + encodeURIComponent (path) + '': '') +
        (domain ? 'domain=' + encodeURIComponent (domain) + ';': '');
    }).apply (this, arguments);
  });